import styles from './OneColumnTitle.module.css';
import React from 'react';

const oneColumnTitle = (props) => (
  <div className={ styles.TwoColumnTitle }>
    <h4>{ props.title }</h4>
    <p dangerouslySetInnerHTML={{ __html: props.paragraph }}></p>
  </div>
)

export default oneColumnTitle;
