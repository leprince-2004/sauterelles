# Guide de Sauvegarde & Gestion de la Base de Données

## 📋 Vue d'ensemble

Ce document explique comment sauvegarder et restaurer les données de l'école Les Sauterelles. Les données incluent :
- **Contacts** : Messages envoyés via le formulaire de contact
- **Inscriptions** : Demandes d'inscription en ligne
- **Actualités** : Annonces et news de l'école

---

## 🗂️ Structure du Backup

Les fichiers de sauvegarde se trouvent dans le dossier `backup/` :
```
backup/
├── backup_sauterelles_2026-07-06_14-30-45.sql
├── backup_sauterelles_2026-07-06_13-15-22.sql
├── backup_auto.php
└── backup.php
```

---

## 🔄 Sauvegarde Automatique

### 1. Via le Script PHP (Recommandé)

Pour créer une sauvegarde manuellement en ligne de commande :

```bash
cd c:\xampp\htdocs\sauterelles
php backup/backup_auto.php
```

**Résultat :**
```
✓ Sauvegarde de la base de données créée avec succès.
```

Un fichier `.sql` est créé dans `backup/` avec le timestamp du moment.

### 2. Automatisation Programmée (Tâche Planifiée)

**Sur Windows (avec Task Scheduler):**

1. Ouvrir l'Éditeur de tâches planifiées (`taskschd.msc`)
2. Créer une nouvelle tâche planifiée
3. Configurer le déclencheur :
   - Heure : chaque jour à 2h du matin
   - Fréquence : Quotidienne
4. Configurer l'action :
   - Programme : `C:\xampp\php\php.exe`
   - Argument : `C:\xampp\htdocs\sauterelles\backup\backup_auto.php`
5. Cliquer sur OK

**Sur Linux/Mac (avec Cron):**

Ajouter cette ligne au crontab :
```bash
0 2 * * * php /var/www/sauterelles/backup/backup_auto.php
```

Cette tâche s'exécutera chaque jour à 2h du matin.

---

## 📥 Restauration d'une Sauvegarde

### Depuis phpMyAdmin

1. Ouvrir phpMyAdmin : `http://localhost/phpmyadmin`
2. Sélectionner la base `sauterelles_db`
3. Aller dans l'onglet **Importer**
4. Cliquer sur **Parcourir** et sélectionner le fichier `.sql`
5. Cliquer sur **Exécuter**

### Depuis la Ligne de Commande

```bash
cd c:\xampp\htdocs
mysql -u root sauterelles_db < backup/backup_sauterelles_2026-07-06_14-30-45.sql
```

Remplacer le nom du fichier par celui de la sauvegarde à restaurer.

---

## 🛡️ Bonnes Pratiques de Sécurité

### ✅ À Faire

- ✓ Effectuer des sauvegardes quotidiennes
- ✓ Conserver au moins 30 jours de sauvegardes
- ✓ Tester régulièrement les restaurations
- ✓ Stocker les sauvegardes dans deux endroits différents
- ✓ Mettre à jour la base après chaque modification importante

### ❌ À Éviter

- ✗ Ne jamais partager les fichiers de sauvegarde publiquement
- ✗ Ne pas supprimer les sauvegardes anciennes sans raison
- ✗ Ne pas modifier directement les fichiers `.sql`
- ✗ Ne pas stocker les sauvegardes qu'au même endroit que le site

---

## 📊 Gestion des Tables

### Table : `contacts`

| Colonne | Type | Description |
|---------|------|-------------|
| `id` | INT | Identifiant unique |
| `nom` | VARCHAR(100) | Nom du visiteur |
| `email` | VARCHAR(150) | Email du visiteur |
| `telephone` | VARCHAR(20) | Téléphone (optionnel) |
| `sujet` | VARCHAR(200) | Sujet du message |
| `message` | TEXT | Contenu du message |
| `date_envoi` | DATETIME | Date et heure d'envoi |
| `lu` | TINYINT(1) | 0 = non lu, 1 = lu |

**Exemple de requête** :
```sql
-- Voir les messages non lus
SELECT * FROM contacts WHERE lu = 0 ORDER BY date_envoi DESC;

-- Compter les messages par sujet
SELECT sujet, COUNT(*) as total FROM contacts GROUP BY sujet;
```

### Table : `inscriptions`

| Colonne | Type | Description |
|---------|------|-------------|
| `id` | INT | Identifiant unique |
| `nom_enfant` | VARCHAR(100) | Nom de l'enfant |
| `prenom_enfant` | VARCHAR(100) | Prénom de l'enfant |
| `date_naissance` | DATE | Date de naissance |
| `classe_souhaitee` | VARCHAR(50) | Classe demandée |
| `nom_parent` | VARCHAR(100) | Nom du parent |
| `email_parent` | VARCHAR(150) | Email du parent |
| `telephone_parent` | VARCHAR(20) | Téléphone du parent |
| `adresse_parent` | TEXT | Adresse du parent |
| `date_demande` | DATETIME | Date de la demande |
| `statut` | ENUM | en attente / confirmée / annulée |
| `notes` | TEXT | Notes internes |

**Exemple de requête** :
```sql
-- Voir les inscriptions en attente
SELECT * FROM inscriptions WHERE statut = 'en attente' ORDER BY date_demande DESC;

-- Compter les inscriptions par classe
SELECT classe_souhaitee, COUNT(*) as total FROM inscriptions GROUP BY classe_souhaitee;
```

### Table : `actualites`

| Colonne | Type | Description |
|---------|------|-------------|
| `id` | INT | Identifiant unique |
| `titre` | VARCHAR(200) | Titre de l'actualité |
| `description` | VARCHAR(500) | Description courte |
| `contenu` | TEXT | Contenu complet |
| `image` | VARCHAR(255) | Chemin vers l'image |
| `auteur` | VARCHAR(100) | Auteur de l'actualité |
| `date_publication` | DATETIME | Date de publication |
| `date_modification` | DATETIME | Dernière modification |
| `visible` | TINYINT(1) | 0 = invisible, 1 = visible |
| `ordre_affichage` | INT | Ordre d'affichage (asc) |

**Exemple de requête** :
```sql
-- Voir les actualités visibles, récentes en premier
SELECT * FROM actualites WHERE visible = 1 ORDER BY date_publication DESC;

-- Archiver une actualité
UPDATE actualites SET visible = 0 WHERE id = 5;
```

---

## 🔧 Maintenance Courante

### Vérifier l'Intégrité de la Base

```bash
php -r "require 'php/db_connect.php'; \$c = getDbConnection(); echo \$c->ping() ? 'Base OK' : 'Erreur';"
```

### Initialiser le Schéma

```bash
cd c:\xampp\htdocs\sauterelles
php php/db_schema.php
```

### Nettoyer les Anciens Backups

Les sauvegardes de plus de 30 jours sont automatiquement supprimées.
Pour nettoyer manuellement :

```bash
cd backup
dir backup_sauterelles_*.sql /o:-d | select -First 5
```

---

## 📞 Support & Questions

Pour toute question sur la gestion des données :
- Consulter phpMyAdmin : `http://localhost/phpmyadmin`
- Vérifier les logs : `backup/`
- Contacter l'équipe technique de l'école

---

**Dernière mise à jour :** 06/07/2026
