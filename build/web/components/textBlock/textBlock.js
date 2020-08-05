import BlockContent from '@sanity/block-content-to-react';
import React from 'react';

const serializers = {
   types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }


const TextBlock = ({ content, isWrapped = true }) => (
  <BlockContent
    renderContainerOnSingleChild={ isWrapped }
    serializers={ serializers }
    blocks={ content }
  />
)

export default TextBlock;
