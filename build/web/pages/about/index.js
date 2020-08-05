import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage';
import FeaturedSites from '../../components/FeaturedSites/FeaturedSites';
import TextBlock from '../../components/textBlock/textBlock';
import SkillSet from '../../components/SkillSet/SkillSet';
import Button from '../../components/UI/Button/Button';
import ScrollFade from '../../util/scrollFade';
import React, { userRef } from 'react';
import styles from './about.module.css';
import { motion } from 'framer-motion';
import { client } from '../../client';
import Head from 'next/head';
import kahaki from 'kahaki';

const About = props => {

  return (
    <motion.div className={ styles.about } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
      <Head>
        <title>{ 'About me, my-self and I' }</title>
      </Head>
      <ScrollFade>
      { anim =>
        <motion.section className={ styles.Hero } style={ anim.style } ref={ anim.ref }>
            <div className={ styles.bio }>
            <h1>Federico Corradi</h1>
            <p>{ props.job_title }</p>
            <TextBlock content={ props.brief_intro } isWrapped={ false } />
          </div>
          <ProgressiveImage image={ props.profile_image.asset } classPassed={ styles.profile_image } />
        </motion.section>
      }
      </ScrollFade>
      <section className={ styles.skillContainer }>
        {
          props.skill_sets.map( ({ skills_type, skills_description, _key }) => <SkillSet title={ skills_type } copy={ skills_description } key={ _key }/> )
        }
      </section>
      <section className={ styles.feature_sites }>
        <h4>Sites I like</h4>
         <FeaturedSites sites={ props.parsedSites } links={ props.feature_sites } />
      </section>
      <p className={ styles.ctaCopy }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Button link='https://bplmarketing.udemy.com/?next=%2Forganization%2Fhome%2F' margin={ '5% 0' } >Download CV</Button>
    </motion.div>
  );
}

export async function getServerSideProps() {
  const query = `*[_type == "about"]{
    profile_image{
      altTag,
      asset->{ url, metadata }
    },
    page_title,
    brief_intro,
    job_title,
    feature_sites,
    skill_sets,
    CV
  }`;

  const data = await client.fetch(query).then( res => res[0] )
  let parsedSites = null;
  const feature_sites = data.feature_sites.map( async site => await kahaki.getPreview( site ))
  await Promise.all( feature_sites ).then(( data ) => {  parsedSites = data } )
  return { props: {...data, parsedSites } }
}

export default About;