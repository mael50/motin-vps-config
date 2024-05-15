---
sidebar_label: 'Configuration de strapi dans Nginx'
sidebar_position: 2
---

# Configuration de strapi dans Nginx

## Créer un fichier de configuration

Pour configurer Strapi dans Nginx, vous devez créer un fichier de configuration. Vous pouvez créer un fichier de configuration dans le dossier `/etc/nginx/sites-available/`. Vous pouvez utiliser la commande suivante pour créer un fichier de configuration.

```bash
sudo nano /etc/nginx/sites-available/strapi
```

## Configurer le fichier de configuration

Comme Strapi tourne sur le port 1337 (ou un autre si vous l'avez modifié), vous devez créer un proxy pour rediriger les requêtes vers le port 1337. Voici un exemple de configuration que vous pouvez utiliser.

(Veillez à remplacer `strapi.mael-laroque.fr` par votre nom de domaine et à créer un certificat SSL pour votre domaine, le tutoriel pour créer un certificat SSL est disponible [ici](/docs/VPS/ssl/certbot)).

```nginx
server {
    if ($host = strapi.mael-laroque.fr) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    # Listen HTTP
    listen 80;
    listen [::]:80;
    server_name strapi.mael-laroque.fr;

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;


}


server {
    # Listen HTTPS
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name strapi.mael-laroque.fr www.strapi.mael-laroque.fr;

    # SSL config
    ssl_certificate /etc/letsencrypt/live/strapi.mael-laroque.fr/fullchain.pem; # >
    ssl_certificate_key /etc/letsencrypt/live/strapi.mael-laroque.fr/privkey.pem; >
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


    # Proxy Config
    location / {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_pass_request_headers on;
    }
}
```


## Activer le fichier de configuration

Pour activer le fichier de configuration, vous devez créer un lien symbolique dans le dossier `/etc/nginx/sites-enabled/`. Vous pouvez utiliser la commande suivante pour créer un lien symbolique.

```bash
sudo ln -s /etc/nginx/sites-available/strapi /etc/nginx/sites-enabled/
```

## Redémarrer Nginx

Vous devez d'abord vérifier que la configuration de Nginx est correcte. Vous pouvez utiliser la commande suivante pour vérifier la configuration de Nginx.

```bash
nginx -t
```

Pour appliquer les modifications, vous devez redémarrer Nginx. Vous pouvez utiliser la commande suivante pour redémarrer Nginx.

```bash
sudo systemctl restart nginx
```

Si tout est correct, vous devriez pouvoir accéder à Strapi à l'adresse `https://strapi.mael-laroque.fr`.