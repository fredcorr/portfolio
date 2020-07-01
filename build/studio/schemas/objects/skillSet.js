export default {
    title: 'Skill Set',
    name: 'skill_set',
    type: 'object',
    fields: [
      {
        title: 'Skills type',
        description: 'Name type of skill set',
        name: 'skills_type',
        type: 'string'
      },
      {
        title: 'Skills description',
        description: 'Describe skill set',
        name: 'skills_description',
        type: 'string'
      },
      {
        title: 'Skills listing',
        name: 'skills_listing',
        description: 'Add skills to whole skill set',
        type: 'array',
        of: [
          { type: 'skill' }
        ]
      }
    ]
  }
  