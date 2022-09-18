import { PageType, CMSPage, PageTypeNames } from '_types/sanity'
import RenderContainer from '_hoc/RenderContainer'
import type { GetStaticPropsContext } from 'next'
import { page, allPages } from '_lib/queries'
import { MetaScraper } from '_types/local'
import getMetaData from 'metadata-scraper'
import { getClient } from '_lib/sanity'

const Page = (props: PageType) => {
  return <RenderContainer {...props} />
}

export async function getStaticProps({
  preview = false,
  params,
}: GetStaticPropsContext) {
  const slug = (params?.slug as string[]) || ['/']
  const props = await getClient(preview).fetch(page(slug))
  let parsedSites: MetaScraper[] = []

  if (props._type === PageTypeNames.ABOUT) {
    const feature_sites = props.feature_sites.map(
      async (site: any) => await getMetaData(site)
    )
    const scraperResults: MetaScraper[]  = await Promise.all(feature_sites).then((data) => data)
    parsedSites = scraperResults.map(({ title, description, url, image }) => ({title, description, url, image}))
  }

  return {
    props: {
      ...props,
      ...(!!parsedSites.length && { scrapedSites: parsedSites }),
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient(false)
    .fetch(allPages)
    .then((res) =>
      res.map((path: CMSPage) => {
        return {
          params: {
            slug: path.slug.current.split('/'),
            id: path._id,
          },
        }
      })
    )

  return {
    paths,
    fallback: 'blocking',
  }
}

export default Page
