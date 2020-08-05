import { useInView } from 'react-intersection-observer';
import TextBlock from '../textBlock/textBlock';
import { slideX } from '../../util/animation';
import styles from './textColumn.module.css';
import { motion } from 'framer-motion';
import React from 'react';

  const textColumn = ({ textContent }) => {

  const [ref, inView ] = useInView({ threshold: 0.6, triggerOnce: true })



  return (
    <motion.div className={styles.textColumn} ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} exit="hidden" variants={slideX(-100)}>
      {textContent.useTitle ? <h4>{textContent.title}</h4> : null}
      {
        textContent.columns.map(column => <TextBlock content={ column.column } key={column._key} /> )
      }
    </motion.div>
  )
}

export default textColumn;