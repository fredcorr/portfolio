import IntersectionObserver from '../../util/intersectionObserver';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import { scaleUp, slideX } from '../../util/animation';
import styles from './ImageTextBox.module.css';
import { motion } from 'framer-motion';
import React from 'react';

const imageTextBox = (props) => {
  let direction = props.reverse ? styles.reverse : styles.normal ;
  

  return (
    <IntersectionObserver>
    {  
      observer =>
      <div className={ [ styles.imageTextBox, direction ].join( ' ' ) } ref={ observer.ref }>
        <motion.div
          animate={observer.inView ? "show" : "hidden"}
          className={ styles.imageBox }
          variants={scaleUp}
          initial="hidden"
          exit="hidden"
          >
          <ProgressiveImage image={ props.imgUrl.asset } />
        </motion.div>
        <motion.div 
          animate={observer.inView ? "show" : "hidden"}
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
      }
    </IntersectionObserver>
  )
}

export default imageTextBox;
