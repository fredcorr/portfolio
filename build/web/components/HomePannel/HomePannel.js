import styles from './HomePannel.module.css';
import React from 'react';
import Link from 'next/link';

const homePannel = React.forwardRef((props, ref) => {
  return (
      <Link href="/case-studies/[case-study]" as={"/case-studies/" + props.link } >
        <a id={ 'thumb_' + props.i } key={  props.i } style={{ opacity: props.i === 0 ? 1 : 0 }} className={ styles.thumb } ref={ ref }>
          <div className={ styles.codeLanguages }>
            <img src="../assets/images/html.svg" alt='HTML Language'/>
            <img src="../assets/images/css.svg" alt='Css Language' />
            <img src="../assets/images/react.svg" alt='React Framework'/>
          </div>
          <div className={ styles.title }>
            <p>{ props.date }</p>
            <h1 dangerouslySetInnerHTML={{ __html: props.title }}></h1>
          </div>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 220 220">
             <clipPath id="clip">
              <rect width="220" height="220"/>
             </clipPath>
             <rect width="220" height="220"/>
             <image xlinkHref="../assets/images/bplThumb.png" clipPath="url(#clip)"/>
          </svg>
        </a>
      </Link>
  )
})

export default homePannel;
