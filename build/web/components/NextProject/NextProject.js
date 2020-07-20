import styles from './NextProject.module.css';
// import { TweenMax } from 'gsap';
import Link from 'next/link';
import React from 'react';


const nextProject = (props) => (
  <section className={ styles.NextProject}>
    <div className={ styles.featureImage }>
      <img src={ props.img } />
    </div>
    <Link href='/case-studies/[case-study]' as='/case-studies/:bpl'>
      <a className={ styles.projectTitle }>
        <p>2019</p>
        <h3>Doner London</h3>
      </a>
    </Link>
    <Link href='/case-studies/[case-study]' as='/case-studies/:bpl'>
      <a className={ styles.projectTitle }>
        <p>2019</p>
        <h3>Bpl Marketing</h3>
      </a>
    </Link>
  </section>
);

export default nextProject;
