<?php
declare(strict_types=1);

/*
|--------------------------------------------------------------------------
| LES SAUTERELLES
| Connexion unique à la base de données
|--------------------------------------------------------------------------
*/

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

function getDbConnection(): mysqli
{
    static $connection = null;

    if ($connection instanceof mysqli) {
        return $connection;
    }

    // Configuration de la base de données
    $host = getenv('DB_HOST') ?: 'localhost';
    $port = (int)(getenv('DB_PORT') ?: 3306);
    $username = getenv('DB_USER') ?: 'root';
    $password = getenv('DB_PASS') ?: '';
    $database = getenv('DB_NAME') ?: 'sauterelles_db';

    try {

        $connection = new mysqli(
            $host,
            $username,
            $password,
            $database,
            $port
        );

        $connection->set_charset("utf8mb4");

        return $connection;

    } catch (mysqli_sql_exception $e) {

        http_response_code(500);

        die(json_encode([
            "success" => false,
            "message" => "Impossible de se connecter à la base de données.",
            "error" => $e->getMessage()
        ]));

    }
}