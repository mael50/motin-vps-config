---
sidebar_label: 'Configurer Nginx'
sidebar_position: 2
---

# Configurer Nginx

## Se rendre dans le dossier de configuration de Nginx

Pour configurer Nginx, il est nécessaire de se rendre dans le dossier de configuration de Nginx. Vous pouvez vous y rendre avec la commande suivante.

```bash
cd /etc/nginx/
```

## Créer un fichier de configuration

Pour créer un fichier de configuration, vous pouvez utiliser la commande suivante. Vous devez remplacer `YOUR_CONFIG_NAME` par le nom de votre fichier de configuration.

```bash
sudo touch sites-available/YOUR_CONFIG_NAME
```

Dans le dossier `/etc/nginx/sites-available/`, vous pouvez créer un fichier de configuration pour chaque site web que vous souhaitez héberger. Par exemple, si vous souhaitez héberger un site web nommé `monsite.fr`, vous pouvez créer un fichier de configuration nommé `monsite.fr`.
Il existe déjà un fichier de configuration par défaut nommé `default`. Ce fichier de configuration est utilisé pour héberger le site web par défaut de Nginx.

## Configurer le fichier de configuration

Pour configurer le fichier de configuration, vous pouvez utiliser la commande suivante.

```bash
sudo nano sites-available/YOUR_CONFIG_NAME
```

Vous pouvez configurer le fichier de configuration en fonction de vos besoins. Voici un exemple de configuration pour un site web.

```nginx
server {
    listen 80;
    server_name monsite.fr www.monsite.fr;

    root /var/www/monsite.fr;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Dans cet exemple, le serveur écoute sur le port 80. Le nom du serveur est `monsite.fr` et `www.monsite.fr`. Les fichiers du site web sont situés dans le dossier `/var/www/monsite.fr`. Le fichier index est `index.html`.

## Activer le fichier de configuration

Pour activer le fichier de configuration, vous pouvez utiliser la commande suivante. Vous devez remplacer `YOUR_CONFIG_NAME` par le nom de votre fichier de configuration.

```bash
sudo ln -s /etc/nginx/sites-available/YOUR_CONFIG_NAME /etc/nginx/sites-enabled/
```

## Redémarrer Nginx

Pour appliquer les modifications, vous devez redémarrer Nginx.

D'abord, verifiez que la configuration est correcte. Pour cela, vous pouvez utiliser la commande suivante.
```bash
nginx -t    
```

Vous devriez voir un message similaire à celui-ci.

  `nginx: the configuration file /etc/nginx/nginx.conf syntax is ok`

  `nginx: configuration file /etc/nginx/nginx.conf test is successful`

Si la configuration est correcte, vous pouvez redémarrer Nginx avec la commande suivante.

```bash
sudo systemctl restart nginx
```

## Documentation Nginx

Vous pouvez consulter la documentation officielle de Nginx pour en savoir plus sur la configuration de Nginx.

[Documentation Nginx](https://nginx.org/en/docs/)
