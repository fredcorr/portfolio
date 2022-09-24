import { BlockContentProps } from "@sanity/block-content-to-react";
import { CMSPage, Seo, ImageComponent } from "_types/sanity";
import { SkillSetProps } from '_molecules/SkillSet/SkillSet'
import { MetaScraper } from "_types/local";

export interface AboutPage extends CMSPage {
  page_title: string
  seo_details: Seo
  profile_image: ImageComponent
  job_title: string
  brief_intro: BlockContentProps
  skill_sets: SkillSetProps[]
  feature_sites: string[]
  contact_copy: BlockContentProps
  scrapedSites: MetaScraper[]
  email: string
  CV: string
}