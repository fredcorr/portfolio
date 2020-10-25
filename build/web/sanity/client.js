import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client';

const options = {
  projectId: '0uoocft7',
  dataset: "production"
}

export const client = sanityClient({
  ...options,
  useCdn: true
})

export const previewClient = sanityClient({
  ...options,
  withCredentials: true,
  token: process.env.SANITY_API_TOKEN,
  preview: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
