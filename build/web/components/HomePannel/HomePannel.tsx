import IntersectionObserver from '../../util/intersectionObserver'
import { fade, slideX } from '../../util/animation'
import styles from './HomePannel.module.css'
import ThreeImage from '../threeJs-image'
import React, { useEffect } from 'react'
import { LuminanceFormat } from 'three'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HomePannel = (props: any) => {
  let baseUrl = 'https://fred-corr.com'

  useEffect(() => {
    baseUrl = window.location.origin
  }, [])

  return (
    <IntersectionObserver threshold={0.5}>
      {(observer: any) => (
        <Link href={props.link}>
          <a className={styles.thumb} key={props._key} ref={observer.ref}>
            <div className={styles.cover}>
              <motion.p
                animate={observer.inView ? 'show' : 'hidden'}
                initial="hidden"
                variants={fade}
              >
                {props.details}
              </motion.p>
              <ThreeImage
                url={props.coverImg}
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
                {props.date}
              </motion.p>
            </div>
            <motion.h2
              animate={observer.inView ? 'show' : 'hidden'}
              variants={slideX('10%')}
              custom={[100, 0.4]}
              initial="hidden"
              exit="hidden"
            >
              {props.title}
            </motion.h2>
          </a>
        </Link>
      )}
    </IntersectionObserver>
  )
}

export default HomePannel
