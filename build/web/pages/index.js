import HomePannel from '../components/HomePannel/HomePannel';
import { client, urlFor } from '../client';
import { useRouter } from 'next/router';
import Seo from '../components/UI/Seo';
import { motion } from 'framer-motion';
import styles from './home.module.css';
import React from 'react';

const Home = props => {

  return (
    <motion.div className={ styles.Home } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
      <Seo metas={ props.seo_details } title={ props.page_title } path={ useRouter().asPath }/>
      <section className={ styles.intro }>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>Ui Designer<br/>Developer</motion.h1>
          <motion.p  initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</motion.p>
      </section>
      <section className={ styles.workListing } >
            {
              props.work_listing.map( project => (
                <HomePannel
                  coverImg={ urlFor(project.cover) }
                  link={ project.slug.current }
                  details={ project.details }
                  title={ project.title }
                  date={ project.date }
                  key={ project._id }
                />
              ))
            }
      </section>
    </motion.div>
  )
}

Home.getInitialProps = async function (context) {
  const query = `*[_type == "home"]{
    seo_details{
      ...,
      "og_image": og_image.asset->url
    },
    vimeo_profile,
    email,
    work_listing[]->{
      details,
      title,
      cover,
      date,
      slug,
      _id
    } ,
    page_title
  }`;

  return await client.fetch(query).then( res => res[0] )
}

export default Home;
