<?php
declare(strict_types=1);

session_name('sauterelles_admin');

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

if (empty($_SESSION['admin_authenticated'])) {
    header('Location: index.php');
    exit;
}

require_once __DIR__ . '/../php/db_connect.php';

$connection = getDbConnection();
$selectedSubject = trim((string) ($_GET['subject'] ?? ''));
$allowedSubjects = ['inscription', 'visite', 'frais', 'autre'];

if (!in_array($selectedSubject, $allowedSubjects, true)) {
    $selectedSubject = '';
}

if (isset($_GET['mark_read']) && is_numeric($_GET['mark_read'])) {
    $id = (int) $_GET['mark_read'];
    $update = $connection->prepare('UPDATE contacts SET lu = 1 WHERE id = ?');
    $update->bind_param('i', $id);
    $update->execute();
    $update->close();
    header('Location: messages.php' . ($selectedSubject !== '' ? '?subject=' . urlencode($selectedSubject) : ''));
    exit;
}

if (isset($_GET['delete']) && is_numeric($_GET['delete'])) {
    $id = (int) $_GET['delete'];
    $delete = $connection->prepare('DELETE FROM contacts WHERE id = ?');
    $delete->bind_param('i', $id);
    $delete->execute();
    $delete->close();
    header('Location: messages.php' . ($selectedSubject !== '' ? '?subject=' . urlencode($selectedSubject) : ''));
    exit;
}

$query = 'SELECT id, nom, email, telephone, sujet, message, date_envoi, lu FROM contacts';
$params = [];
$types = '';

if ($selectedSubject !== '') {
    $query .= ' WHERE sujet = ?';
    $params[] = $selectedSubject;
    $types = 's';
}

$query .= ' ORDER BY date_envoi DESC';

if ($selectedSubject !== '') {
    $stmt = $connection->prepare($query);
    $stmt->bind_param($types, ...$params);
    $stmt->execute();
    $result = $stmt->get_result();
    $messages = $result ? $result->fetch_all(MYSQLI_ASSOC) : [];
    $stmt->close();
} else {
    $result = $connection->query($query);
    $messages = $result ? $result->fetch_all(MYSQLI_ASSOC) : [];
}

$totalMessages = count($messages);
$unreadMessages = count(array_filter($messages, static fn($message): bool => (int) $message['lu'] === 0));
$latestMessage = $messages[0] ?? null;

$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$scriptPath = dirname((string) ($_SERVER['SCRIPT_NAME'] ?? '/admin/messages.php'));
$basePath = str_replace('\\', '/', $scriptPath);
if (preg_match('#/admin$#', $basePath)) {
    $basePath = substr($basePath, 0, -6);
}
$siteUrl = $scheme . '://' . $host . $basePath . '/index.html';

function formatMessageDate(string $date): string
{
    $timestamp = strtotime($date);
    return $timestamp ? date('d/m/Y à H:i', $timestamp) : $date;
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boîte de réception - Les Sauterelles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        :root {
            --brown: #5c2d0e;
            --brown-dark: #3f200a;
            --cream: #f8f2eb;
            --gold: #d4a017;
            --text: #4b2a16;
            --muted: #7a614e;
        }

        body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #fffdf9 0%, var(--cream) 100%);
            color: var(--text);
        }

        .panel-card {
            border: 0;
            border-radius: 20px;
            box-shadow: 0 16px 36px rgba(92, 45, 14, 0.10);
        }

        .header-bar {
            background: linear-gradient(135deg, var(--brown) 0%, var(--brown-dark) 100%);
            color: white;
            border-radius: 24px;
        }

        .stat-card {
            border: 0;
            border-radius: 16px;
            background: white;
            box-shadow: 0 10px 25px rgba(92, 45, 14, 0.07);
        }

        .table thead {
            background: var(--brown);
            color: white;
        }

        .btn-brown {
            background: var(--brown);
            color: #fff;
            border: 0;
        }

        .btn-brown:hover {
            background: var(--brown-dark);
            color: #fff;
        }

        .text-muted-soft {
            color: var(--muted);
        }
    </style>
