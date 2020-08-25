import ProgressiveImages from '../../components/ProgressiveImage/ProgressiveImage'
import ImageTextBox from '../../components/ImageTextBox/ImageTextBox';
import NextProject from '../../components/NextProject/NextProject';
import TextColumn from '../../components/textColumn/textColumn';
import TextBlock from '../../components/textBlock/textBlock';
import Button from '../../components/UI/Button/Button';
import { slideX, slideY } from '../../util/animation';
import Slider from '../../components/slider/slider';
import ScrollFade from '../../util/scrollFade';
import { client, urlFor } from '../../client';
import styles from './case-study.module.css';
import Seo from '../../components/UI/Seo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import React from 'react';

const caseStudy = props => {

  console.log( props );

  return (
    <motion.div className={ styles.CaseStudy } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
      <Seo metas={ props.seo_details } title={ props.title } path={ useRouter().asPath }/>
      <section className={ styles.Hero }>
        <ScrollFade>
          { anim => (
            <motion.div initial={"hidden"} animate={"show" } exit={"hidden"} variants={slideY(100)} ref={ anim.ref }  style={ anim.style }>
              <ProgressiveImages image={ props.content.hero_img }/>
            </motion.div>
          ) }
        </ScrollFade>
        <Button link={ props.link_project } initial={"hidden"} animate={"show" } exit={"hidden"} variants={slideX(-100)}>Visit site</Button>
        <motion.div initial={"hidden"} animate={"show" } exit={"hidden"} variants={slideX(100)} className={ styles.projectTitle }>
          <p>{ props.date }</p>
          <h1>{ props.title }</h1>
        </motion.div>
      </section>
      <section className={ styles.mainContent }>
        {
          props.content.modules ? props.content.modules.map( ( module, i ) => {
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

caseStudy.getInitialProps = async function (context) {
  const currentPrj = await client.fetch( `*[_type == "projects" && slug.current == "${ context.query['case-study'] }"][0]{
    seo_details{
      ...,
      "og_image": og_image.asset->url
    },
    content{
      "hero_img": hero_img.asset->{ url, metadata },
      modules[]{
        ...,
        slider_images[]{
          "asset": asset->{ url, metadata }
        },
        image_cover{
          "asset": asset->{ url, metadata }
        },
        "asset": asset->{ url, metadata }
      }
    },
    cover,
    title,
    date,
  }` )

  const allPrj = await client.fetch( `*[_type == "projects"] | order(_createdAt asc ) {
    'slug': slug.current,
    cover,
    title,
    date,
  }` )


  const index = allPrj.map(prj => { return prj.slug }).indexOf(context.query['case-study'])
  console.log( currentPrj );

  return {
    ...currentPrj,
    next: allPrj[ index === allPrj.length - 1 ? 0 : index + 1 ],
    previous: allPrj[ index === 0 ? allPrj.length - 1 : index - 1 ],
  }
  
}

export default caseStudy;
