
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
      title: 'Seo',
      name: 'seo_details',
      type: 'seo_details'
    },
    {
      title: 'Brief intro',
      name: 'brief_intro',
      description: 'A few words about my self',
      type: 'string'
    },
    {
      title: 'Creative process',
      name: 'creative_process',
      description: 'Describe the steps in your creative process',
      type: 'array',
      of: [
        { type: 'creative_step' }
      ]
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
      title: 'CV Download',
      name: 'CV',
      type: 'file'
    }
  ]
}
