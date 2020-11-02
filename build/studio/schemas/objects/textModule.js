import { BsTextareaT } from 'react-icons/bs';

export default {
    title: 'Text module',
    name: 'text_module',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            description: 'Add a title to section',
            type: 'string'
        },
        {
            title: 'Columns',
            name: 'columns',
            description: 'Add body to the module',
            type: 'array',
            of: [ { type: 'text_column'}]
        },
        {
            title: 'Should title be inccluded',
            name: 'useTitle',
            type: 'boolean'
          }
    ],
    preview: {
        select: {  
          title: 'title',
          subtitle: 'columns.0.column.0.children.0.text'
        },
        prepare({ title, subtitle }) {
            
          return {
            title,
            subtitle
          }
        }
      }
  }