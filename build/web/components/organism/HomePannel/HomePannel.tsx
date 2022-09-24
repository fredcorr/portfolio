import IntersectionObserver from '_utils/intersectionObserver'
import { ProjectsPage } from '_types/sanity/pages'
import ThreeImage from '_molecules/threeJs-image'
import { fade, slideX } from '_utils/animation'
import styles from './HomePannel.module.css'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HomePannel = ({ title, slug, details, cover, date }: ProjectsPage) => {
  let baseUrl = 'https://fred-corr.com'

  useEffect(() => {
    baseUrl = window.location.origin
  }, [])

  return (
    <IntersectionObserver threshold={0.5}>
      {(observer: any) => (
        <Link href={slug.current}>
          <a className={styles.thumb} ref={observer.ref}>
            <div className={styles.cover}>
              <motion.p
                animate={observer.inView ? 'show' : 'hidden'}
                initial="hidden"
                variants={fade}
              >
                {details}
              </motion.p>
              <ThreeImage
                url={cover}
                style={styles.imageWrapper}
                trigger={observer.inView}
                disp={baseUrl + '/assets/images/disp.jpg'}
                intensity={0.9}
              />
              <motion.p
                animate={observer.inView ? 'show' : 'hidden'}
                initial="hidden"
                variants={slideX('10%')}
                exit="hidden"
                custom={[100, 0.1]}
              >
                {date}
              </motion.p>
            </div>
            <motion.h2
              animate={observer.inView ? 'show' : 'hidden'}
              variants={slideX('10%')}
              custom={[100, 0.4]}
              initial="hidden"
              exit="hidden"
            >
              {title}
            </motion.h2>
          </a>
        </Link>
      )}
    </IntersectionObserver>
  )
}

export default HomePannel
