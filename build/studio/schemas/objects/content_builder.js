export default {
    title: 'Content',
    name: 'content',
    type: 'object',
    fields: [
      {
        title: 'Hero img',
        name: 'hero_img',
        type: 'image'
      },
      {
        title: 'Modules',
        name: 'modules',
        type: 'array',

        of: [
            {type: 'image_text'},
            {type: 'text_module'},
            {type: 'slider'},
            { type: 'image', 
              options: {
                metadata: ['lqip']
              } 
            } 
           ]
      }
    ]
  }
  