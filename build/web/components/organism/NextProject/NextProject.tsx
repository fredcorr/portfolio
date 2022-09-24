import { ProjectsPage } from '_types/sanity/pages'
import styles from './NextProject.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export interface NextProjectProps {
  next: ProjectsPage
  prev: ProjectsPage
}

const NextProject = ({ prev, next }: NextProjectProps) => {
  const { width, height } = next.cover.metadata.dimensions

  return (
    <section className={styles.NextProject}>
      <div className={styles.featureImage}>
        <Image
          src={next.cover.url}
          layout="responsive"
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={next.cover.metadata.lqip}
        />
      </div>
      <Link href={prev.slug.current}>
        <a className={styles.projectTitle}>
          <p>{prev.date}</p>
          <h3>{prev.title}</h3>
        </a>
      </Link>
      <Link href={next.slug.current}>
        <a className={styles.projectTitle}>
          <p>{next.date}</p>
          <h3>{next.title}</h3>
        </a>
      </Link>
    </section>
  )
}

export default NextProject
