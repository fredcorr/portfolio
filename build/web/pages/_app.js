import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import App from 'next/app';
import React from 'react';
import './app.css';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Layout>
        <AnimatePresence>
          <Component { ...pageProps } key={ router.route }></Component>
        </AnimatePresence>
      </Layout>
    )
  }
}
export default MyApp
