import FeaturedSite from '_molecules/FeaturedSite/FeaturedSite'
import IntersectionObserver from '_utils/intersectionObserver'
import SkillSet from '_molecules/SkillSet/SkillSet'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { AboutPage } from '_types/sanity/pages'
import { scaleUp } from '_utils/animation'
import ScrollFade from '_utils/scrollFade'
import Button from '_atoms/Button/Button'
import styles from './About.module.css'
import Alert from '_atoms/Alert/Alert'
import { motion } from 'framer-motion'
import Seo from '_atoms/Seo/Seo'
import Image from 'next/image'
import React from 'react'

const About = ({
  profile_image,
  scrapedSites,
  contact_copy,
  seo_details,
  brief_intro,
  skill_sets,
  job_title,
  email,
  CV,
}: AboutPage) => {
  const { width, height } = profile_image.asset.metadata.dimensions

  return (
    <motion.div
      className={styles.about}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Seo
        og_image={profile_image.asset.url}
        title={'About me, my-self and I'}
        metas={seo_details}
      />
      <ScrollFade>
        {(anim: any) => (
          <motion.section
            className={styles.Hero}
            style={anim.style}
            ref={anim.ref}
          >
            <div className={styles.profile_image}>
              <Image
                blurDataURL={profile_image.asset.metadata.lqip}
                src={profile_image.asset.url}
                layout="responsive"
                placeholder="blur"
                height={height}
                width={width}
              />
            </div>
            <div className={styles.bio}>
              <h1>
                Federico
                <br />
                Corradi
              </h1>
              <p>{job_title}</p>
              <TextBlock content={brief_intro} isWrapped={false} />
            </div>
          </motion.section>
        )}
      </ScrollFade>
      <IntersectionObserver threshold={0.5}>
        {(observer: any) => (
          <motion.section
            animate={observer.inView ? 'show' : 'hidden'}
            className={styles.skillContainer}
            ref={observer.ref}
            variants={scaleUp}
            initial="hidden"
            exit="hidden"
          >
            {skill_sets.map((skill, i) => (
              <SkillSet {...skill} key={i} />
            ))}
          </motion.section>
        )}
      </IntersectionObserver>
      <IntersectionObserver threshold={0.5}>
        {(observer: any) => (
          <motion.section
            animate={observer.inView ? 'show' : 'hidden'}
            className={styles.feature_sites}
            ref={observer.ref}
            variants={scaleUp}
            initial="hidden"
            exit="hidden"
          >
            <h4>Sites I like</h4>
            {scrapedSites.map((site: any) => {
              return <FeaturedSite {...site} key={site.title} />
            })}
          </motion.section>
        )}
      </IntersectionObserver>
      <IntersectionObserver threshold={0.5}>
        {(observer: any) => (
          <motion.section
            animate={observer.inView ? 'show' : 'hidden'}
            className={styles.getInTouch}
            ref={observer.ref}
            variants={scaleUp}
            initial="hidden"
            exit="hidden"
          >
            <TextBlock content={contact_copy} isWrapped={false} />
            <div className={styles.aboutLinks}>
              <Button link={CV + '?dl'}>Download CV</Button>
              <Button link={'mailto:' + email}>Get in touch</Button>
            </div>
          </motion.section>
        )}
      </IntersectionObserver>
    </motion.div>
  )
}

export default About
