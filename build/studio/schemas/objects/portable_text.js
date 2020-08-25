export default {
    title: 'Text column',
    name: 'text_column',
    type: 'object',
    fields: [
      {
        title: 'column',
        name: 'column',
        type: 'array',
        of: [ { type: 'block'} ]
      }
    ]
}