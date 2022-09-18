export const allPages = `*[ 
  _type == 'projects' || 
  _type == 'home' || 
  _type == 'about'
]{
  _id,
  slug
}`

export const page = (slug: string[]) => `*[slug.current == '${slug.join('/')}'] | order(_updatedAt asc)[0] {
  _type == 'projects' => {
    ${Project}
  },
  _type == 'about' => {
    ${About}
  },
  _type == 'home' => {
    ${Home}
  },
  _type
}`

export const Home = `
  "featured_image": featured_image.asset-> url,
  seo_details,
  vimeo_profile,
  intro_copy,
  email,
  work_listing[]->{
    details,
    title,
    "cover": cover.asset-> url,
    date,
    slug,
    _id
  } ,
  page_title
`

export const Project = `
  seo_details,
  content{
    "hero_img": hero_img.asset->{ url, metadata },
    modules[]{
      ...,
      slider_images[]{
        "asset": asset->{ url, metadata }
      },
      image_cover{
        "asset": asset->{ url, metadata }
      },
      "asset": asset->{ url, metadata }
    }
  },
  project_link,
  slug,
  "cover": cover.asset->{ url, metadata },
  title,
  date,
`

const About = `
  profile_image{
    altTag,
    asset->{ url, metadata }
  },
  seo_details,
  page_title,
  brief_intro,
  job_title,
  feature_sites,
  skill_sets,
  contact_copy,
  "CV": CV.asset->url,
  email
`

// export async function getCaseStudy(slug: string, preview: boolean) {
//     const currentPrj = await getClient(preview).fetch( `*[_type == "projects" && slug.current == "${ slug }"][0]{
//         seo_details,
//         content{
//           "hero_img": hero_img.asset->{ url, metadata },
//           modules[]{
//             ...,
//             slider_images[]{
//               "asset": asset->{ url, metadata }
//             },
//             image_cover{
//               "asset": asset->{ url, metadata }
//             },
//             "asset": asset->{ url, metadata }
//           }
//         },
//         project_link,
//         slug,
//         "cover": cover.asset->{ url, metadata },
//         title,
//         date,
//       }` )
    
//       const allPrj = await getAllCases( preview )
    
    
//       const index = allPrj.map((prj: any) => { return prj.slug }).indexOf(slug)
    
//       return {
//         ...currentPrj,
//         next: {...allPrj[ index === allPrj.length - 1 ? 0 : index + 1 ]},
//         previous: {...allPrj[ index === 0 ? allPrj.length - 1 : index - 1 ]},
//       }
// }