import styles from './NextProject.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NextProject = ({ prev, next }: any) => {
  const { width, height } = next.cover.asset.metadata.dimensions

  return (
    <section className={styles.NextProject}>
      <div className={styles.featureImage}>
        <Image
          src={next.cover.asset.url}
          layout="responsive"
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={next.cover.asset.metadata.lqip}
        />
      </div>
      <Link href={prev.slug}>
        <a className={styles.projectTitle}>
          <p>{prev.date}</p>
          <h3>{prev.title}</h3>
        </a>
      </Link>
      <Link href={next.slug}>
        <a className={styles.projectTitle}>
          <p>{next.date}</p>
          <h3>{next.title}</h3>
        </a>
      </Link>
    </section>
  )
}

export default NextProject
