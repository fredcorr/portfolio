
export default {
  // This is the display name for the type
  title: "About",

  // The identifier for this document type used in the api's
  name: "about",

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  __experimental_actions: [/* create, delete, */ 'update', 'publish'],
  // Now we proceed to list the fields of our document
  fields: [
    {
      title: 'Page Title',
      name: 'page_title',
      description: 'Page title for SEO',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      title: 'Seo',
      name: 'seo_details',
      type: 'seo_details'
    },
    {
      title: 'Profile',
      name: 'profile_image',
      type: 'img'
    },
    {
      title: 'Job Title',
      name: 'job_title',
      type: 'string'
    },
    {
      title: 'Brief intro',
      name: 'brief_intro',
      description: 'A few words about my self',
      type: 'array',
      of: [ { type: 'block'} ]
    },
    {
      title: 'Skill Sets',
      name: 'skill_sets',
      description: 'Define Single skill set',
      type: 'array',
      of: [
        { type: 'skill_set' }
      ]
    },
    {
      title: 'Feature sites',
      name: 'feature_sites',
      description: 'Add sites you like',
      type: 'array',
      of: [
        { 
          title: 'Site Link',
          name: 'site_link',
          type: 'url'
        }
      ]
    },
    {
      title: 'Get in touch copy',
      name: 'contact_copy',
      description: 'Closing for the about page',
      type: 'array',
      of: [ { type: 'block'} ]
    },
    {
      title: 'CV Download',
      name: 'CV',
      type: 'file'
    },
    {
      title: 'Email',
      name: 'email',
      description: 'Insert email for work contact',
      type: 'string'
    },
  ]
}
