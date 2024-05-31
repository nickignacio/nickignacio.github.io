import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Hi There!
        </Heading>
        <img
          className={styles.portrait}
          src={require('/img/oxfordnick.jpg').default}
          alt="Headshot of Nick Ignacio"
          width="200" height = "200"
          />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.blurb}> I'm a Ph.D. candidate in materials science and engineering and a Cockrell School of Engineering fellow in the Texas Materials Institute at UT Austin. 
        I work with Prof. Deji Akinwande on 2D-materials for neuromorphic computing applications. </p>
        
        <p className={styles.blurb}>
        Right now, I'm a DoE SCGSR fellow hosted by Oak Ridge National Lab working at the Center for Nanophase Materials Sciences with the Scanning Tunnelling Microscopy group.
        Feel free to look around and if anything catches your eye, or you think we could work together, please reach out.</p>

        <p className={styles.blurb}>
        Contact me at igni [at] utxexas [dot] edu</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Homepage of Nick Ignacio">
      <HomepageHeader />
      <main>
      <HomepageFeatures/>
      </main>
    </Layout>
  );
}
