<?php
// =============================================
// SCRIPT DE SAUVEGARDE AUTOMATIQUE - LES SAUTERELLES
// =============================================

$host     = 'localhost';
$user     = 'root';
$password = '';
$database = 'sauterelles_db';

$date     = date('Y-m-d_H-i-s');
$filename = "backup_sauterelles_$date.sql";
$filepath = __DIR__ . '/' . $filename;

// Commande mysqldump de XAMPP
$command = "\"C:\\xampp\\mysql\\bin\\mysqldump.exe\" "
         . "--host=$host "
         . "--user=$user "
         . "--password=$password "
         . "$database > \"$filepath\"";

system($command, $output);

if (file_exists($filepath)) {
    echo "✅ Sauvegarde réussie : $filename";
    // Téléchargement automatique
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Content-Length: ' . filesize($filepath));
    readfile($filepath);
    exit;
} else {
    echo "❌ Erreur lors de la sauvegarde.";
}
?>