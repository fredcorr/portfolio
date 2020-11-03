export default {
    title: "Settings",
    name: "settings",
    type: "document",
    fields: [
      {
        title: 'Socials',
        name: 'socials',
        description: 'Link to social profiles',
        type: 'array',
        of: [
            { type: 'object', fields: [
                {
                    title: 'Social Name',
                    name: 'social',
                    description: 'Type of social',
                    type: 'string'
                },
                {
                    title: 'Social URL',
                    name: 'socialUrl',
                    description: 'Link to social',
                    type: 'url'
                  },
            ] }
        ]
      },
      {
        title: 'Email',
        name: 'email',
        description: 'Email for enquiries',
        type: 'email'
      },
      {
        title: 'Address',
        name: 'location',
        description: 'Your address',
        type: 'string'
      },
    ],
    preview: {
        prepare() {
          return {
            title: 'Settings'
          }
        }
      }
  }
  