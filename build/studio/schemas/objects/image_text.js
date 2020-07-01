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
      type: 'image'
    },
    {
      title: 'Is it reverse',
      name: 'isReverse',
      type: 'boolean'
    }
  ]
}
