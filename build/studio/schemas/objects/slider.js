export default {
    title: 'Slider',
    name: 'slider',
    type: 'object',
    fields: [
        {
            title: 'Images',
            name: 'slider_images',
            description: 'Add images to the slider',
            type: 'array',
            of: [
                { type: 'img'}
            ]
        }
    ],
    preview: {
        select: {  
          media: 'slider_images.0.asset',
        },
        prepare({ media }) {
          return {
            title: 'Slider',
            media
          }
        }
      }
  }
  