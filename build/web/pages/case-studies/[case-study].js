import ProgressiveImages from '../../components/ProgressiveImage/ProgressiveImage';
import ImageTextBox from '../../components/ImageTextBox/ImageTextBox';
import NextProject from '../../components/NextProject/NextProject';
import TextBlock from '../../components/textColumn/textColumn';
import BlockContent from '@sanity/block-content-to-react';
import Button from '../../components/UI/Button/Button';
import Slider from '../../components/slider/slider';
import { client, urlFor } from '../../client';
import styles from './case-study.module.css';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

const caseStudy = props => {  
  console.log( props );
  
  return (
    <motion.div className={ styles.CaseStudy } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
      <Head>
        <title>{ props.title }</title>
      </Head>
      <section className={ styles.Hero }>
        <div className={ styles.heroClip }>
          <img src={ urlFor(props.cover ) } alt={ props.title }/>
        </div>
        <div className={ styles.projectTitle }>
          <h2>{ props.title }</h2>
          <p>{ props.date }</p>
        </div>
      </section>
      <section className={ styles.mainContent }>
        {
          props.content.map( ( module, i ) => {
            switch (module._type) {
              case 'text_module':
                 return <TextBlock textContent={ module } key={ module._key } />
                break;
              case 'image_text':
                return (
                  <ImageTextBox imgUrl={ urlFor( module.image_cover ) } title={ module.title } key={ module._key } reverse={ module.isReverse }>
                    <BlockContent
                      renderContainerOnSingleChild={ true }
                      blocks={ module.body } 
                      serializers={serializers}
                      />
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
          })
        }
      </section>
      <NextProject img={ '../assets/images/BPL_Leadership_1.jpg' } />
    </motion.div>
  );
}

caseStudy.getInitialProps = async function (context) {
  const query = `*[_type == "projects" && slug.current == "${ context.query['case-study'] }"]{
    seo_details,
    content[]{
      slider_images[]{
        "asset": asset->{ url, metadata }
      },
      image_cover{
        "asset": asset->{ url, metadata }
      },
      isReverse,
      useTitle,
      columns,
      "asset": asset->{ url, metadata },
      image,
      title,
      _type,
      _key,
      body,
    },
    cover,
    title,
    date,
  }`;

  return await client.fetch(query).then( res => res[0] )
}

export default caseStudy;

{
  <section className={ styles.mainContent }>
    <TextBlock textContent={ 'The design phase was characterised by trying to find a way to incorporate the lines into the design in a way that could be replicated in a responsive way, when it came to coding it. After a bit of research I found a way to implement it.<br/><br/>Some section, such as the ‘work’ and ‘our story’ pages have a stronger representation of the line with them being more curvy and running down the page, while in other sections I preferred to keep things a bit cleaner such as for the case studies which have to be more modular and quick to build upon request.' } />
    <ImageTextBox imgUrl={ '../assets/images/BPL_Leadership_1.jpg' } title={ 'Start with the<br/>right method' } paragraph={ 'As part of my creative process, I like to start with the right method to ensure flexibility to rapid changes, so I opted for an object orientated approach, taking advantage of a modern tools such as Sketch fro the design tase and a JS framework, known as React.<br/><br/>This method helped laying out the design, by creating design element and defining rules, such as the different heading and design guidelines for the site, which could then be easily translated into the development phase.' } />
    <TextBlock textContent={ 'The design phase was characterised by trying to find a way to incorporate the lines into the design in a way that could be replicated in a responsive way, when it came to coding it. After a bit of research I found a way to implement it.<br/><br/>Some section, such as the ‘work’ and ‘our story’ pages have a stronger representation of the line with them being more curvy and running down the page, while in other sections I preferred to keep things a bit cleaner such as for the case studies which have to be more modular and quick to build upon request.' } />
    <img src={ '../assets/images/fullWidthImage.png' } alt='Our Story Page' />
    <ImageTextBox reverse={ true } imgUrl={ '../assets/images/BPL_Leadership_2.png' } title={ 'Bring it to life' } paragraph={ 'After a couple of weeks between initial design a reviews from the board, we moved onto bringing the site to life. Starting by separating the site in single objects as highlighted in the design, so that the styling could be consistent using Css Modules.<br/><br/>This helped even in the responsive phase as I could control the styling of multiple object all at the same time, while keeping my Css files tidy.' } />
    <TextBlock textContent={ 'The design phase was characterised by trying to find a way to incorporate the lines into the design in a way that could be replicated in a responsive way, when it came to coding it. After a bit of research I found a way to implement it.<br/><br/>Some section, such as the ‘work’ and ‘our story’ pages have a stronger representation of the line with them being more curvy and running down the page, while in other sections I preferred to keep things a bit cleaner such as for the case studies which have to be more modular and quick to build upon request.' }/>
    <Slider images={ [ '../assets/images/slides/slidesOne.jpg', '../assets/images/slides/slidesTwo.jpg', '../assets/images/slides/slidesThree.jpg' ] }/>
    <TextBlock textContent={ 'The design phase was characterised by trying to find a way to incorporate the lines into the design in a way that could be replicated in a responsive way, when it came to coding it. After a bit of research I found a way to implement it.<br/><br/>Some section, such as the ‘work’ and ‘our story’ pages have a stronger representation of the line with them being more curvy and running down the page, while in other sections I preferred to keep things a bit cleaner such as for the case studies which have to be more modular and quick to build upon request.' }/>
    <Button link='https://bplmarketing.udemy.com/?next=%2Forganization%2Fhome%2F' margin={ '10% 0 0 0' }>Visit Site</Button>
  </section>
}
