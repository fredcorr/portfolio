import React, { useEffect, useRef, useContext } from 'react';
import hoverElements from '../../../util/cursor-context'
import styles from './Cursor.module.css';

const cursor = (props) => {

    const cursor = useRef( null )
    const elms = useContext(hoverElements)

    useEffect(() => {

      if (!cursor.current) return;

        window.addEventListener( 'mousemove', (e) => {
            cursor.current.style.top = e.clientY - ( cursor.current.getBoundingClientRect().height / 2) + 'px';
            cursor.current.style.left = e.clientX - ( cursor.current.getBoundingClientRect().width / 2 ) + 'px';
        })

        window.addEventListener( 'mousedown', (e) => cursor.current.style.transform = 'scale(.7)' )
        window.addEventListener( 'mouseup', (e) => cursor.current.style.transform = 'scale(1)' )
        window.addEventListener( 'mouseout', (e) => cursor.current.style.opacity = 0 )
        window.addEventListener( 'mouseover', (e) => cursor.current.style.opacity = 1 )

        if( elms.link.length === 0 ) {
          elms.updateElems()
        }
        
        elms.link.map( link => (
          link.addEventListener( 'mouseover', (e) => cursor.current.style.transform = 'scale(1.2)' ) ,
          link.addEventListener( 'mouseout', (e) => cursor.current.style.transform = 'scale(1)' ) 
          )
        )

        return undefined 

      }, [ elms.link ]);

    return (<div className={ styles.cursor } ref={ cursor }>
      {/* <div className={ styles.cursor_inner }></div> */}
    </div>)

}

export default cursor;
