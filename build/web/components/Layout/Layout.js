import Toolbar from '../Toolbar/Toolbar';
import styles from './Layout.module.css';
import React from 'react';

const layout = (props) => (

  <React.Fragment>
    <Toolbar />
    <main className={styles.main}>
      {props.children}
    </main>
  </React.Fragment>
)

export default layout;
