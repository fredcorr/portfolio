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
    },
    {
      name: 'vercel',
      options: {
        deployLimit: 5,
        deployHook: 'https://api.vercel.com/v1/integrations/deploy/QmYfwDtfoUt22BU87vqF7WdyrxfvdvvLSJvrEEDKZ12YJp/DH79vEWa64',
        projectId: '3ffEO8mvsSC00D7AxDMU',
        token: 'GwyQo0KbmrIfvNd0XkpkHdpK',
      },
      layout: {
        width: 'large',
      },
    },
  ]
}
