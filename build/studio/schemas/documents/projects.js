
export default {
  // This is the display name for the type
  title: "Projects",

  // The identifier for this document type used in the api's
  name: "projects",

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Now we proceed to list the fields of our document
  fields: [
    // This document has only one field
    {
      // The display name for this field
      title: "Title",

      // The identifier for this field used in the api's
      name: "title",

      // The type of this field
      type: "string",
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
      title: "Image",
      name: "cover",
      type: "image",
    },
    {
      title: "Content",
      name: "content",
      type: 'array',

      of: [
      {type: 'image_text'},
      {type: 'single_column'}
     ]

    }
  ]
}
