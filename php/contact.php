<?php
declare(strict_types=1);

session_start();

require_once __DIR__ . '/db_connect.php';

header('Content-Type: application/json; charset=utf-8');

function sendJsonResponse(bool $success, string $message, array $extra = []): void
{
    echo json_encode(array_merge([
        'success' => $success,
        'message' => $message,
    ], $extra));
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(false, 'Méthode non autorisée.');
}

$nom = trim((string) ($_POST['nom'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$telephone = trim((string) ($_POST['telephone'] ?? ''));
$sujet = trim((string) ($_POST['sujet'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$honeypot = trim((string) ($_POST['website'] ?? ''));

if (!empty($honeypot)) {
    sendJsonResponse(false, 'Le formulaire a été rejeté comme message automatisé.');
}

if (!empty($_SESSION['contact_last_submit']) && (time() - (int) $_SESSION['contact_last_submit']) < 30) {
    sendJsonResponse(false, 'Merci de patienter 30 secondes avant un nouveau message.');
}

if (mb_strlen($nom) < 2 || mb_strlen($nom) > 100) {
    sendJsonResponse(false, 'Veuillez renseigner un nom valide.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendJsonResponse(false, 'Veuillez renseigner une adresse email valide.');
}

if ($telephone !== '' && !preg_match('/^[0-9+().\s-]{7,20}$/', $telephone)) {
    sendJsonResponse(false, 'Veuillez renseigner un numéro de téléphone valide.');
}

$allowedSubjects = ['inscription', 'visite', 'frais', 'autre'];
if (!in_array($sujet, $allowedSubjects, true)) {
    sendJsonResponse(false, 'Sujet invalide.');
}

if (mb_strlen($message) < 10 || mb_strlen($message) > 2000) {
    sendJsonResponse(false, 'Votre message doit contenir entre 10 et 2000 caractères.');
}

try {
    $connection = getDbConnection();

    $stmt = $connection->prepare(
        'INSERT INTO contacts (nom, email, telephone, sujet, message) VALUES (?, ?, ?, ?, ?)'
    );
    $stmt->bind_param('sssss', $nom, $email, $telephone, $sujet, $message);
    $stmt->execute();
    $stmt->close();

    $_SESSION['contact_last_submit'] = time();

    $to = getenv('MAIL_TO') ?: 'ecole@lessauterelles.com';
    $subject = 'Nouveau message de contact - Les Sauterelles';
    $body = "Nom : {$nom}\nEmail : {$email}\nTéléphone : {$telephone}\nSujet : {$sujet}\n\nMessage :\n{$message}";

    $emailSent = false;

    if (class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
        require_once __DIR__ . '/../vendor/autoload.php';

        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = getenv('SMTP_HOST') ?: 'localhost';
        $mail->Port = (int) (getenv('SMTP_PORT') ?: 1025);
        $mail->SMTPAuth = false;
        $mail->setFrom(getenv('SMTP_FROM') ?: 'noreply@lessauterelles.com', 'Site Les Sauterelles');
        $mail->addAddress($to, 'École Les Sauterelles');
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AltBody = strip_tags($body);

        try {
            $mail->send();
            $emailSent = true;
        } catch (Exception $exception) {
            $emailSent = false;
        }
    } else {
        $emailSent = @mail($to, $subject, $body, "From: noreply@lessauterelles.com\r\nReply-To: {$email}");
    }

    if ($emailSent) {
        sendJsonResponse(true, 'Votre message a bien été envoyé et enregistré.');
    }

    sendJsonResponse(true, 'Votre message a bien été enregistré. L’email de notification n’a pas pu être envoyé depuis cette configuration locale.', [
        'email_sent' => false,
    ]);
} catch (Throwable $exception) {
    sendJsonResponse(false, 'Une erreur est survenue lors de l’enregistrement du message.');
}
?>
