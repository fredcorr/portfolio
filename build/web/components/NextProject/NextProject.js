import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import styles from './NextProject.module.css';
import Link from 'next/link';
import React from 'react';


const nextProject = ({ prev, next }) => (
  <section className={ styles.NextProject}>
    <div className={ styles.featureImage }>
      <ProgressiveImage image={ next.cover }  />
    </div>
    <Link href='/case-studies/[case-study]' as={'/case-studies/' + prev.slug }>
      <a className={ styles.projectTitle }>
        <p>{ prev.date }</p>
        <h3>{ prev.title }</h3>
      </a>
    </Link>
    <Link href='/case-studies/[case-study]' as={'/case-studies/' + next.slug }>
      <a className={ styles.projectTitle }>
        <p>{ next.date }</p>
        <h3>{ next.title }</h3>
      </a>
    </Link>
  </section>
);

export default nextProject;
