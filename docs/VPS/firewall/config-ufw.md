---
sidebar_label: 'Gestion du pare-feu UFW'
sidebar_position: 2
---

# Gestion du pare-feu UFW

## Vérifier les installations

Dans un premier temps, effectuez la commande suivante pour mettre à jour les paquets.

```bash
sudo apt-get update
```

### UFW

Pour gérer le pare-feu UFW, il est nécessaire d'avoir UFW d'installé. Pour vérifier si UFW est installé, vous pouvez taper la commande suivante.

```bash
sudo ufw status
```

Si UFW est installé, vous devriez voir un message s'afficher.
Sinon vous pouvez l'installer avec la commande suivante.

```bash
sudo apt-get install ufw
```

## Configuration du pare-feu UFW

### Autoriser le trafic SSH

Pour autoriser le trafic SSH, vous pouvez utiliser la commande suivante.

```bash
sudo ufw allow ssh
```

### Autoriser le trafic HTTP

Pour autoriser le trafic HTTP, vous pouvez utiliser la commande suivante.

```bash
sudo ufw allow http
```

### Autoriser le trafic HTTPS

Pour autoriser le trafic HTTPS, vous pouvez utiliser la commande suivante.

```bash
sudo ufw allow https
```

### Activer le pare-feu UFW

Pour activer le pare-feu UFW, vous pouvez utiliser la commande suivante.

```bash
sudo ufw enable
```

### Vérifier la configuration du pare-feu UFW

Pour vérifier la configuration du pare-feu UFW, vous pouvez utiliser la commande suivante.

```bash
sudo ufw status
```

Vous devriez voir la configuration du pare-feu UFW s'afficher.

  ![UFW](/img/ufw1.png)
