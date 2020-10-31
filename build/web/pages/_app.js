import Cursor from '../components/UI/Cursor/Cursor';
import hoverElements from '../util/cursor-context';
import Layout from '../components/Layout/Layout';
import { AnimatePresence } from 'framer-motion';
import Router from "next/router";
import App from 'next/app';
import React from 'react';
import './app.css';

class MyApp extends App {

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Layout>
        <Cursor />
        <AnimatePresence exitBeforeEnter onExitComplete={ () => window.scrollTo( 0, 0) }>
          <Component { ...pageProps } key={ router.asPath }></Component>
        </AnimatePresence>
      </Layout>
    )
  }

}

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );

export default MyApp
