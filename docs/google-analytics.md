---
sidebar_label: 'Google Analytics'
sidebar_position: 2
---

# Google Analytics

Pour utiliser Google Analytics, vous devez créer un compte Google Analytics. Pour cela, vous pouvez suivre les étapes suivantes.

## Obtenir son identifiant de suivi

1. Se rendre sur [Google Analytics](https://analytics.google.com/).

2. Dans le coin inférieur gauche, se rendre sur la roue crantée.
   
3. Cliquer sur "Créer" puis choisissez "Propriété".

    ![Google Analytics](/img/ga1.png)

4. Configurer le flux de données en ajoutant l'URL de votre site web.

    ![Google Analytics](/img/ga2.png)


Une fois ces étapes réalisées, vous obtiendrez un identifiant de suivi. Cet identifiant est de la forme `G-XXXXXXXXXX`.

    ![Google Analytics](/img/ga3.png)

## Intégrer Google Analytics

Pour intégrer Google Analytics à votre site web, vous devez ajouter le code suivant dans le fichier `index.html` de votre site web.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6LD3GY1H6D"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6LD3GY1H6D');
</script>
```

Dans le cas d'une application React comme c'est le cas pour le site de motin, c'est un peu plus complexe.
Il faut d'abord télécharger la librairie `react-ga4` avec la commande suivante.

```bash
npm install react-ga4
```

Ensuite dans le fichier `App.js`, ajouter le code suivant.

```javascript
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-6LD3GY1H6D');
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return (
    <div>
      <h1>Mon site web</h1>
    </div>
  );
}

export default App;
```

*`G-6LD3GY1H6D` est l'identifiant de suivi de Google Analytics. Ceci est un exemple pour une page React. Vous devez l'adapter à votre propre identifiant de suivi, mais aussi à votre propre site web.*


## Vérifier le bon fonctionnement

Pour vérifier que Google Analytics fonctionne correctement, vous pouvez vous rendre sur votre site web et naviguer sur plusieurs pages. Ensuite, vous pouvez vous rendre sur Google Analytics et vérifier que les données sont bien remontées.

    ![Google Analytics](/img/ga4.png)

:::note
Les données peuvent mettre plusieurs heures à remonter dans Google Analytics. Dans le pire des cas, cela peut prendre jusqu'à 48 heures.
Si après 48 heures, vous ne voyez toujours pas de données remonter, vérifiez que le code est bien intégré à votre site web.
:::