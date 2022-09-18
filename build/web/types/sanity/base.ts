import { Image } from "./base-schemas";
import {
  ProjectsPage,
  AboutPage,
  HomePage,
} from './pages'

export interface CMSPage {
  _createdAt: string;
  _updatedAt: string;
  _type: string;
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export interface Seo {
  seoTitle: string
  seoDescription: string
  hideFromSearchEngine: boolean
}

export enum PageTypeNames {
  PROJECT = "projects",
  ABOUT = "about",
  HOME = "home",
}

export type PageType = ProjectsPage | AboutPage | HomePage;
