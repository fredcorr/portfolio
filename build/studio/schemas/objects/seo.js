export default {
    type: 'object',
    title: 'SEO',
    name: 'seo_details',
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [
      {
        title: 'Description',
        name: 'description',
        type: 'string'
      },
      {
        title: 'Key words',
        name: 'keywords',
        type: 'array',
        of: [
            {type: 'string' }
        ],
        options: {
          layout: 'tags'
        }
      }
    ]
  }