import IntersectionObserver from '../../util/intersectionObserver';
import { fade, scaleUp, slideX } from '../../util/animation';
import styles from './HomePannel.module.css';
// import ThreeImage from '../threeJs-image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from "react";

const homePannel = (props) => {

  return (
    <IntersectionObserver>
    {
      observer =>
        <Link href="/case-studies/[case-study]" as={"/case-studies/" + props.link } scroll={false}>
          <a className={ styles.thumb } key={ props._key } ref={ observer.ref }>
            <div className={ styles.cover } >
              <motion.p
                animate={observer.inView ? "show" : "hidden"}
                initial="hidden"
                variants={fade}
                alt="">
                  { props.details }
              </motion.p>
              {/* <ThreeImage url={ props.coverImg } style={ styles.imageWrapper } trigger={ observer.inView } disp={ 'http://localhost:3000/assets/images/disp.jpg' } intesity={ 0.9 } /> */}
              <motion.div
                animate={observer.inView ? "show" : "hidden"}
                className={ styles.imageWrapper }
                variants={scaleUp}
                whileHover="hover"
                initial="hidden"
                exit="hidden">
                  <img src={ props.coverImg } alt="" />
                  <img src={ props.coverImg } alt="" />
                  <p>View project</p>
              </motion.div>
              <motion.p  
                animate={observer.inView ? "show" : "hidden"}
                initial="hidden"
                variants={slideX( 100 )}
                exit="hidden"
                custom={ 100, 0.1 }>
                  { props.date }
              </motion.p>
            </div>
            <motion.h2 
              animate={observer.inView ? "show" : "hidden"}
              initial="hidden"
              variants={slideX( 100 )}
              custom={ 100, 0.4 }
              exit="hidden">
                { props.title }
            </motion.h2>
          </a>
        </Link>
    }
    </IntersectionObserver>
  )
}

export default homePannel;
