import { CMSPage, PageTypeNames, Seo, Image, Components } from "_types/sanity";

export type ProjectsComponents = ''

export interface ProjectsPage extends CMSPage {
  _type: PageTypeNames.PROJECT
  project_link: string
  seo_details: Seo,
  details?: string
  cover: Image
  date?: number
  content: {
    hero_img: Image,
    modules: Components[]
  }
}