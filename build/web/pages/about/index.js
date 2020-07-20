import CreativeStep from '../../components/CreativeStep/CreativeStep';
import { motion, useViewportScroll } from 'framer-motion';
import Button from '../../components/UI/Button/Button';
// import Skill from '../../components/Skill/Skill';
import styles from './about.module.css';
import { client } from '../../client';
import Head from 'next/head';
import React from 'react';

const About = props => {  

  return (
    <motion.div className={ styles.about } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
      <Head>
        <title>{ 'About me, my-self and I' }</title>
      </Head>
      <motion.section className={ styles.Hero } animate={{ opacity: 0 }} exit={{ opacity: 1 }}>
        <motion.p animate={{ opacity: 1, transition: { delay: 0.5 } }} initial={{ opacity: 0 }}>{ props.brief_intro }</motion.p>
      </motion.section>
      <section className={ styles.CreativeProcess }>
        {
          props.creative_process.map(( step, i ) => {
            return <CreativeStep index={ i } title={ step.title } copy={ step.body } key={ i }/>
          })
        }
      </section>
      <p className={ styles.ctaCopy }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Button link='https://bplmarketing.udemy.com/?next=%2Forganization%2Fhome%2F' margin={ '5% 0' } >Download CV</Button>
    </motion.div>
  );
}

About.getInitialProps = async function (context) {
  const query = `*[_type == "about"]{
    page_title,
    seo_details,
    brief_intro,
    creative_process,
    skill_sets,
    CV
  }`;

  return await client.fetch(query).then( res => res[0] )
}

export default About;