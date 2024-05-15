---
sidebar_label: 'Utilisation du routeur de mail Brevo'
sidebar_position: 2
---

# Utilisation du routeur de mail Brevo

## Présentation

Le routeur de mail Brevo (ex. Sendinblue) permet d'envoyer des mails transactionnels, des newsletters et des campagnes marketing. Un des gros avantage de Brevo est la possibilité de suivre les mails envoyés et de voir les statistiques. 
À noter également la possibilité d'utiliser des templates pour les mails, facilitant ainsi la création de mails.

## API Brevo

Lorsque vous créez un compte sur Brevo, vous avez accès à une API qui vous permet d'envoyer des mails depuis votre application. Pour utiliser l'API Brevo, vous devez obtenir une clé API. Cette clé API vous permet d'authentifier votre application et d'envoyer des mails.
Pour obtenir la clé API, il vous suffit de vous rendre dans votre compte Brevo et de générer une clé API.

    ![Clé API Brevo](/img/brevo-api.png)

:::info[Multiclé API]
Il est possible de générer plusieurs clés API pour différentes applications. Vous pouvez également révoquer une clé API si vous ne souhaitez plus l'utiliser.
:::


## Utilisation de l'API Brevo

Pour utiliser l'API Brevo, plusieurs choix sont possibles. Vous pouvez utiliser la librairie Brevo pour Node.js disponible sur [npm](https://www.npmjs.com/package/@getbrevo/brevo).

Une autre possibilité est d'utiliser Axios pour envoyer des requêtes HTTP à l'API Brevo. Voici un exemple de code pour envoyer un mail avec Axios.

```javascript
const axios = require('axios');

const sendMail = async () => {
  try {
    const response = await axios.post('https://api.brevo.com/v3/mail/send', {
        apiKey: 'YOUR_API',
        to: 'exemple@domain.com',
        subject: 'Sujet du mail',
        html: '<p>Contenu du mail</p>'
    });
    console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

sendMail();
```

La documentation de l'API Brevo est disponible sur [le site de Brevo](https://developers.brevo.com/reference/sendtransacemail).

## Utilisation des templates

Dans Brevo, vous avez la possibilité d'utiliser des templates pour vos mails. Les templates permettent de créer des mails avec un design prédéfini. Vous pouvez ainsi créer des templates pour différents types de mails (chatbot, formulaire de contact, etc.).

Pour créer un template, vous pouvez vous rendre dans votre compte Brevo et cliquer sur "Templates". Vous pouvez ensuite créer un nouveau template en ajoutant un nom et un design.

    ![Template Brevo](/img/brevo-template1.png)

Pour le corps du template, vous pouvez ajouter des variables. Les variables permettent de personnaliser le contenu du mail. 
Pour accéder aux variables passées dans la requête, vous pouvez utiliser la syntaxe `{{ params.variable }}`.
Par exemple, vous pouvez ajouter une variable `{{ params.name }}` pour afficher le nom du destinataire, à condition que le nom soit passé en paramètre.

    ![Variables Brevo](/img/brevo-template2.png)

Pour utiliser un template, vous pouvez ajouter le paramètre `templateId` dans la requête. Vous devez remplacer `YOUR_TEMPLATE` par l'ID du template.

```javascript
const axios = require('axios');

const sendMail = async () => {
  try {
    const response = await axios.post('https://api.brevo.com/v3/mail/send', {
        apiKey: 'YOUR_API',
        to: 'exemple@domain.fr',
        subject: 'Sujet du mail',
        templateId: 'YOUR_TEMPLATE',
        params: {
            name: 'John Doe'
        }
    });
    console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

sendMail();
```

## Statistiques

Brevo vous permet de suivre les mails envoyés et de voir les statistiques. Vous pouvez voir le nombre de mails envoyés, le nombre de mails ouverts, le nombre de clics, etc.

Pour voir les statistiques, vous pouvez vous rendre dans votre compte Brevo et cliquer sur "Statistiques". Vous pouvez ensuite voir les statistiques pour chaque campagne.

    ![Statistiques Brevo](/img/brevo-stats.png)


:::info[Définition]

Les différents types d'événements que vous pouvez suivre sont les suivants :

- `delivered` : le mail a été délivré
- `opened` : le mail a été ouvert
- `clicked` : le mail a été cliqué
- `bounced` : le mail a rebondi (hard ou soft). Rebondi signifie que le mail n'a pas pu être délivré (hard : adresse invalide, soft : boîte pleine)
- `spam` : le mail a été marqué comme spam
- `unsubscribed` : le destinataire s'est désabonné
- `complaint` : le destinataire a signalé le mail comme spam
- `blocked` : le mail a été bloqué
:::

## Logs

Brevo vous permet de voir les logs des mails envoyés. Vous pouvez voir les logs pour chaque mail envoyé et voir les détails de l'envoi.