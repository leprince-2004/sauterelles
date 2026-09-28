<?php
declare(strict_types=1);

session_start();

require_once __DIR__ . '/db_connect.php';

header('Content-Type: application/json; charset=utf-8');

function sendJsonResponse(bool $success, string $message, array $extra = []): void
{
    echo json_encode(array_merge([
        "success"=>$success,
        "message"=>$message
    ],$extra));

    exit;
}


/*====================================
Méthode
=====================================*/

if($_SERVER["REQUEST_METHOD"]!=="POST"){
    sendJsonResponse(false,"Méthode non autorisée.");
}


/*====================================
Anti Bot
=====================================*/

$honeypot=trim($_POST["website"]??"");

if($honeypot!==""){
    sendJsonResponse(false,"Message refusé.");
}


/*====================================
Anti Spam
=====================================*/

if(
    isset($_SESSION["contact_last_submit"]) &&
    time()-$_SESSION["contact_last_submit"]<30
){
    sendJsonResponse(false,"Veuillez patienter 30 secondes.");
}


/*====================================
Récupération
=====================================*/

$nom=trim($_POST["nom"]??"");
$email=trim($_POST["email"]??"");
$telephone=trim($_POST["telephone"]??"");
$sujet=trim($_POST["sujet"]??"");
$message=trim($_POST["message"]??"");


/*====================================
Validation
=====================================*/

if(strlen($nom)<2){

    sendJsonResponse(false,"Nom invalide.");

}

if(!filter_var($email,FILTER_VALIDATE_EMAIL)){

    sendJsonResponse(false,"Email invalide.");

}

if(
    $telephone!="" &&
    !preg_match('/^[0-9+().\s-]{7,20}$/',$telephone)
){

    sendJsonResponse(false,"Téléphone invalide.");

}

if(strlen($message)<10){

    sendJsonResponse(false,"Message trop court.");

}


/*====================================
Base de données
=====================================*/

try{

$connection=getDbConnection();


$stmt=$connection->prepare("
INSERT INTO contacts
(
nom,
email,
telephone,
sujet,
message
)
VALUES
(
?,?,?,?,?
)
");

$stmt->bind_param(
"sssss",
$nom,
$email,
$telephone,
$sujet,
$message
);

$stmt->execute();

$contactId=$stmt->insert_id;

$stmt->close();


/*====================================
Journal d'activité
=====================================*/

$ip=$_SERVER["REMOTE_ADDR"]??"";

$action="Nouveau message de contact";

$details="Message envoyé par ".$nom;

$log=$connection->prepare("
INSERT INTO journal_activites
(
utilisateur,
action,
details,
adresse_ip
)
VALUES
(
?,?,?,?
)
");

$log->bind_param(
"ssss",
$email,
$action,
$details,
$ip
);

$log->execute();

$log->close();


$_SESSION["contact_last_submit"]=time();


/*====================================
Notification Email
=====================================*/

$to="franckleprince15@gmail.com";

$subject="Nouveau message - Les Sauterelles";

$body="

Nom : $nom

Email : $email

Téléphone : $telephone

Sujet : $sujet

Message :

$message

";


@mail(
$to,
$subject,
$body,
"From:noreply@lessauterelles.com\r\nReply-To:$email"
);


sendJsonResponse(

true,

"Votre message a bien été envoyé.",

[
"id"=>$contactId
]

);


}
catch(mysqli_sql_exception $e){
    error_log($e->getMessage());
    sendJsonResponse(false, "Erreur de base de données : " . $e->getMessage());
}
catch(Throwable $e){

error_log($e->getMessage());

sendJsonResponse(

false,

"Une erreur est survenue."

);

}