import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '0uoocft7',
  dataset: 'production',
  useCdn: false
})

 export default client;