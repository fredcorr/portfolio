import ImageTextBox from '../../components/ImageTextBox/ImageTextBox'
import NextProject from '../../components/NextProject/NextProject'
import IntersectionObserver from '../../util/intersectionObserver'
import TextColumn from '../../components/TextColumn/TextColumn'
import { slideX, slideY, scaleUp } from '../../util/animation'
import TextBlock from '../../components/TextBlock/TextBlock'
import Button from '../../components/UI/Button/Button'
import Slider from '../../components/Slider/Slider'
import ScrollFade from '../../util/scrollFade'
import Alert from '../../components/UI/Alert/Alert'
import styles from './Project.module.css'
import Seo from '../../components/UI/Seo/Seo'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Project = ({ cover, content, ...props }: any) => {
  const { width, height } = content.hero_img.metadata.dimensions
  return (
    <motion.div
      className={styles.CaseStudy}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Seo
        metas={props.seo_details}
        title={props.title}
        og_image={cover.url}
        path={props.slug.current}
      />
      <Alert preview={props.preview} />
      <section className={styles.Hero}>
        <motion.div
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          variants={slideY(100)}
        >
          <ScrollFade>
            {(anim: any) => (
              <div ref={anim.ref} className={anim.style}>
                <Image
                  src={content.hero_img.url}
                  layout="responsive"
                  width={width}
                  height={height}
                  placeholder="blur"
                  blurDataURL={content.hero_img.metadata.lqip}
                />
              </div>
            )}
          </ScrollFade>
        </motion.div>
        <div>
          <Button
            link={props.project_link}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            variants={slideX(-100)}
          >
            Visit site
          </Button>
          <motion.div
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            variants={slideX(100)}
            className={styles.projectTitle}
          >
            <p>{props.date}</p>
            <h1>{props.title}</h1>
          </motion.div>
        </div>
      </section>
      <section className={styles.mainContent}>
        {content
          ? content.modules.map((module: any, i: number) => {
              switch (module._type) {
                case 'text_module':
                  return <TextColumn textContent={module} key={module._key} />
                  break
                case 'image_text':
                  return (
                    <ImageTextBox
                      imgUrl={module.image_cover}
                      title={module.title}
                      key={module._key}
                      reverse={module.isReverse}
                    >
                      <TextBlock content={module.body} />
                    </ImageTextBox>
                  )
                  break
                case 'img':
                  return (
                    <IntersectionObserver threshold={0} key={module._key}>
                      {(observer: any) => {
                        const { width, height } =
                          module.asset.metadata.dimensions
                        return (
                          <motion.div
                            animate={observer.inView ? 'show' : 'hidden'}
                            className={styles.fullWidthImg}
                            variants={scaleUp}
                            ref={observer.ref}
                            initial="hidden"
                            exit="hidden"
                          >
                            <Image
                              src={module.asset.url}
                              layout="responsive"
                              width={width}
                              height={height}
                              placeholder="blur"
                              blurDataURL={module.asset.metadata.lqip}
                            />
                          </motion.div>
                        )
                      }}
                    </IntersectionObserver>
                  )
                  break
                case 'slider':
                  return (
                    <Slider
                      images={module.slider_images}
                      i={i}
                      key={module._key}
                    />
                  )
                  break
                default:
                  return null
                  break
              }
            })
          : null}
      </section>
      {/* <NextProject next={ props.next } prev={ props.previous } /> */}
    </motion.div>
  )
}

export default Project
