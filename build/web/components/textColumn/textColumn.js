import BlockContent from '@sanity/block-content-to-react';
import { useInView } from 'react-intersection-observer';
import { slideX } from '../../util/animation';
import styles from './textColumn.module.css';
import { motion } from 'framer-motion';
import React from 'react';

  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }

  const textColumn = ({ textContent }) => {

  const [ref, inView ] = useInView({ threshold: 0.6, triggerOnce: true })



  return (
    <motion.div className={styles.textColumn} ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} exit="hidden" variants={slideX(-100)}>
      {textContent.useTitle ? <h4>{textContent.title}</h4> : null}
      {
        textContent.columns.map(column => (
          <BlockContent
            renderContainerOnSingleChild={true}
            blocks={column.column}
            serializers={serializers}
            key={column._key}
          />
        ))
      }
    </motion.div>
  )
}

export default textColumn;