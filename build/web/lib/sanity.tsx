import { createClient } from 'next-sanity'

const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: 'v1',
}

export const sanityClient = createClient(sanityConfig)

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient
