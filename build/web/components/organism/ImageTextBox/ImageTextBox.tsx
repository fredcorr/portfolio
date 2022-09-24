import IntersectionObserver from '_utils/intersectionObserver'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { ImageTextComponent } from '_types/sanity'
import styles from './ImageTextBox.module.css'
import { scaleUp } from '_utils/animation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const ImageTextBox = ({ isReverse, image_cover, title, body }: ImageTextComponent) => {
  let direction = isReverse ? styles.reverse : styles.normal
  const { width, height } = image_cover.asset.metadata.dimensions

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
              blurDataURL={image_cover.asset.metadata.lqip}
              src={image_cover.asset.url}
              layout="responsive"
              placeholder="blur"
              height={height}
              width={width}
            />
          </motion.div>
          <motion.div
            animate={observer.inView ? 'show' : 'hidden'}
            className={styles.textBox}
            variants={scaleUp}
            initial="hidden"
            exit="hidden"
          >
            <h4>{title}</h4>
            <div></div>
            <TextBlock content={body} />
          </motion.div>
        </div>
      )}
    </IntersectionObserver>
  )
}

export default ImageTextBox
