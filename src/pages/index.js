import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import XYZ from '@site/docs/monorepo/monorepo.png';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> monorepo </h1>
        <p className="hero__subtitle"> monorepos so great </p>
        <img src={XYZ} width="600px" />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section>
          <div className="container">
            <br></br>
            <h1>Get more done, faster, with fewer people.</h1>
            <h2>How do you monorepo?</h2>
            <h3>1. Collocated code</h3>
            <ul>
              <li>All of the projects in the monorepo are located in the same repo.</li>
              <li>Projects are organized in a predictable and discoverable way.</li>
              <li>You can update multiple projects with a single pull request.</li>
            </ul>
            <h3>2. Standardized tooling</h3>
            <ul>
              <li>Each project uses the same tool to solve the same problem.</li>
              <li>???</li>
              <li>???</li>
            </ul>
            <h3>3. Trunk-based development</h3>
            <ul>
              <li>Developers work from the main branch</li>
              <li>All pull requests merge to the main branch</li>
              <li>Merge incremental, shippable, and reviewable units of work</li>
            </ul>
            <hr></hr>
            <h2>What do you get from monorepo?</h2>
            <ul>
              <li>All of the power of code reuse, with none of the overhead</li>
              <li>Incredibly efficient dependency updates</li>
              <li>Reorganize projects and make breaking changes quickly</li>
              <li>Probably more?</li>
            </ul>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
