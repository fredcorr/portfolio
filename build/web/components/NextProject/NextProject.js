import styles from './NextProject.module.css';
// import { TweenMax } from 'gsap';
import Link from 'next/link';
import React from 'react';


const nextProject = (props) => (
  <section className={ styles.NextProject}>
    <Link href='/case-studies/[case-study]' as='/case-studies/:bpl'>
      <a className={ styles.projectTitle }>
        <p>2019</p>
        <h3>BPL Marketing</h3>
      </a>
    </Link>
    <div className={ styles.featureImage } style={{ backgroundImage: `url(${props.img})`} }></div>
    <Link href='/case-studies/[case-study]' as='/case-studies/:bpl'>
      <a className={ styles.projectTitle }>
        <p>2019</p>
        <h3>Doner London</h3>
      </a>
    </Link>
  </section>
);

export default nextProject;
