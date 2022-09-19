import ImageTextBox from '_organism/ImageTextBox/ImageTextBox'
import IntersectionObserver from '_utils/intersectionObserver'
import NextProject from '_organism/NextProject/NextProject'
import { slideX, slideY, scaleUp } from '_utils/animation'
import TextColumn from '_organism/TextColumn/TextColumn'
import { ProjectsPage } from '_types/sanity/pages'
import TextBlock from '_atoms/TextBlock/TextBlock'
import Slider from '_organism/Slider/Slider'
import ScrollFade from '_utils/scrollFade'
import styles from './Project.module.css'
import Button from '_atoms/Button/Button'
import Alert from '_atoms/Alert/Alert'
import { motion } from 'framer-motion'
import Seo from '_atoms/Seo/Seo'
import Image from 'next/image'
import React from 'react'

const Project = ({
  project_link,
  seo_details,
  content,
  cover,
  title,
  slug,
  date,
}: ProjectsPage) => {
  const { width, height } = content.hero_img.metadata.dimensions
  return (
    <motion.div
      className={styles.CaseStudy}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Seo
        og_image={cover.url}
        metas={seo_details}
        path={slug.current}
        title={title}
      />
      <section className={styles.Hero}>
        <motion.div
          variants={slideY(100)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
        >
          <ScrollFade>
            {(anim: any) => (
              <div ref={anim.ref} className={anim.style}>
                <Image
                  blurDataURL={content.hero_img.metadata.lqip}
                  src={content.hero_img.url}
                  layout="responsive"
                  placeholder="blur"
                  height={height}
                  width={width}
                />
              </div>
            )}
          </ScrollFade>
        </motion.div>
        <div>
          <Button
            variants={slideX(-100)}
            link={project_link}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
          >
            Visit site
          </Button>
          <motion.div
            className={styles.projectTitle}
            variants={slideX(100)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
          >
            <p>{date}</p>
            <h1>{title}</h1>
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
      {/* <NextProject next={ next } prev={ previous } /> */}
    </motion.div>
  )
}

export default Project
