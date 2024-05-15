---
sidebar_label: 'Installation de PM2'
sidebar_position: 1
---

# Installation de PM2

## Introduction

PM2 est un gestionnaire de processus pour Node.js. Il permet de gérer les applications Node.js en production. PM2 permet de lancer des applications, de les redémarrer automatiquement en cas de crash et de les monitorer.

## Installation

### Installer Node.js

Pour installer PM2, il est nécessaire d'avoir Node.js d'installé. Pour vérifier si Node.js est installé, vous pouvez taper la commande suivante.

```bash
node --version
```

Si Node.js est installé, vous devriez voir une version s'afficher.
Sinon vous pouvez l'installer avec la commande suivante. (Remplacer XX par la version souhaitée)

```bash 
curl -s https://deb.nodesource.com/setup_18.x | sudo bash
sudo apt-get install -y nodejs
```

### Installer PM2

Pour installer PM2, vous pouvez taper la commande suivante.

```bash
sudo npm install pm2 -g
```

### Vérifier l'installation

Pour vérifier si PM2 est installé, vous pouvez taper la commande suivante.

```bash
pm2 --version
```