import BlockContent from '@sanity/block-content-to-react';
import styles from './textColumn.module.css';
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

const textColumn = props => (
  <div className={ styles.textColumn }>
    { props.textContent.useTitle ? <h4>{ props.textContent.title }</h4> : null}
    {
      props.textContent.columns.map( column => (
        <BlockContent
          renderContainerOnSingleChild={ true }
          blocks={ column.column } 
          serializers={serializers}
          key={ column._key }
          />
      ))
    }
  </div>
)

export default textColumn;