import IntersectionObserver from '../../util/intersectionObserver';
import { fade, slideX } from '../../util/animation';
import styles from './HomePannel.module.css';
import ThreeImage from '../threeJs-image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from "react";

const homePannel = (props) => {

  return (
    <IntersectionObserver threshold={ 0.5 }>
    {
      observer =>
        <Link href="/case-studies/[case-study]" as={"/case-studies/" + props.link }>
          <a className={ styles.thumb } key={ props._key } ref={ observer.ref }>
            <div className={ styles.cover } >
              <motion.p
                animate={observer.inView ? "show" : "hidden"}
                initial="hidden"
                variants={fade}
                alt="">
                  { props.details }
              </motion.p>
              <ThreeImage url={ props.coverImg } style={ styles.imageWrapper } trigger={ observer.inView } disp={ 'http://fredcorr.com/assets/images/disp.jpg' } intensity={ 0.9 } />
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
