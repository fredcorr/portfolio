import { useRouter } from 'next/router'
import { Seo } from '_types/sanity'
import Head from 'next/head'
import React from 'react'

export interface SeoProps {
  og_image: string
  title: string
  metas: Seo
}

const Seo = ({ metas, title, og_image }: SeoProps) => {
  const { asPath } = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metas.description} />
      <meta
        name="keywords"
        content={metas.keywords ? metas.keywords.join(', ') : ''}
      />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={og_image} />
      <meta property="og:url" content={process.env.CANONICAL_URL + asPath} />
      <meta property="og:description" content={metas.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={metas.description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@FedericoCorra16" />
      <meta name="twitter:image" content={og_image} />
    </Head>
  )
}

export default Seo
