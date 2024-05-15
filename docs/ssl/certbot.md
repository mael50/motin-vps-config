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

## Automatiser le renouvellement

Pour automatiser le renouvellement des certificats SSL, vous pouvez ajouter une tâche cron. Pour cela, vous pouvez utiliser la commande suivante.

```bash
sudo touch /etc/cron.d/certbot
```

Ensuite, vous pouvez éditer le fichier avec la commande suivante.

```bash
nano /etc/cron.d/certbot
```

Vous pouvez ajouter la ligne suivante dans le fichier.

```bash
0 */12 * * * root certbot -q renew
```

Cette ligne permet de renouveler les certificats SSL tous les 12 heures. Vous pouvez modifier la fréquence en fonction de vos besoins.
