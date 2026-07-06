<?php
declare(strict_types=1);

session_name('sauterelles_admin');

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'domain' => '',
        'secure' => isset($_SERVER['HTTPS']),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

$adminPasswordHash = '$2y$10$KfsoC62RepDp4RCg7uNWweJV5HXOtmbzxKSCyP5yG/6YFmpvp3Q5q';
$submittedUsername = '';
$error = '';

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: index.php');
    exit;
}

if (!empty($_SESSION['admin_authenticated']) && $_SESSION['admin_authenticated'] === true) {
    header('Location: messages.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $submittedUsername = trim((string) ($_POST['username'] ?? ''));
    $password = (string) ($_POST['password'] ?? '');

    if ($submittedUsername === 'admin' && password_verify($password, $adminPasswordHash)) {
        session_regenerate_id(true);
        $_SESSION['admin_authenticated'] = true;
        $_SESSION['admin_username'] = $submittedUsername;
        $_SESSION['admin_logged_at'] = time();
        header('Location: messages.php');
        exit;
    }

    $error = 'Identifiants incorrects. Veuillez réessayer.';
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administration - Les Sauterelles</title>
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
            min-height: 100vh;
        }

        .card-shell {
            border: 0;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(92, 45, 14, 0.16);
        }

        .panel-left {
            background: linear-gradient(145deg, var(--brown) 0%, var(--brown-dark) 100%);
            color: white;
        }

        .brand-badge {
            width: 54px;
            height: 54px;
            border-radius: 16px;
            background: rgba(255,255,255,0.16);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.15rem;
            letter-spacing: 0.08em;
        }

        .btn-brown {
            background: var(--brown);
            color: #fff;
            border: 0;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-brown:hover {
            background: var(--brown-dark);
            color: #fff;
            transform: translateY(-1px);
            box-shadow: 0 10px 20px rgba(92, 45, 14, 0.18);
        }

        .form-control:focus {
            border-color: var(--gold);
            box-shadow: 0 0 0 0.2rem rgba(212, 160, 23, 0.22);
        }
    </style>
</head>
<body>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="card card-shell">
                    <div class="row g-0">
                        <div class="col-lg-6 panel-left p-4 p-lg-5">
                            <div class="brand-badge mb-4">LS</div>
                            <h1 class="h3 fw-bold mb-3">Espace administration</h1>
                            <p class="mb-4" style="color: rgba(255,255,255,0.9);">
                                Gérez proprement la boîte de réception du formulaire de contact de Les Sauterelles.
                            </p>
                            <ul class="list-unstyled small mb-0">
                                <li class="mb-2"><span class="me-2">✓</span> Messages enregistrés en temps réel</li>
                                <li class="mb-2"><span class="me-2">✓</span> Consultation simple et rapide</li>
                                <li><span class="me-2">✓</span> Suivi des nouveaux messages</li>
                            </ul>
                        </div>

                        <div class="col-lg-6 p-4 p-lg-5 bg-white">
                            <h2 class="h4 fw-bold mb-3">Connexion sécurisée</h2>
                            <p class="text-muted mb-4">Accédez au panneau d’administration avec vos identifiants.</p>

                            <?php if (!empty($error)) : ?>
                                <div class="alert alert-danger mb-4" role="alert">
                                    <?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?>
                                </div>
                            <?php endif; ?>

                            <form method="post" class="needs-validation" novalidate>
                                <div class="mb-3">
                                    <label for="username" class="form-label fw-semibold">Nom d'utilisateur</label>
                                    <input type="text" class="form-control" id="username" name="username" value="<?= htmlspecialchars($submittedUsername, ENT_QUOTES, 'UTF-8') ?>" required>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label fw-semibold">Mot de passe</label>
                                    <input type="password" class="form-control" id="password" name="password" required>
                                </div>
                                <button type="submit" class="btn btn-brown w-100 py-2">Se connecter</button>
                            </form>

                            <div class="border-top pt-3 mt-4 small text-muted">
                                Compte de démonstration : <strong>admin</strong> / <strong>sauterelles2026</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
