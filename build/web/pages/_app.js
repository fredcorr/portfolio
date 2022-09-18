import Layout from '../components/Layout/Layout';
import App from 'next/app';
import React from 'react';
import './app.css';

class MyApp extends App {

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Layout>
        <Component { ...pageProps } key={ router.asPath }></Component>
      </Layout>
    )
  }

}

export default MyApp
