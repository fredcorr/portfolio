import { client, previewClient } from './client';

export const getClient = (preview) => (preview ? previewClient : client)

export async function getAllCases( preview ) {
  return await getClient(preview).fetch( `*[_type == "projects"] | order(_createdAt asc ) {
    'slug': slug.current,
    "cover": cover.asset->{ url, metadata },
    title,
    date,
  }`)
}

export async function getCaseStudy(slug, preview) {
    const currentPrj = await getClient(preview).fetch( `*[_type == "projects" && slug.current == "${ slug }"][0]{
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
      }` )
    
      const allPrj = await getAllCases( preview )
    
    
      const index = allPrj.map(prj => { return prj.slug }).indexOf(slug)
    
      return {
        ...currentPrj,
        next: {...allPrj[ index === allPrj.length - 1 ? 0 : index + 1 ]},
        previous: {...allPrj[ index === 0 ? allPrj.length - 1 : index - 1 ]},
      }
}

export async function getHome( preview ) {

  const query = `*[_type == "home"]{
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
  }`;

  return await getClient(preview).fetch(query).then( res => res[0] )

}


export async function getAbout( preview ) {
  const query = `*[_type == "about" ]{
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
  }`;

  return await getClient(preview).fetch(query).then( res => res[0] )
}



