---
sidebar_label: 'Clés SSH Github/VPS'
sidebar_position: 1
---

# Générer une clé SSH

## Sur votre VPS

### Être super utilisateur

Pour générer une clé SSH, il est nécessaire d'être super utilisateur.
La commande suivante permet de passer en super utilisateur.

```bash
sudo su
```

### Générer une clé SSH

Vous pouvez générer une clé SSH avec la commande suivante. Vous devez remplacer le mail par le votre.

```bash
ssh-keygen -t rsa -b 4096 -C "exemple@domain.fr"
```

### Ajouter la clé SSH à l'agent SSH

La commande suivante permet d'ajouter la clé SSH à l'agent SSH.

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

### Copier la clé SSH publique

La commande suivante permet de copier la clé SSH publique.

```bash
cat ~/.ssh/id_rsa.pub
```
La clé doit ressembler à `ssh-rsa AAQD...`.

## Sur Github

### Ajouter la clé SSH publique

1. Se rendre sur [Github](https://github.com).  
   
2. Se connecter à son compte.  
   
3. Se rendre dans les paramètres.
   
4. Se rendre dans les clés SSH.  
    <img src="/img/github1.png" width="500" />

5. Cliquer sur "Nouvelle clé SSH". 
   
6.  Coller la clé SSH publique dans le champ "Clé".
   
7.  Cliquer sur "Ajouter une clé SSH".
     <img src="/img/github2.png" width="500" />
   
8.  Confirmer le mot de passe.

9.  La clé SSH est ajoutée.