import ProgressiveImages from '../../components/ProgressiveImage/ProgressiveImage'
import ImageTextBox from '../../components/ImageTextBox/ImageTextBox';
import NextProject from '../../components/NextProject/NextProject';
import { getCaseStudy, getAllCases } from '../../sanity/sanity';
import TextColumn from '../../components/textColumn/textColumn';
import TextBlock from '../../components/textBlock/textBlock';
import Button from '../../components/UI/Button/Button';
import { slideX, slideY } from '../../util/animation';
import Slider from '../../components/slider/slider';
import ScrollFade from '../../util/scrollFade';
import Alert from '../../components/UI/Alert';
import styles from './case-study.module.css';
import { urlFor } from '../../sanity/client';
import Seo from '../../components/UI/Seo';
import { motion } from 'framer-motion';
import React from 'react';

const caseStudy = props => {

  console.log( props.content );

  return (
    <motion.div className={ styles.CaseStudy } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
      <Seo metas={ props.seo_details } title={ props.title } path={ '/' + props.slug }/>
      <Alert preview={ props.preview }/>
      <section className={ styles.Hero }>
        
        { props.content ? <ScrollFade>
          { anim => (
            <motion.div initial={"hidden"} animate={"show" } exit={"hidden"} variants={slideY(100)} ref={ anim.ref }  style={ anim.style }>
              <ProgressiveImages image={ props.content.hero_img }/>
            </motion.div>
          ) }
        </ScrollFade> : null }
        <Button link={ props.link_project } initial={"hidden"} animate={"show" } exit={"hidden"} variants={slideX(-100)}>Visit site</Button>
        <motion.div initial={"hidden"} animate={"show" } exit={"hidden"} variants={slideX(100)} className={ styles.projectTitle }>
          <p>{ props.date }</p>
          <h1>{ props.title }</h1>
        </motion.div>
      </section>
      <section className={ styles.mainContent }>
        {
          props.content ? props.content.modules.map( ( module, i ) => {
            switch (module._type) {
              case 'text_module':
                 return <TextColumn textContent={ module } key={ module._key } />
                break;
              case 'image_text':
                return (
                  <ImageTextBox imgUrl={ urlFor( module.image_cover ) } title={ module.title } key={ module._key } reverse={ module.isReverse }>
                    <TextBlock content={ module.body } />
                  </ImageTextBox>
                )
                break;
              case 'image':
                return <ProgressiveImages
                  classPassed={ styles.fullWidthImg }
                  image={ module.asset }
                  key={ module._key }
                />
                break;
              case 'slider':
                return <Slider images={ module.slider_images } i={i} key={ module._key }/>
                break;
              default:
                return null
                break;
            }
          }) : null
        }
      </section>
      <NextProject img={ '../assets/images/BPL_Leadership_1.jpg' } next={ props.next } prev={ props.previous } />
    </motion.div>
  );
}

export async function getStaticProps( { params, preview = false } ) {
  const caseData = await getCaseStudy( params['case-study'], preview )
  return {
    props: { ...caseData, preview }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllCases( false )
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          'case-study': post.slug,
        },
      })) || [],
    fallback: true,
  }
}

export default caseStudy;
