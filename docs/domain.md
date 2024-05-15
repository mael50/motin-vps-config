---
sidebar_label: 'Lier un domaine au VPS'
sidebar_position: 2
---

# Lier un domaine au VPS

## Configurer le DNS

Pour ajouter un domaine, il est nécessaire de configurer le DNS. Vous pouvez configurer le DNS de votre domaine en ajoutant un enregistrement A ou CNAME.

### Enregistrement A

Un enregistrement A permet de lier un nom de domaine à une adresse IP. Pour ajouter un enregistrement A, vous devez vous rendre dans les paramètres de votre domaine et ajouter un enregistrement A avec l'adresse IP de votre serveur.

Votre VPS possède une adresse IP publique. Vous pouvez la trouver dans votre espace client.

    ![Adresse IP VPS](/img/hostinger1.png)
    *Sur hostinger, vous pouvez trouver l'adresse IP de votre VPS dans votre espace client.*


Une fois l'IP trouvée, vous pouvez ajouter un enregistrement A avec le nom de domaine de votre choix.

    ![Enregistrement A](/img/ionos1.png)
    *Voici comment ajouter un enregistrement A sur Ionos.*


:::danger[Attention]

Il est possible que la propagation DNS prenne du temps. Il est possible que votre domaine ne soit pas accessible immédiatement après la configuration.

De plus, il faut également créer un enregistrement A pour le sous-domaine `www`.

:::

Une fois l'enregistrement A ajouté, vous pouvez vérifier si le domaine pointe bien vers votre serveur avec la commande suivante.

```bash
ping votredomaine.fr
```

:::info[Info]

Si le domaine pointe bien vers votre serveur, vous devriez voir l'adresse IP de votre serveur s'afficher.

:::