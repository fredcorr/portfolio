import styles from './TwoColumnTitle.module.css';
import React from 'react';

const twoColumnTitle = (props) => (
  <div className={ styles.TwoColumnTitle }>
    <h4>{ props.title }</h4>
    <p dangerouslySetInnerHTML={{ __html: props.columnOne }}></p>
    <p dangerouslySetInnerHTML={{ __html: props.columnTwo }}></p>
  </div>
)

export default twoColumnTitle;
