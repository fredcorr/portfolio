import { scaleUp, slideX } from '../../util/animation';
import { useInView } from 'react-intersection-observer'
import styles from './ImageTextBox.module.css';
import { motion } from 'framer-motion';
import React from 'react';

const imageTextBox = (props) => {
  let direction = props.reverse ? styles.reverse : styles.normal ;
  const [ref, inView ] = useInView({ threshold: 0.6, triggerOnce: true })


  return (
    <div className={ [ styles.imageTextBox, direction ].join( ' ' ) } ref={ ref }>
      <motion.div
        animate={inView ? "show" : "hidden"}
        className={ styles.imageBox }
        variants={scaleUp}
        initial="hidden"
        exit="hidden"
        >
        <img src={ props.imgUrl } alt={ props.alt }/>
      </motion.div>
      <motion.div 
        animate={inView ? "show" : "hidden"}
        className={ styles.textBox }
        variants={slideX( props.reverse? -100 : 100 )}
        initial="hidden"
        exit="hidden"
      >
        <h4>{ props.title }</h4>
        <div></div>
        { props.children }
      </motion.div>
    </div>
  )
}

export default imageTextBox;
