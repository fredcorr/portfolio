export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eecfeaef9fbb82bbd4f9aaa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-at4px7g2',
                  apiId: '9ede7d97-2c62-42b3-904a-26fce3135cb7'
                },
                {
                  buildHookId: '5eecfeae152a0c2cc9afd531',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-82qvec5j',
                  apiId: '5d318aa9-8e1f-40c2-a100-76e58845aa36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fredcorr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-82qvec5j.netlify.app', category: 'apps'}
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
