import Layout from '../components/Layout/Layout';
import App from 'next/app';
import React from 'react';
import './app.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component { ...pageProps }></Component>
  }
}
export default MyApp
