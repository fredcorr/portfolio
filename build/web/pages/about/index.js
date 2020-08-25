import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage';
import FeaturedSites from '../../components/FeaturedSites/FeaturedSites';
import TextBlock from '../../components/textBlock/textBlock';
import SkillSet from '../../components/SkillSet/SkillSet';
import Button from '../../components/UI/Button/Button';
import ScrollFade from '../../util/scrollFade';
import Seo from '../../components/UI/Seo';
import styles from './about.module.css';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import React, { userRef } from 'react';
import { client } from '../../client';
import kahaki from 'kahaki';

const About = props => {

  return (
    <motion.div className={ styles.about } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
      <Seo metas={ props.seo_details } title={ 'About me, my-self and I' } path={ useRouter().asPath }/>
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
      <section className={ styles.getInTouch }>
        <TextBlock content={ props.contact_copy } isWrapped={ false } />
        <div className={ styles.aboutLinks }>
          <Button link={ props.CV + '?dl' } >Download CV</Button>
          <Button link={ 'mailto:' + props.email } >Get in touch</Button>
        </div>
      </section>
    </motion.div>
  );
}

export async function getServerSideProps() {
  const query = `*[_type == "about"]{
    profile_image{
      altTag,
      asset->{ url, metadata }
    },
    seo_details{
      ...,
      "og_image": og_image.asset->url
    },
    page_title,
    brief_intro,
    job_title,
    feature_sites,
    skill_sets,
    contact_copy,
    "CV": CV.asset->url,
    email
  }`;

  const data = await client.fetch(query).then( res => res[0] )
  let parsedSites = null;
  const feature_sites = data.feature_sites.map( async site => await kahaki.getPreview( site ))
  await Promise.all( feature_sites ).then(( data ) => {  parsedSites = data } )
  return { props: {...data, parsedSites } }
}

export default About;