import {
  PageTypeNames,
  Components,
  CMSPage,
  Image,
  Seo,
} from '_types/sanity'
export interface ProjectsPage extends CMSPage {
  _type: PageTypeNames.PROJECT
  cover: Image
  project_link: string
  seo_details: Seo
  details?: string
  date?: number
  content: {
    hero_img: Image
    modules: Components[]
  }
}
