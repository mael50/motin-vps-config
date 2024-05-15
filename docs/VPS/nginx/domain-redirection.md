---
sidebar-label: 'Redirection de domaine'
sidebar_position: 2
---

# Redirection de domaine

## Introduction

La redirection de domaine permet de rediriger un domaine vers un autre. Par exemple, vous pouvez rediriger `domaine1.fr` vers `domaine2.fr`.

## Configurer la redirection

### Se connecter au serveur

Pour configurer la redirection de domaine, vous devez vous connecter à votre serveur.

```bash
ssh root@adresse_ip
```

### Se rendre dans le dossier des sites disponibles

Pour configurer la redirection de domaine, vous devez vous rendre dans le dossier des sites disponibles.

```bash
cd /etc/nginx/sites-available/
```

### Créer un fichier de redirection

Pour créer un fichier de redirection, vous pouvez utiliser la commande suivante.

```bash
nano redirection
```

### Configurer la redirection

Vous pouvez configurer la redirection de domaine en ajoutant le code suivant.

```nginx
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name normagri.fr www.normagri.fr;

    return 301 https://www.motin.fr$request_uri;
}

server {
    listen 80;
    listen [::]:80;
    server_name normagri.fr www.normagri.fr;

    return 301 https://www.motin.fr$request_uri;
}
```

### Activer le fichier de redirection

Pour activer le fichier de redirection, vous pouvez utiliser la commande suivante.

```bash
ln -s /etc/nginx/sites-available/redirection /etc/nginx/sites-enabled/
```

### Redémarrer Nginx

Pour appliquer les modifications, vous devez redémarrer Nginx.

```bash
systemctl restart nginx
```