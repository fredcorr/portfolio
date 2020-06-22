import styles from './Button.module.css';
import React from 'react';


const button = (props) => (
  <a href={ props.link } className={ styles.button} target='_blank' rel="noopener noreferrer" download style={{ margin: props.margin }}>{ props.children }</a>
);

export default button;
