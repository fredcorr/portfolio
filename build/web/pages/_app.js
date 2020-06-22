import Layout from '../components/Layout/Layout';
import App from 'next/app';
import React from 'react';
import './app.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component { ...pageProps }></Component>
      </Layout>
    )
  }
}
export default MyApp
