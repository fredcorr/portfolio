import { fade, scaleUp, slideX } from '../../util/animation';
import { useInView } from 'react-intersection-observer'
import styles from './HomePannel.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from "react";

const homePannel = (props) => {

  const [ref, inView ] = useInView({ threshold: 0.7, triggerOnce: true })

  return (
    <Link href="/case-studies/[case-study]" as={"/case-studies/" + props.link } scroll={false}>
      <a className={ styles.thumb } key={ props._key } ref={ ref }>
        <div className={ styles.cover } >
          <motion.p
            animate={inView ? "show" : "hidden"}
            initial="hidden"
            variants={fade}
            alt="">
              { props.details }
          </motion.p>
          <motion.img 
            animate={inView ? "show" : "hidden"}
            src={ props.coverImg } 
            initial="hidden"
            variants={scaleUp}
            exit="hidden"
            alt=""
            />
          <motion.p  
            animate={inView ? "show" : "hidden"}
            initial="hidden"
            variants={slideX( 100 )}
            exit="hidden"
            custom={ 100, 0.1 }>
              { props.date }
          </motion.p>
        </div>
        <motion.h2 
          animate={inView ? "show" : "hidden"}
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
