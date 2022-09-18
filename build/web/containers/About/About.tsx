import FeaturedSite from '../../components/FeaturedSite/FeaturedSite'
import IntersectionObserver from '../../util/intersectionObserver'
import TextBlock from '../../components/TextBlock/TextBlock'
import SkillSet from '../../components/SkillSet/SkillSet'
import Button from '../../components/UI/Button/Button'
import { scaleUp } from '../../util/animation'
import ScrollFade from '../../util/scrollFade'
import Alert from '../../components/UI/Alert/Alert'
import Seo from '../../components/UI/Seo/Seo'
import styles from './About.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const About = ({ profile_image, ...props }: any) => {
  const { width, height } = profile_image.asset.metadata.dimensions

  return (
    <motion.div
      className={styles.about}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Seo
        metas={props.seo_details}
        title={'About me, my-self and I'}
        og_image={profile_image.asset.url}
        path={'/about'}
      />
      <Alert preview={props.preview} />
      <ScrollFade>
        {(anim: any) => (
          <motion.section
            className={styles.Hero}
            style={anim.style}
            ref={anim.ref}
          >
            <div className={styles.profile_image}>
              <Image
                src={profile_image.asset.url}
                layout="responsive"
                width={width}
                height={height}
                placeholder="blur"
                blurDataURL={profile_image.asset.metadata.lqip}
              />
            </div>
            <div className={styles.bio}>
              <h1>
                Federico
                <br />
                Corradi
              </h1>
              <p>{props.job_title}</p>
              <TextBlock content={props.brief_intro} isWrapped={false} />
            </div>
          </motion.section>
        )}
      </ScrollFade>
      <IntersectionObserver threshold={0.5}>
        {(observer: any) => (
          <motion.section
            className={styles.skillContainer}
            ref={observer.ref}
            animate={observer.inView ? 'show' : 'hidden'}
            variants={scaleUp}
            initial="hidden"
            exit="hidden"
          >
            {props.skill_sets.map(
              ({ skills_type, skills_description, _key }: any) => (
                <SkillSet
                  title={skills_type}
                  copy={skills_description}
                  key={_key}
                />
              )
            )}
          </motion.section>
        )}
      </IntersectionObserver>
      <IntersectionObserver threshold={0.5}>
        {(observer: any) => (
          <motion.section
            className={styles.feature_sites}
            ref={observer.ref}
            animate={observer.inView ? 'show' : 'hidden'}
            variants={scaleUp}
            initial="hidden"
            exit="hidden"
          >
            <h4>Sites I like</h4>
            {
              props.scrapedSites.map((site: any) => {
                return <FeaturedSite {...site} key={site.title} />
              })
            }
          </motion.section>
        )}
      </IntersectionObserver>
      <IntersectionObserver threshold={0.5}>
        {(observer: any) => (
          <motion.section
            className={styles.getInTouch}
            ref={observer.ref}
            animate={observer.inView ? 'show' : 'hidden'}
            variants={scaleUp}
            initial="hidden"
            exit="hidden"
          >
            <TextBlock content={props.contact_copy} isWrapped={false} />
            <div className={styles.aboutLinks}>
              <Button link={props.CV + '?dl'}>Download CV</Button>
              <Button link={'mailto:' + props.email}>Get in touch</Button>
            </div>
          </motion.section>
        )}
      </IntersectionObserver>
    </motion.div>
  )
}

export default About
