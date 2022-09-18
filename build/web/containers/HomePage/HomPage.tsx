import HomePannel from '../../components/HomePannel/HomePannel'
import TextBlock from '../../components/TextBlock/TextBlock'
import Alert from '../../components/UI/Alert/Alert'
import styles from './HomePage.module.css'
import Seo from '../../components/UI/Seo/Seo'
import { motion } from 'framer-motion'
import React from 'react'

const Home = (props: any) => {
  return (
    <motion.div
      className={styles.Home}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Seo
        metas={props.seo_details}
        title={props.page_title}
        path={'/'}
        og_image={props.featured_image}
      />
      <Alert preview={props.preview} />
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
          <TextBlock content={props.intro_copy} isWrapped={false} />
        </motion.div>
      </section>
      <section className={styles.workListing}>
        {props.work_listing.map((project: any) => (
          <HomePannel
            coverImg={project.cover}
            link={project.slug.current}
            details={project.details}
            title={project.title}
            date={project.date}
            key={project._id}
          />
        ))}
      </section>
    </motion.div>
  )
}

export default Home
