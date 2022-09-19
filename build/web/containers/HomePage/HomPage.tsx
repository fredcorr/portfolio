import HomePannel from '_organism/HomePannel/HomePannel'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { HomePage } from '_types/sanity/pages'
import styles from './HomePage.module.css'
import { motion } from 'framer-motion'
import Alert from '_atoms/Alert/Alert'
import Seo from '_atoms/Seo/Seo'
import React from 'react'

const Home = ({
  featured_image,
  work_listing,
  seo_details,
  page_title,
  intro_copy,
}: HomePage) => {
  return (
    <motion.div
      className={styles.Home}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Seo
        metas={seo_details}
        title={page_title}
        path={'/'}
        og_image={featured_image}
      />
      <section className={styles.intro}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          Ui Designer
          <br />
          Developer
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <TextBlock content={intro_copy} isWrapped={false} />
        </motion.div>
      </section>
      <section className={styles.workListing}>
        {work_listing.map((prj) => (
          <HomePannel {...prj} key={prj._id} />
        ))}
      </section>
    </motion.div>
  )
}

export default Home
