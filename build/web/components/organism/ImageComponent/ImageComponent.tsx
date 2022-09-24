import IntersectionObserver from '_utils/intersectionObserver'
import styles from './ImageComponent.module.css'
import { ImageComponent } from '_types/sanity'
import { scaleUp } from '_utils/animation'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ImageComponent = ({ asset }: ImageComponent) => {
  const { width, height } = asset.metadata.dimensions

  return (
    <IntersectionObserver threshold={0}>
      {(observer: any) => (
        <motion.div
          animate={observer.inView ? 'show' : 'hidden'}
          className={styles.fullWidthImg}
          variants={scaleUp}
          ref={observer.ref}
          initial="hidden"
          exit="hidden"
        >
          <Image
            src={asset.url}
            layout="responsive"
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL={asset.metadata.lqip}
          />
        </motion.div>
      )}
    </IntersectionObserver>
  )
}

export default ImageComponent
