import ProgressiveImages from '../../components/ProgressiveImage/ProgressiveImage'
import ImageTextBox from '../../components/ImageTextBox/ImageTextBox';
import NextProject from '../../components/NextProject/NextProject';
import IntersectionObserver from '../../util/intersectionObserver'; 
import TextColumn from '../../components/textColumn/textColumn';
import { getAllCases,getCaseStudy } from '../../sanity/sanity';
import TextBlock from '../../components/textBlock/textBlock';
import Button from '../../components/UI/Button/Button';
import { slideX, slideY, scaleUp } from '../../util/animation';
import Slider from '../../components/slider/slider';
import ScrollFade from '../../util/scrollFade';
import Alert from '../../components/UI/Alert';
import styles from './case-study.module.css';
import Seo from '../../components/UI/Seo';
import { motion } from 'framer-motion';
import React from 'react';

const caseStudy = props => {


  return (
    <motion.div className={ styles.CaseStudy } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
      <Seo metas={ props.seo_details } title={ props.title } og_image={ props.cover.url } path={ '/case-studies/' + props.slug.current }/>
      <Alert preview={ props.preview }/>
      <section className={ styles.Hero }>
        <motion.div initial={"hidden"} animate={"show" } exit={"hidden"} variants={slideY(100)}>
        <ScrollFade>
          {
            anim => <ProgressiveImages image={ props.content.hero_img } ref={ anim.ref } fade={ anim.style }/>
          }
        </ScrollFade>
        </motion.div>
        <div >
          <Button link={ props.project_link } initial={"hidden"} animate={"show" } exit={"hidden"} variants={slideX(-100)}>Visit site</Button>
          <motion.div initial={"hidden"} animate={"show" } exit={"hidden"} variants={slideX(100)} className={ styles.projectTitle }>
            <p>{ props.date }</p>
            <h1>{ props.title }</h1>
          </motion.div>
        </div>
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
                  <ImageTextBox imgUrl={ module.image_cover } title={ module.title } key={ module._key } reverse={ module.isReverse }>
                    <TextBlock content={ module.body } />
                  </ImageTextBox>
                )
                break;
              case 'img':
                return (
                  <IntersectionObserver threshold={ 0 } key={ module._key } >{
                    observer => 
                    <motion.div 
                      animate={observer.inView ? "show" : "hidden"} 
                      className={ styles.fullWidthImg }
                      variants={ scaleUp }
                      ref={ observer.ref }
                      initial="hidden"
                      exit="hidden"
                      >
                      <ProgressiveImages image={ module.asset } />
                    </motion.div>
                  }
                  </IntersectionObserver>
                  )
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
      <NextProject next={ props.next } prev={ props.previous } />
    </motion.div>
  );
}

export async function getStaticProps( { params, preview = false } ) {
  const caseData = await getCaseStudy( params['case-study'], preview )
  return {
    props: { ...caseData, preview },
    revalidate: 1 
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
    fallback: false,
  }
}

export default caseStudy;
