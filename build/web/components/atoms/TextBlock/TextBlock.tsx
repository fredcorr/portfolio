import BlockContent from '@sanity/block-content-to-react'
import React from 'react'

const serializers = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const TextBlock = ({ content, isWrapped = true }: any) => (
  <BlockContent
    renderContainerOnSingleChild={isWrapped}
    serializers={serializers}
    blocks={content}
  />
)

export default TextBlock
