import IntersectionObserver from '_utils/intersectionObserver'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderComponent } from '_types/sanity'
import { scaleUp } from '_utils/animation'
import styles from './Slider.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

const Slider = ({ slider_images }: SliderComponent) => {
  return (
    <IntersectionObserver threshold={0.5}>
      {(observer: any) => (
        <motion.section
          animate={observer.inView ? 'show' : 'hidden'}
          className={styles.Slider}
          variants={scaleUp}
          ref={observer.ref}
          initial="hidden"
          exit="hidden"
        >
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            pagination={{ clickable: true }}
            slidesPerView={2.01}
            spaceBetween={80}
            centeredSlides
            loop
          >
            {slider_images.map((img, i) => {
              const { width, height } = img.asset.metadata.dimensions
              return (
                <SwiperSlide key={i}>
                  <Image
                    blurDataURL={img.asset.metadata.lqip}
                    layout="responsive"
                    src={img.asset.url}
                    placeholder="blur"
                    height={height}
                    width={width}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </motion.section>
      )}
    </IntersectionObserver>
  )
}

export default Slider
