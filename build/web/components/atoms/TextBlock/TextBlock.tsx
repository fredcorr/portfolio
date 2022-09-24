import BlockContent, { BlockContentProps } from '@sanity/block-content-to-react'
import { BlockContentNodeBase } from '_types/sanity'
import React from 'react'
export interface TextBlockProps {
  content: BlockContentProps
  isWrapped?: boolean
}

const serializers = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const TextBlock = ({ content, isWrapped = true }: TextBlockProps) => (
  <BlockContent
    renderContainerOnSingleChild={isWrapped}
    serializers={serializers}
    blocks={content}
  />
)

export default TextBlock
