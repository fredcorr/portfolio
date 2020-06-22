import styles from './TwoColumn.module.css';
import React from 'react';

const twoColumn = (props) => (
  <div className={ styles.TwoColumn }>
    <p dangerouslySetInnerHTML={{ __html: props.columnOne }}></p>
    <p dangerouslySetInnerHTML={{ __html: props.columnTwo }}></p>
  </div>
)

export default twoColumn;
