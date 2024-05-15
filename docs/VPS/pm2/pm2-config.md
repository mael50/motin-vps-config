---
sidebar_label: 'Ajouter une application Node à PM2'
sidebar_position: 2
---

# Ajouter une application Node à PM2

## Introduction

PM2 est un gestionnaire de processus pour Node.js. Il permet de gérer les applications Node.js en production. PM2 permet de lancer des applications, de les redémarrer automatiquement en cas de crash et de les monitorer.

## Création du fichier de configuration

Pour ajouter une application Node à PM2, il est nécessaire de créer un fichier de configuration. Ce fichier permet de définir les paramètres de l'application.

### Créer le fichier de configuration

Pour créer le fichier de configuration, vous pouvez utiliser la commande suivante. Vous devez remplacer `YOUR_APP_NAME` par le nom de votre application et `YOUR_APP_PATH` par le chemin de votre application.

```bash
pm2 init --output YOUR_APP_PATH/logs/out.log --error YOUR_APP_PATH/logs/error.log --watch
```

### Modifier le fichier de configuration

Le fichier de configuration est un fichier JSON. Vous pouvez le modifier avec un éditeur de texte. Pour ouvrir le fichier de configuration avec l'éditeur de texte Nano, vous pouvez utiliser la commande suivante.

```bash
nano ecosystem.config.js
```

Vous pouvez modifier les paramètres de l'application dans le fichier de configuration. Voici un exemple de fichier de configuration.

```js
module.exports = {
  apps : [{
    name: "my-react-app",
    script: "npm",
    args: "start",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
```

## Ajouter l'application à PM2

Pour ajouter l'application à PM2, vous pouvez utiliser la commande suivante en étant dans le dossier de l'application (celui où se trouve le fichier `ecosystem.config.js`).

```bash
pm2 start ecosystem.config.js
```

## Vérifier l'ajout de l'application

Pour vérifier si l'application a bien été ajoutée à PM2, vous pouvez taper la commande suivante.

```bash
pm2 list
```

Vous devriez voir votre application dans la liste des applications.

    ![pm2-list](/img/pm2-list.png)

Ici, on voit trois applications ajoutées à PM2. 
La première est un serveur Node.js utilisé pour l'envoi des mails.
La deuxième est le backoffice du site Motin réalisé en Strapi.
La troisième est le serve de l'application Motin réalisée en React.

## Vérifier le statut de l'application

Pour vérifier le statut de l'application, vous pouvez le vérifier.
Le statut peut être `online`, `stopped`, `errored`

Une application qui redémarre en boucle est incorrectement configurée.

## Redémarrer l'application

Pour redémarrer l'application, vous pouvez utiliser la commande suivante.

```bash
pm2 restart YOUR_APP_NAME
```

## Arrêter l'application

Pour arrêter l'application, vous pouvez utiliser la commande suivante.

```bash
pm2 stop YOUR_APP_NAME
```

## Supprimer l'application

Pour supprimer l'application, vous pouvez utiliser la commande suivante.

```bash
pm2 delete YOUR_APP_NAME
```

## Voir les logs de l'application

Pour voir les logs de l'application, vous pouvez utiliser la commande suivante.

```bash
pm2 logs YOUR_APP_NAME
```

## Voir les informations de l'application

Pour voir les informations de l'application, vous pouvez utiliser la commande suivante.

```bash
pm2 show YOUR_APP_NAME
```

## Modifier l'environnement d'une application

Pour modifier l'environnement d'une application, vous pouvez utiliser la commande suivante.

```bash
pm2 env set YOUR_APP_NAME NODE_ENV production
```

Cette commande permet de modifier l'environnement de l'application en production. Vous pouvez remplacer `production` par `development` pour passer l'application en environnement de développement.

Parfois, il est nécessaire de redémarrer l'application pour que les modifications soient prises en compte. Où même de rebuild l'application.