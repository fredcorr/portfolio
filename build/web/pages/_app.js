import Cursor from '../components/UI/Cursor/Cursor';
import hoverElements from '../util/cursor-context';
import Layout from '../components/Layout/Layout';
import { PageTransition } from 'next-page-transitions'
import App from 'next/app';
import React from 'react';
import './app.css';

class MyApp extends App {

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Layout>
        <Cursor />
          <PageTransition timeout={ 1000 } classNames={"page-transition"}>
            <Component { ...pageProps } key={ router.asPath }></Component>
          </PageTransition>
      </Layout>
    )
  }
}

export default MyApp
