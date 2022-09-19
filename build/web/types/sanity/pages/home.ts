import { BlockContentProps } from "@sanity/block-content-to-react";
import { CMSPage, Image, Seo } from "_types/sanity";
import { ProjectsPage } from "./project";

export interface HomePage extends CMSPage {
  intro_copy: BlockContentProps
  work_listing: ProjectsPage[]
  featured_image: Image
  page_title: string
  seo_details: Seo
}