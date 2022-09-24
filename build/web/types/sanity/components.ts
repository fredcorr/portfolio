import { BlockContentProps } from "@sanity/block-content-to-react"
import { Image } from "./base-schemas"

export enum ComponentsTypeName {
  IMAGE_TEXT = 'image_text',
  TEXT_MODULE = 'text_module',
  SLIDER = 'slider',
  IMAGE = 'img'
}

export interface ImageTextComponent {
  _type: ComponentsTypeName.IMAGE_TEXT
  body: BlockContentProps
  image_cover: ImageComponent
  isReverse: boolean
  title: string
}

export interface TextComponent {
  _type: ComponentsTypeName.TEXT_MODULE
  columns: BlockContentProps[]
  useTitle: boolean
  title: string
}

export interface ImageComponent {
  _type: ComponentsTypeName.IMAGE
  altTag: string
  asset: Image
}

export interface SliderComponent {
  _type: ComponentsTypeName.SLIDER
  slider_images: ImageComponent[]
}

export type Components = ImageTextComponent | TextComponent | ImageComponent | SliderComponent