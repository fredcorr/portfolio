import { BlockContentProps } from "@sanity/block-content-to-react";
import { SkillSetProps } from '_molecules/SkillSet/SkillSet'
import { CMSPage, Seo, Image } from "_types/sanity";
import { MetaScraper } from "_types/local";

export interface AboutPage extends CMSPage {
  page_title: string
  seo_details: Seo
  profile_image: {
    altTag: string
    asset: Image
  }
  job_title: string
  brief_intro: BlockContentProps
  skill_sets: SkillSetProps[]
  feature_sites: string[]
  contact_copy: BlockContentProps
  scrapedSites: MetaScraper[]
  email: string
  CV: string
}