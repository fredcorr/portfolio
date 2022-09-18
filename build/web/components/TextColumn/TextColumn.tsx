import IntersectionObserver from '../../util/intersectionObserver'
import TextBlock from '../TextBlock/TextBlock'
import { scaleUp } from '../../util/animation'
import styles from './TextColumn.module.css'
import { motion } from 'framer-motion'
import React from 'react'

const textColumn = ({ textContent }: any) => {
  let isSingle = textContent.columns.length === 1 ? styles.oneColumn : null

  return (
    <IntersectionObserver threshold={0.5}>
      {(observer: any) => (
        <motion.div
          className={[styles.textColumn, isSingle].join(' ')}
          ref={observer.ref}
          initial="hidden"
          animate={observer.inView ? 'show' : 'hidden'}
          exit="hidden"
          variants={scaleUp}
        >
          {textContent.useTitle ? <h4>{textContent.title}</h4> : null}
          {textContent.columns.map((column: any) => (
            <TextBlock content={column.column} key={column._key} />
          ))}
        </motion.div>
      )}
    </IntersectionObserver>
  )
}

export default textColumn
