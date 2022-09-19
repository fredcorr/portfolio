import IntersectionObserver from '_utils/intersectionObserver'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { TextComponent } from '_types/sanity'
import styles from './TextColumn.module.css'
import { scaleUp } from '_utils/animation'
import { motion } from 'framer-motion'
import React from 'react'

const TextColumn = ({ columns, title, useTitle }: TextComponent) => {
  let isSingle = columns.length === 1 ? styles.oneColumn : null

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
          {useTitle ? <h4>{title}</h4> : null}
          {columns.map((column: any) => (
            <TextBlock content={column.column} key={column._key} />
          ))}
        </motion.div>
      )}
    </IntersectionObserver>
  )
}

export default TextColumn
