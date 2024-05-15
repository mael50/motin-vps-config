import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation VPS',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Vous retrouverez dans la documentation VPS de Motin SAS, toutes les informations nécessaires pour la gestion du serveur VPS.
        Cette documentation est basée sur l'installation actuelle du site (ReactJS + Strapi). Elle est réalisée en mai 2024 et est susceptible d'évoluer, ou de devenir obsolète.
      </>
    ),
  },
  {
    title: 'Outils utilisés',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Cette documentation comporte également les différents outils utilisés pour le développement et le déploiement du site web motin.fr.
        Vous y retrouverez des guides d'installation et de configuration pour tous les outils mis en place.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="features row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
