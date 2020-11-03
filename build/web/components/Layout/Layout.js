import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";
import React, { useEffect, useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import styles from './Layout.module.css';

const layout = (props) => {

  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform( scrollYProgress, [0, 0.9], [0, 1] );
  const pathLength = useSpring(yRange, { stiffness: 100, damping: 90 });

  useEffect( () => yRange.onChange( v => setIsComplete(v >= 1) ) , [yRange] );

  return (

    <React.Fragment>
      <Toolbar />
      <svg className={ styles.tracker } viewBox="0 0 24 437" >
        <motion.path fill="#45A29E" d="M12,418c5.5,0,10,4.3,10,9.5s-4.5,9.5-10,9.5s-10-4.3-10-9.5S6.5,418,12,418z" animate={{ scale: isComplete ? 1 : 0 }} initial={ false }/>
        <motion.path 
          style={{ pathLength, scaleX: -1 }}
          strokeDasharray="0 1"
          d="M11.8,39.3v360.4"
          stroke="#45A29E"
          strokeWidth="1"
          fill="none" />
        <motion.path 
          d="M12,2c5.5,0,10,4.3,10,9.5S17.5,21,12,21S2,16.7,2,11.5S6.5,2,12,2z"
          stroke="#45A29E"
          strokeWidth="1"
          fill="none" />
      </svg>
      <main className={styles.main}>
        { props.children}
      </main>
      <footer>
        <div>
          <a href={ 'mailto:corradi.federico.91@gmail.com' }>Get in touch</a>
          <a href={ '#' }>Behance - </a>
          <a href={ '#' }>Vimeo - </a>
          <a href={ '#' }>Instagram - </a>
          <a href={ '#' }>Linkedin - </a>
          <a href={ '#' }>Twitter</a>
        </div>
        <div>
          <p>96 Agar Grove, NW1 TL, London, United Kingdom</p>
          <p>{"© Federico Corradi " + new Date().getFullYear() }</p>
        </div>
      </footer>
    </React.Fragment>
  )

} 

export default layout;