</head>
<body>
    <div class="container py-4 py-lg-5">
        <div class="header-bar p-4 p-lg-5 mb-4">
            <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
                <div>
                    <div class="fw-semibold mb-2" style="color: rgba(255,255,255,0.85);">Les Sauterelles · Administration</div>
                    <h1 class="h3 mb-1">Boîte de réception</h1>
                    <p class="mb-0" style="color: rgba(255,255,255,0.85);">Consultez les messages envoyés via le formulaire de contact.</p>
                </div>
                <div class="d-flex flex-wrap gap-2">
                    <a href="index.php?logout=1" class="btn btn-light btn-sm text-brown">Se déconnecter</a>
                </div>
            </div>
        </div>

        <div class="row g-3 mb-4">
            <div class="col-md-4">
                <div class="stat-card p-4">
                    <div class="text-muted-soft small text-uppercase">Total messages</div>
                    <div class="display-6 fw-bold mt-2"><?= $totalMessages ?></div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="stat-card p-4">
                    <div class="text-muted-soft small text-uppercase">Non lus</div>
                    <div class="display-6 fw-bold mt-2"><?= $unreadMessages ?></div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="stat-card p-4">
                    <div class="text-muted-soft small text-uppercase">Dernier message</div>
                    <div class="fw-semibold mt-2">
                        <?= $latestMessage ? htmlspecialchars($latestMessage['nom'], ENT_QUOTES, 'UTF-8') : 'Aucun' ?>
                    </div>
                    <div class="small text-muted-soft">
                        <?= $latestMessage ? formatMessageDate((string) $latestMessage['date_envoi']) : '—' ?>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel-card card p-0">
            <div class="p-3 border-bottom bg-white">
                <form method="get" class="row g-2 align-items-end">
                    <div class="col-md-4">
                        <label for="subject" class="form-label small fw-semibold">Filtrer par sujet</label>
                        <select id="subject" name="subject" class="form-select form-select-sm">
                            <option value="">Tous les sujets</option>
                            <option value="inscription" <?= $selectedSubject === 'inscription' ? 'selected' : '' ?>>Demande d'inscription</option>
                            <option value="visite" <?= $selectedSubject === 'visite' ? 'selected' : '' ?>>Planifier une visite</option>
                            <option value="frais" <?= $selectedSubject === 'frais' ? 'selected' : '' ?>>Renseignements sur les frais</option>
                            <option value="autre" <?= $selectedSubject === 'autre' ? 'selected' : '' ?>>Autre question</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <button type="submit" class="btn btn-brown btn-sm w-100">Appliquer</button>
                    </div>
                    <div class="col-md-2">
                        <a href="messages.php" class="btn btn-outline-secondary btn-sm w-100">Tout voir</a>
                    </div>
                </form>
            </div>

            <?php if (empty($messages)) : ?>
                <div class="alert alert-info m-4 mb-0">Aucun message reçu pour le moment.</div>
            <?php else : ?>
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Sujet</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($messages as $message) : ?>
                                <tr>
                                    <td><?= (int) $message['id'] ?></td>
                                    <td class="fw-semibold"><?= htmlspecialchars($message['nom'], ENT_QUOTES, 'UTF-8') ?></td>
                                    <td><?= htmlspecialchars($message['email'], ENT_QUOTES, 'UTF-8') ?></td>
                                    <td><?= htmlspecialchars($message['sujet'], ENT_QUOTES, 'UTF-8') ?></td>
                                    <td style="max-width: 280px;">
                                        <div class="text-break">
                                            <?= nl2br(htmlspecialchars($message['message'], ENT_QUOTES, 'UTF-8')) ?>
                                        </div>
                                    </td>
                                    <td><?= htmlspecialchars(formatMessageDate((string) $message['date_envoi']), ENT_QUOTES, 'UTF-8') ?></td>
                                    <td>
                                        <div class="d-flex flex-wrap gap-2">
                                            <?php if ((int) $message['lu'] === 1) : ?>
                                                <span class="badge bg-success">Lu</span>
                                            <?php else : ?>
                                                <a href="messages.php?mark_read=<?= (int) $message['id'] ?><?= $selectedSubject !== '' ? '&subject=' . urlencode($selectedSubject) : '' ?>" class="btn btn-sm btn-brown">Marquer lu</a>
                                            <?php endif; ?>
                                            <a href="messages.php?delete=<?= (int) $message['id'] ?><?= $selectedSubject !== '' ? '&subject=' . urlencode($selectedSubject) : '' ?>" class="btn btn-sm btn-outline-danger" onclick="return confirm('Supprimer ce message ?')">Supprimer</a>
                                        </div>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
