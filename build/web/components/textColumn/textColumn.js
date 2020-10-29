import IntersectionObserver from '../../util/intersectionObserver';
import TextBlock from '../textBlock/textBlock';
import { slideX } from '../../util/animation';
import styles from './textColumn.module.css';
import { motion } from 'framer-motion';
import React from 'react';

const textColumn = ({ textContent }) => {

  return (
    <IntersectionObserver>
      {
        observer => 
        <motion.div className={styles.textColumn} ref={ observer.ref } initial="hidden" animate={observer.inView ? "show" : "hidden"} exit="hidden" variants={slideX(-100)}>
          {textContent.useTitle ? <h4>{textContent.title}</h4> : null}
          { textContent.columns.map(column => <TextBlock content={ column.column } key={column._key} /> ) }
        </motion.div>
      }
    </IntersectionObserver>
  )
}

export default textColumn;