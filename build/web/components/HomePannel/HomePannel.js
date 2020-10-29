import { fade, scaleUp, slideX } from '../../util/animation';
import styles from './HomePannel.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from "react";

const homePannel = (props) => {

  // const [ref, inView ] = useInView({ threshold: 0.7, triggerOnce: true })
  const inView = true;

  return (
    <Link href="/case-studies/[case-study]" as={"/case-studies/" + props.link } scroll={false}>
      <a className={ styles.thumb } key={ props._key } >
        <div className={ styles.cover } >
          <motion.p
            animate={inView ? "show" : "hidden"}
            initial="hidden"
            variants={fade}
            alt="">
              { props.details }
          </motion.p>
          <motion.div
            animate={true ? "show" : "hidden"}
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
            animate={true ? "show" : "hidden"}
            initial="hidden"
            variants={slideX( 100 )}
            exit="hidden"
            custom={ 100, 0.1 }>
              { props.date }
          </motion.p>
        </div>
        <motion.h2 
          animate={true ? "show" : "hidden"}
          initial="hidden"
          variants={slideX( 100 )}
          custom={ 100, 0.4 }
          exit="hidden">
            { props.title }
        </motion.h2>
      </a>
    </Link>
  )
}

export default homePannel;
