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

    $configPath = dirname(__DIR__, 2) . '/db-config.php';
    $config = is_file($configPath) ? require $configPath : [];
    $config = is_array($config) ? $config : [];

    $host = $config['host'] ?? getenv('DB_HOST') ?: 'localhost';
    $port = (int)($config['port'] ?? getenv('DB_PORT') ?: 3306);
    $username = $config['username'] ?? getenv('DB_USER') ?: 'root';
    $password = $config['password'] ?? getenv('DB_PASS') ?: '';
    $database = $config['database'] ?? getenv('DB_NAME') ?: 'sauterelles_db';

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

        error_log($e->getMessage());
        http_response_code(500);
        header('Content-Type: application/json; charset=utf-8');

        die(json_encode([
            "success" => false,
            "message" => "Impossible de se connecter à la base de données."
        ]));

    }
}