import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '2D Materials for Neuromorphic Computing',
    Svg: require('@site/static/img/research_interest_device.svg').default,
  },
  {
    title: 'In Situ STM',
    Svg: require('@site/static/img/research_interest_stm.svg').default,
  },
  {
    title: 'Materials Pedagogy',
    Svg: require('@site/static/img/research_interest_tetra.svg').default,
  },
];

function Feature({Svg, title}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featuresSvg} role="img" />
        <div className={styles.features}>
        <Heading as="h3">{title}</Heading>
      </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={"container"}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
