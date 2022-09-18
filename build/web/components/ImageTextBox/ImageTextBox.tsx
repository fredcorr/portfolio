import IntersectionObserver from '../../util/intersectionObserver'
import { scaleUp } from '../../util/animation'
import styles from './ImageTextBox.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const ImageTextBox = (props: any) => {
  let direction = props.reverse ? styles.reverse : styles.normal
  const { width, height } = props.imgUrl.asset.metadata.dimensions

  return (
    <IntersectionObserver threshold={0.5}>
      {(observer: any) => (
        <div
          className={[styles.imageTextBox, direction].join(' ')}
          ref={observer.ref}
        >
          <motion.div
            animate={observer.inView ? 'show' : 'hidden'}
            className={styles.imageBox}
            variants={scaleUp}
            initial="hidden"
            exit="hidden"
          >
            <Image
              src={props.imgUrl.asset.url}
              layout="responsive"
              width={width}
              height={height}
              placeholder="blur"
              blurDataURL={props.imgUrl.asset.metadata.lqip}
            />
          </motion.div>
          <motion.div
            animate={observer.inView ? 'show' : 'hidden'}
            className={styles.textBox}
            variants={scaleUp}
            initial="hidden"
            exit="hidden"
          >
            <h4>{props.title}</h4>
            <div></div>
            {props.children}
          </motion.div>
        </div>
      )}
    </IntersectionObserver>
  )
}

export default ImageTextBox
