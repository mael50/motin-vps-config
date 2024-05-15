---
sidebar_label: 'Certbot'
sidebar_position: 2
---

# Certbot

## Installation

Pour installer Certbot, vous pouvez utiliser la commande suivante.

```bash
sudo apt-get install certbot
```

## Générer un certificat SSL

Pour générer un certificat SSL, vous pouvez utiliser la commande suivante. Vous devez
remplacer `YOUR_DOMAIN` par votre nom de domaine.

```bash
sudo certbot --nginx -d YOUR_DOMAIN -d www.YOUR_DOMAIN
```

Ce script va vous demander de renseigner votre adresse email et d'accepter les conditions d'utilisation.
Si tout est bien configuré, il devrait également modifier directement le fichier de configuration de Nginx pour activer le SSL. Sans que vous n'ayez à le faire manuellement.

## Renouveler un certificat SSL

Pour renouveler un certificat SSL, vous pouvez utiliser la commande suivante.

```bash
sudo certbot renew
```

## Vérifier la configuration

Pour vérifier la configuration de Certbot, vous pouvez utiliser la commande suivante.

```bash
sudo certbot certificates
```

Cette commande vous permettra de voir la liste des certificats SSL installés sur votre serveur.