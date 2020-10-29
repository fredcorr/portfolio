import { IntersectionContext } from '../../util/intersectionObserver';
import intersectionObserver from '../../util/intersectionObserver';
import TextBlock from '../textBlock/textBlock';
import { slideX } from '../../util/animation';
import styles from './textColumn.module.css';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';

const textColumn = ({ textContent }) => {

  return (


        <motion.div className={styles.textColumn} ref={ observer.ref } initial="hidden" animate={inView ? "show" : "hidden"} exit="hidden" variants={slideX(-100)}>
          {textContent.useTitle ? <h4>{textContent.title}</h4> : null}
          { textContent.columns.map(column => <TextBlock content={ column.column } key={column._key} /> ) }
        </motion.div>
  )
}

export default textColumn;