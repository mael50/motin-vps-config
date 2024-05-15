---
sidebar-label: 'Utilisation de Strapi'
sidebar_position: 2
---

# Utilisation de Strapi

## Présentation

Strapi est un headless CMS open-source qui permet de créer des API REST. Strapi est basé sur Node.js et est très facile à utiliser. Il est possible de créer des collections de données, des relations entre les collections, des rôles et des permissions.

## Premier lancement de Strapi

Lorsque vous lancez pour la première fois Strapi, vous devez créer un compte administrateur. Pour cela, il vous suffit de vous rendre sur `http://localhost:1337/admin` et de cliquer sur "Register". Vous devez ensuite renseigner un email, un mot de passe et un nom d'utilisateur.

    ![Création d'un compte administrateur](/img/strapi-register.png)

Une fois le compte créé, vous pouvez vous connecter à l'interface d'administration de Strapi.

    ![Interface d'administration Strapi](/img/strapi-admin.png)

## Gestion des environnements

Strapi permet de gérer plusieurs environnements (développement, production, etc.). Vous pouvez définir des variables d'environnement pour chaque environnement. Pour cela, vous devez créer un fichier `.env` à la racine de votre projet Strapi.

Voici un exemple de fichier `.env` :

```
NODE_ENV=development
DATABASE_CLIENT=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=strapi
DATABASE_USERNAME=root
DATABASE_PASSWORD=password
```

Vous pouvez ensuite accéder aux variables d'environnement dans votre code Strapi en utilisant `process.env`.

À noter que en environnement de production, il n'est pas possible de créer/modifier les collections de données. Il est donc recommandé de créer les collections de données en environnement de développement et de les exporter/importer en environnement de production.

## Création d'une collection

Pour créer une collection de données, vous devez vous rendre dans l'interface d'administration de Strapi et cliquer sur "Content-Types Builder". Vous pouvez ensuite cliquer sur "Create new collection type" pour créer une nouvelle collection.

Les collections de données sont les "tables" de la base de données. Vous pouvez ajouter des champs à une collection, définir des relations entre les collections et définir des rôles et des permissions.

    ![Création d'une collection de données](/img/strapi-collection.png)

## Création de contenu

Une fois que vous avez créé une collection de données, vous pouvez ajouter du contenu à cette collection. Pour cela, vous devez vous rendre dans l'interface d'administration de Strapi et cliquer sur "Content Manager". Vous pouvez ensuite cliquer sur la collection de données pour ajouter du contenu.

    ![Ajout de contenu](/img/strapi-content.png)
