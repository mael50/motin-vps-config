---
sidebar_label: 'Installation de Strapi'
sidebar_position: 1
---

# Installation de Strapi

## Prérequis

### Node.js

Strapi nécessite Node.js pour fonctionner. Vous pouvez installer Node.js en suivant les instructions disponibles [ici](/docs/pm2/pm2-install#installer-nodejs).

### Base de données

Strapi nécessite une base de données pour fonctionner. Dans cet exemple, nous allons utiliser PostgreSQL. Vous pouvez installer PostgreSQL en suivant les instructions suivantes.

#### Installation de PostgreSQL

1. Mettre à jour les paquets.

```bash
sudo apt-get update
```

2. Installer PostgreSQL.

```bash
sudo apt-get install postgresql postgresql-contrib
```

3. Vérifier l'installation de PostgreSQL.

```bash
psql --version
```

### Npm

Strapi nécessite npm pour fonctionner. 

```bash
npm --version
```

## Installation de Strapi

Plusieurs solutions s'offrent à vous pour installer Strapi. Vous pouvez récupérer un projet existant depuis votre repository Github ou bien créer un nouveau projet.

### Créer un nouveau projet

Pour créer un nouveau projet Strapi, vous pouvez utiliser la commande suivante.

```bash
npx create-strapi-app my-project --quickstart
```

### Récupérer un projet existant

Pour récupérer un projet existant, vous pouvez le cloner depuis votre repository Github.
Vous pouvez retrouver la procédure pour cloner un repository Github [ici](/docs/github/clone-repo).


## Démarrer Strapi

Pour démarrer Strapi, vous pouvez utiliser la commande suivante.

```bash
cd my-project
npm run develop
```

Strapi est maintenant accessible à l'adresse `http://localhost:1337/admin`.


## Lier Strapi à PostgreSQL

Pour lier Strapi à PostgreSQL, vous pouvez suivre les étapes suivantes.

1. Vérifier que PostgreSQL est bien en cours d'exécution.

```bash
sudo systemctl start postgresql.service
```

2. Créer un utilisateur PostgreSQL.

```bash
sudo -u postgres createuser --interactive
```

L'interface vous demandera le nom de l'utilisateur. Vous pouvez entrer `strapi` par exemple. 
Vous devez également répondre `y` à la question `Shall the new role be a superuser?`.

3. Créer une base de données PostgreSQL.

Il faut créer la base de donnée en gardant le même nom que l'utilisateur. Cela donnerai par exemple :

```bash
sudo -u postgres createdb strapi
```

1. Ajouter un mot de passe.

```bash
sudo -u strapi psql
```

```sql
\password
```

Il vous sera demandé de saisir un mot de passe. Vous pouvez entrer `password` par exemple.

Vous pouvez quitter l'interface de PostgreSQL avec la commande suivante.  
```sql
\q
```


4. Configurer Strapi

Si vous n'avez pas choisi PostgreSQL lors de la création du projet, vous pouvez le configurer en suivant les étapes suivantes.

```bash
npm install pg --save
```

Ensuite, il faut remplacer le contenu du fichier `./config/database.js` par le contenu suivant.

```js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres', 
  connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', ''),
        user: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', ''),
        ssl: {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
       },
      },
      debug: false,
  },
});
```

Il faut penser à renseigner les informations de connexion à la base de données. Vous pouvez le faire en créant un fichier `.env` à la racine du projet et en y ajoutant les lignes suivantes.

```bash
DATABASE_HOST="nom_du_host"
DATABASE_PORT="port"
DATABASE_NAME="nom_de_la_base_de_donnees"
DATABASE_USERNAME="nom_utilisateur"
DATABASE_PASSWORD="mot_de_passe"
DATABASE_SSL_SELF=false
```

Il y a d'autres lignes dans le fichier .env qui sont nécessaires pour le bon fonctionnement de Strapi. Vous pouvez les retrouver [ici](https://docs.strapi.io/dev-docs/configurations/environment/#strapis-environment-variables).
Elles servent pour d'autres configurations de Strapi.

Vous pouvez maintenant redémarrer Strapi.

```bash
npm run develop
```

## Ajout du port 1337 à UFW

Pour autoriser l'accès à Strapi depuis l'extérieur, il faut ajouter le port 1337 à UFW.
Le tutoriel pour ajouter un port à UFW est disponible [ici](/docs/firewall/config-ufw).

```bash
sudo ufw allow 1337
```

Le port de base de Strapi est le port 1337. Vous pouvez le modifier en modifiant le fichier `./config/server.js`.


## Lancement avec PM2

Pour lancer Strapi avec PM2, vous devez d'abord vérifier que ce dernier est bien installé. Vous pouvez retrouver la procédure d'installation de PM2 [ici](/docs/pm2/pm2-install).

Il va dans un premier temps falloir initialiser PM2.

```bash
pm2 init 
```

Cela va créer un fichier `ecosystem.config.js` qui va permettre de configurer l'application.
Remplacez le contenu de ce dernier par le contenu suivant.

```js
module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: 'lien-vers-votre-projet-strapi/',  
      script: 'npm', 
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: 'localhost', // database endpoint
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'your-db-name', // DB name
        DATABASE_USERNAME: 'your-username', // DB username
        DATABASE_PASSWORD: 'your-password', // DB password
      },
    },
  ],
};
```

Remplacez les valeurs `your-db-name`, `your-username` et `your-password` par les informations de votre base de données rentrées précédemment.


Si la configuration est correcte, vous pouvez lancer Strapi avec PM2.

```bash
pm2 start ecosystem.config.js
```

Vous pouvez vérifier que Strapi est bien en cours d'exécution avec la commande suivante.

```bash
pm2 list
```

Vous pouvez maintenant accéder à Strapi à l'adresse `http://your-ip:1337/admin`.

  ![strapi-admin](/img/strapi1.png)






