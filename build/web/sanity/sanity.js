import { client, previewClient } from './client';

const getClient = (preview) => (preview ? previewClient : client)

export async function getAllCases( preview ) {
  return await getClient(preview).fetch( `*[_type == "projects"] | order(_createdAt asc ) {
    'slug': slug.current,
    cover,
    title,
    date,
  }`)
}

export async function getCaseStudy(slug, preview) {
    const currentPrj = await getClient(preview).fetch( `*[_type == "projects" && slug.current == "${ slug }"][0]{
        seo_details{
          ...,
          "og_image": og_image.asset->url
        },
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
        'slug': slug.current,
        cover,
        title,
        date,
      }` )
    
      return {
        ...currentPrj
      }
}

export async function getHome( preview ) {

  const query = `*[_type == "home"]{
    seo_details{
      ...,
      "og_image": og_image.asset->url
    },
    vimeo_profile,
    email,
    work_listing[]->{
      details,
      title,
      cover,
      date,
      slug,
      _id
    } ,
    page_title
  }`;

  return await getClient(preview).fetch(query).then( res => res[0] )

}


export async function getAbout( preview ) {
  const query = `*[_type == "about"]{
    profile_image{
      altTag,
      asset->{ url, metadata }
    },
    seo_details{
      ...,
      "og_image": og_image.asset->url
    },
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



