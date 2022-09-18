import styles from './DotNav.module.css'
import React from 'react'

const DotNav = (props: any) => {
  return (
    <div className={styles.dotNav}>
      {props.thumbs.map((thumb: any, i: number) => (
        <div
          className={props.activeDot === i ? styles.active : ''}
          onClick={() => {
            props.setPage([i, 0]), props.setActiveBullet(i)
          }}
          key={thumb._id}
          id={`${i}`}
        ></div>
      ))}
    </div>
  )
}

export default DotNav
