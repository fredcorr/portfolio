import styles from './Button.module.css';
import { motion } from 'framer-motion';
import React from 'react';


const button = (props: any) => (
  <motion.a
    style={{ margin: props.margin }}
    variants={ props.variants }
    className={ styles.button}
    rel="noopener noreferrer" 
    animate={ props.animate }
    initial={ props.initial }
    exit={ props.exit }
    href={ props.link }
    target='_blank'
    download >
       { props.children }
  </motion.a>
);

export default button;
