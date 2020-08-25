import styles from './Toolbar.module.css';
import Logo from '../UI/Logo/Logo';
import Link from 'next/link';
import React from 'react';

const toolBar = (props) => (
  <header>
    <Link href='/' >
      <a className={styles.logoContainer}>
        <Logo logo={ '/assets/images/logo.svg' } passedStyle={ styles.desktopLogo } />
      </a>
    </Link>
    <Link href='/about'>
      <a className={styles.aboutLink}>ABOUT</a>
    </Link>
  </header>
)

export default toolBar;
