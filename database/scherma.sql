-- =====================================================
-- LES SAUTERELLES
-- Base de données officielle
-- Version : 1.0
-- Auteur : Projet Les Sauterelles
-- =====================================================

DROP DATABASE IF EXISTS sauterelles_db;
CREATE DATABASE sauterelles_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE sauterelles_db;

-- =====================================================
-- TABLE : administrateurs
-- =====================================================

CREATE TABLE administrateurs (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nom VARCHAR(100) NOT NULL,

    prenom VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL UNIQUE,

    mot_de_passe VARCHAR(255) NOT NULL,

    role ENUM('super_admin','admin') DEFAULT 'admin',

    derniere_connexion DATETIME NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP

) ENGINE=InnoDB;



-- =====================================================
-- TABLE : contacts
-- =====================================================

CREATE TABLE contacts (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nom VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL,

    telephone VARCHAR(30),

    sujet VARCHAR(150) NOT NULL,

    message TEXT NOT NULL,

    lu BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_email(email),

    INDEX idx_lu(lu)

) ENGINE=InnoDB;



-- =====================================================
-- TABLE : inscriptions
-- =====================================================

CREATE TABLE inscriptions (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nom_enfant VARCHAR(100) NOT NULL,

    prenom_enfant VARCHAR(100) NOT NULL,

    date_naissance DATE NOT NULL,

    sexe ENUM('Masculin','Feminin') NOT NULL,

    classe_souhaitee VARCHAR(100) NOT NULL,

    nom_parent VARCHAR(150) NOT NULL,

    telephone_parent VARCHAR(30) NOT NULL,

    email_parent VARCHAR(150) NOT NULL,
    CONSTRAINT uq_email_parent UNIQUE (email_parent),

    adresse TEXT NOT NULL,

    statut ENUM(
        'en_attente',
        'acceptee',
        'refusee'
    ) DEFAULT 'en_attente',

    commentaire_admin TEXT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_email(email_parent),

    INDEX idx_statut(statut),

    INDEX idx_classe(classe_souhaitee)

) ENGINE=InnoDB;



-- =====================================================
-- TABLE : actualites
-- =====================================================

CREATE TABLE actualites (

    id INT AUTO_INCREMENT PRIMARY KEY,

    titre VARCHAR(255) NOT NULL,

    resume TEXT,

    contenu LONGTEXT NOT NULL,

    image VARCHAR(255),

    publie BOOLEAN DEFAULT TRUE,

    date_publication DATETIME DEFAULT CURRENT_TIMESTAMP,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_publication(date_publication),

    INDEX idx_publie(publie)

) ENGINE=InnoDB;



-- =====================================================
-- TABLE : journal_activites
-- =====================================================

CREATE TABLE journal_activites (

    id INT AUTO_INCREMENT PRIMARY KEY,

    utilisateur VARCHAR(150),

    action VARCHAR(255) NOT NULL,

    details TEXT,

    adresse_ip VARCHAR(50),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_action(action)

) ENGINE=InnoDB;



-- =====================================================
-- ADMINISTRATEUR PAR DEFAUT
-- =====================================================
--
-- IMPORTANT :
-- Le mot de passe sera ajouté plus tard
-- avec password_hash() depuis PHP.
--
-- Email conseillé :
-- admin@lessauterelles.cm
--