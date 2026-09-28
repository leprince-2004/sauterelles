<?php
declare(strict_types=1);

session_start();

require_once __DIR__ . '/db_connect.php';

header('Content-Type: application/json; charset=utf-8');

/*
|--------------------------------------------------------------------------
| Fonction de réponse JSON
|--------------------------------------------------------------------------
*/

function sendJsonResponse(
    bool $success,
    string $message,
    array $extra = []
): void {

    echo json_encode(array_merge([
        'success' => $success,
        'message' => $message
    ], $extra));

    exit;
}


/*
|--------------------------------------------------------------------------
| Vérification de la méthode HTTP
|--------------------------------------------------------------------------
*/

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {

    sendJsonResponse(
        false,
        'Méthode non autorisée.'
    );

}


/*
|--------------------------------------------------------------------------
| Protection Honeypot
|--------------------------------------------------------------------------
*/

$honeypot = trim($_POST['website'] ?? '');

if ($honeypot !== '') {

    sendJsonResponse(
        false,
        'Requête rejetée.'
    );

}


/*
|--------------------------------------------------------------------------
| Protection contre le spam
|--------------------------------------------------------------------------
*/

if (
    isset($_SESSION['inscription_last_submit']) &&
    (time() - $_SESSION['inscription_last_submit']) < 30
) {

    sendJsonResponse(
        false,
        'Veuillez patienter 30 secondes avant une nouvelle inscription.'
    );

}


/*
|--------------------------------------------------------------------------
| Récupération des données
|--------------------------------------------------------------------------
*/

$nom               = trim($_POST['nom'] ?? '');
$prenom            = trim($_POST['prenom'] ?? '');
$dateNaissance     = trim($_POST['date_naissance'] ?? '');
$sexe              = trim($_POST['sexe'] ?? '');
$classe            = trim($_POST['classe'] ?? '');
$nomParent         = trim($_POST['parent_nom'] ?? '');
$telephoneParent   = trim($_POST['telephone'] ?? '');
$emailParent       = trim($_POST['email'] ?? '');
$adresse           = trim($_POST['adresse'] ?? '');


/*
|--------------------------------------------------------------------------
| Validation Nom
|--------------------------------------------------------------------------
*/

if (
    strlen($nom) < 2 ||
    strlen($nom) > 100
) {

    sendJsonResponse(
        false,
        "Nom de l'enfant invalide."
    );

}


/*
|--------------------------------------------------------------------------
| Validation Prénom
|--------------------------------------------------------------------------
*/

if (
    strlen($prenom) < 2 ||
    strlen($prenom) > 100
) {

    sendJsonResponse(
        false,
        "Prénom de l'enfant invalide."
    );

}


/*
|--------------------------------------------------------------------------
| Validation Date
|--------------------------------------------------------------------------
*/

if ($dateNaissance == '') {

    sendJsonResponse(
        false,
        'Veuillez renseigner une date de naissance.'
    );

}

$date = DateTime::createFromFormat(
    'Y-m-d',
    $dateNaissance
);

if (!$date) {

    sendJsonResponse(
        false,
        'Date de naissance invalide.'
    );

}


/*
|--------------------------------------------------------------------------
| Vérification de l'âge
|--------------------------------------------------------------------------
*/

$today = new DateTime();

$age = $today->diff($date)->y;

if ($age < 2 || $age > 25) {

    sendJsonResponse(
        false,
        "L'âge renseigné est invalide."
    );

}


/*
|--------------------------------------------------------------------------
| Validation Sexe
|--------------------------------------------------------------------------
*/

$sexesAutorises = [

    'Masculin',
    'Feminin'

];

if (!in_array($sexe, $sexesAutorises, true)) {

    sendJsonResponse(
        false,
        'Sexe invalide.'
    );

}


/*
|--------------------------------------------------------------------------
| Validation Classe
|--------------------------------------------------------------------------
*/

if ($classe === '') {

    sendJsonResponse(
        false,
        'Veuillez sélectionner une classe.'
    );

}


/*
|--------------------------------------------------------------------------
| Validation Parent
|--------------------------------------------------------------------------
*/

if (
    strlen($nomParent) < 5 ||
    strlen($nomParent) > 150
) {

    sendJsonResponse(
        false,
        'Nom du parent invalide.'
    );

}


/*
|--------------------------------------------------------------------------
| Validation Téléphone
|--------------------------------------------------------------------------
*/

if (
    !preg_match('/^[0-9+().\s-]{7,30}$/', $telephoneParent)
) {

    sendJsonResponse(
        false,
        'Numéro de téléphone invalide.'
    );

}


/*
|--------------------------------------------------------------------------
| Validation Email
|--------------------------------------------------------------------------
*/

if (
    !filter_var(
        $emailParent,
        FILTER_VALIDATE_EMAIL
    )
) {

    sendJsonResponse(
        false,
        'Adresse email invalide.'
    );

}


/*
|--------------------------------------------------------------------------
| Validation Adresse
|--------------------------------------------------------------------------
*/

if (
    strlen($adresse) < 5
) {

    sendJsonResponse(
        false,
        'Veuillez renseigner une adresse valide.'
    );

}