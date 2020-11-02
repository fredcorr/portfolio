export default {
  title: 'Image with Text',
  name: 'image_text',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Body',
      name: 'body',
      description: 'Add body to the module',
      type: 'array',
      of: [ { type: 'block'} ]
    },
    {
      title: 'Image',
      name: 'image_cover',
      type: 'img'
    },
    {
      title: 'Is it reverse',
      name: 'isReverse',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image_cover',
      subtitle: 'isReverse'
    },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle
      };
    }
  }
  
}
