
export default {
  title: "Projects",
  name: "projects",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    { 
      title: 'Site Link',
      name: 'project_link',
      type: 'url'
    },
    {
      title: 'Seo',
      name: 'seo_details',
      type: 'seo_details'
    },
    {
      title: "Date",
      name: "date",
      type: "number",
    },
    {
      title: "Details",
      name: "details",
      type: "string",
    },
    {
      title: "Image",
      name: "cover",
      type: "img"
    },
    {
      title: "Content",
      name: "content",
      type: 'content'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cover',
      subtitle: 'date'
    },
    prepare({ title, media, subtitle }) {
      return {
        title,
        subtitle,
        media,
      };
    }
  }
}
