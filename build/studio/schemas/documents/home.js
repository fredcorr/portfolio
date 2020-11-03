
export default {
  title: "Home",
  name: "home",
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
      title: 'Intro',
      name: 'intro_copy',
      description: 'Opening for the whole site',
      type: 'array',
      of: [ { type: 'block'} ]
    },
    {
      title: 'Featured Image',
      name: 'featured_image',
      description: 'Image for social and share posts',
      type: 'img'
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
   }
  ]
}
