
export default {
  // This is the display name for the type
  title: "Home",

  // The identifier for this document type used in the api's
  name: "home",

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
      title: 'Work Listing',
      name: 'work_listing',
      description: 'Select projects to display on main page',
      type: "array",
      of: [{
        type: 'reference',
        to: [ {type: 'projects'} ]
      }]
   },
   {
     title: 'Email',
     name: 'email',
     description: 'Insert email for work contact',
     type: 'string'
   },
   {
     title: 'Vimeo',
     name: 'vimeo_profile',
     description: 'Insert Vimeo porfile',
     type: 'string'
   },
   {
    title: 'Instagram',
    name: 'insta_profile',
    description: 'Insert Insta porfile',
    type: 'string'
    },
    {
      title: 'Linkedin',
      name: 'link_profile',
      description: 'Insert Linkedin porfile',
      type: 'string'
    }
  ]
}
