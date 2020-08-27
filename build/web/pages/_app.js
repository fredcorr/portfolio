import Cursor from '../components/UI/Cursor/Cursor';
import hoverElements from '../util/cursor-context';
import Layout from '../components/Layout/Layout';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import App from 'next/app';
import React from 'react';
import './app.css';

class MyApp extends App {

  componentDidUpdate() {
    this.context.updateElems();
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Layout>
        <Cursor />
        <AnimatePresence exitBeforeEnter onExitComplete={ () => window.scrollTo( 0, 0) }>
          <Component { ...pageProps } key={ router.route }></Component>
        </AnimatePresence>
      </Layout>
    )
  }
}

MyApp.contextType = hoverElements;

export default MyApp
