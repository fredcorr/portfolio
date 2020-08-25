import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client';

const projectId = '0uoocft7';
const dataset = 'production';

const client = sanityClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: false
})

const builder = imageUrlBuilder(client)

const urlFor = (source) => {
  return builder.image(source)
}

export { client, urlFor};
