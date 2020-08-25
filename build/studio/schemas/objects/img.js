export default {
    title: 'Captioned Image',
    name: 'img',
    type: 'image',
    fields: [
      {
        title: 'Alternative text',
        name: 'altTag',
        type: 'string',
        options: {
            isHighlighted: true,
            metadata: ['lqip']
        }
      }
    ]
  }