export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fredcorr/portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fredcorr.com/', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['projects']},
      layout: {width: 'medium'}
    }
  ]
}
