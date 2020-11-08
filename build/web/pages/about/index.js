import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage';
import FeaturedSites from '../../components/FeaturedSites/FeaturedSites';
import IntersectionObserver from '../../util/intersectionObserver';
import TextBlock from '../../components/textBlock/textBlock';
import SkillSet from '../../components/SkillSet/SkillSet';
import Button from '../../components/UI/Button/Button';
import { scaleUp } from '../../util/animation';
import { getAbout } from '../../sanity/sanity';
import ScrollFade from '../../util/scrollFade';
import Alert from '../../components/UI/Alert';
import Seo from '../../components/UI/Seo';
import styles from './about.module.css';
import { motion } from 'framer-motion';
import kahaki from 'kahaki'; 
import React from 'react';

const About = props => {

  return (
    <motion.div className={ styles.about } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
      <Seo metas={ props.seo_details } title={ 'About me, my-self and I' } og_image={ props.profile_image.asset.url } path={ '/about' }/>
      <Alert preview={ props.preview }/>
      <ScrollFade>
      { anim =>
        <motion.section className={ styles.Hero } style={ anim.style } ref={ anim.ref }>
            <div className={ styles.bio }>
            <h1>Federico Corradi</h1>
            <p>{ props.job_title }</p>
            <TextBlock content={ props.brief_intro } isWrapped={ false } />
          </div>
          <div className={ styles.profile_image }>
            <ProgressiveImage image={ props.profile_image.asset } />
          </div>
        </motion.section>
      }
      </ScrollFade>
      <IntersectionObserver threshold={ 0.5 }>
        {
        observer => 
          <motion.section className={ styles.skillContainer } ref={ observer.ref } animate={observer.inView ? "show" : "hidden"} variants={ scaleUp } initial="hidden" exit="hidden">
            {
              props.skill_sets.map( ({ skills_type, skills_description, _key }) => <SkillSet title={ skills_type } copy={ skills_description } key={ _key }/> )
            }
          </motion.section>
        }
      </IntersectionObserver>
      <IntersectionObserver threshold={ 0.5 }>
        {
          observer => 
          <motion.section className={ styles.feature_sites } ref={ observer.ref } animate={observer.inView ? "show" : "hidden"} variants={ scaleUp } initial="hidden" exit="hidden">
            <h4>Sites I like</h4>
            <FeaturedSites sites={ props.parsedSites } links={ props.feature_sites } />
          </motion.section>
        }
      </IntersectionObserver>
      <IntersectionObserver threshold={ 0.5 }>
        {
          observer => 
          <motion.section className={ styles.getInTouch } ref={ observer.ref } animate={observer.inView ? "show" : "hidden"} variants={ scaleUp } initial="hidden" exit="hidden">
            <TextBlock content={ props.contact_copy } isWrapped={ false } />
            <div className={ styles.aboutLinks }>
              <Button link={ props.CV + '?dl' } >Download CV</Button>
              <Button link={ 'mailto:' + props.email } >Get in touch</Button>
            </div>
          </motion.section>
        }
      </IntersectionObserver>
    </motion.div>
  );
}

export async function getStaticProps( { preview = false } ) {

  const aboutData = await getAbout(preview)
  let parsedSites = null;
  const feature_sites = aboutData.feature_sites.map( async site => await kahaki.getPreview( site ))
  await Promise.all( feature_sites ).then(( data ) => {  parsedSites = data } )
  return { 
    props: {...aboutData, parsedSites, preview },
    revalidate: 1
  }

}

export default About;