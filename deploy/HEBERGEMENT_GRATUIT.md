# Publication gratuite sur AwardSpace

Le site public est composé de pages HTML, CSS et JavaScript. Le formulaire d'inscription en ligne a été retiré; aucune base de données ni aucun endpoint PHP n'est nécessaire pour les pages publiques. AwardSpace annonce une offre gratuite sans carte bancaire avec des sous-domaines gratuits.

## 1. Créer le compte et le site

1. Créer un compte gratuit depuis [AwardSpace](https://www.awardspace.com/free-web-hosting-registration/). L'inscription est annoncée sans carte bancaire.
2. Dans le panneau, créer ou sélectionner un sous-domaine gratuit proposé par AwardSpace. L'adresse exacte sera affichée dans le panneau.
3. Repérer dans le gestionnaire de fichiers ou les paramètres FTP le répertoire web (`htdocs` ou équivalent) associé au sous-domaine.

## 2. Envoyer le paquet

Depuis la racine du dépôt, exécuter dans PowerShell :

```powershell
.\deploy\build-free-host-package.ps1
```

Le script crée dans `deploy/` un dossier et une archive datés. Envoyer **le contenu** de ce dossier dans le répertoire web du sous-domaine, à l'aide du gestionnaire de fichiers ou des informations FTP affichées par AwardSpace. Le paquet contient les pages HTML publiques et `assets/`; il ne contient pas l'administration, les scripts PHP, les sauvegardes ni les fichiers SQL.

## 3. Vérifier avant de communiquer l'adresse

1. Activer HTTPS dans le panneau si cette option est proposée pour le sous-domaine gratuit.
2. Ouvrir l'adresse du sous-domaine affichée dans le panneau et vérifier les pages, images et navigation.
3. Tester la navigation, le sélecteur de langue et le chatbot sur ordinateur et mobile.

## Limites actuelles

- Le site sera accessible via le sous-domaine gratuit fourni par AwardSpace. Pour apparaître quand on tape uniquement le nom de l'école, il faudra ensuite demander l'indexation aux moteurs de recherche; un domaine personnalisé pourra attendre.
- L'administration n'est pas publiée : plusieurs fichiers nécessaires sont vides et `admin/index.php` affiche encore un mot de passe de démonstration.