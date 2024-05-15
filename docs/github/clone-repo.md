---
sidebar_label: 'Clôner un repo Github'
sidebar_position: 2
---

# Clôner un repo Github

## Vérifier les installations

Dans un premier temps, effectuez la commande suivante pour mettre à jour les paquets.

```bash
sudo apt-get update
```

### Git

Pour clôner un repo Github, il est nécessaire d'avoir Git d'installé. Pour vérifier si Git est installé, vous pouvez taper la commande suivante.

```bash
git --version
```

Si Git est installé, vous devriez voir une version s'afficher.
Sinon vous pouvez l'installer avec la commande suivante.

```bash
sudo apt-get install git
```

### Nano

Pour éditer des fichiers, il est nécessaire d'avoir un éditeur de texte. Nano est un éditeur de texte simple et facile à utiliser. Pour vérifier si Nano est installé, vous pouvez taper la commande suivante.

```bash
nano --version
```

Si Nano est installé, vous devriez voir une version s'afficher.
Sinon vous pouvez l'installer avec la commande suivante.

```bash
sudo apt-get install nano
```

## Clôner un repo Github

### Se rendre dans le dossier où vous souhaitez clôner le repo

Généralement, il est préférable de clôner un repo dans le dossier `/var/www/`. Pour se rendre dans ce dossier, vous pouvez taper la commande suivante.

```bash
cd /var/www/
```

### Clôner le repo

Pour clôner un repo Github, vous pouvez utiliser la commande suivante. Vous devez remplacer `YOUR_ACCOUNT` par votre nom de compte Github et `YOUR_REPO_NAME` par le nom de votre repo. 

```bash
git clone git@github.com:YOUR_ACCOUNT/YOUR_REPO_NAME.git
```

Vous devez bien avoir associé vos clés SSH à votre compte Github pour pouvoir clôner un repo de cette manière. Si ce n'est pas le cas, vous pouvez suivre [ce tutoriel](/docs/github/ssh-github) pour ajouter vos clés SSH à votre compte Github.

### Se rendre dans le dossier du repo

Pour se rendre dans le dossier du repo que vous venez de clôner, vous pouvez taper la commande suivante. Vous devez remplacer `YOUR_REPO_NAME` par le nom de votre repo.

```bash
cd YOUR_REPO_NAME
```

Vous êtes maintenant dans le dossier de votre repo Github. Vous pouvez maintenant travailler sur votre projet.