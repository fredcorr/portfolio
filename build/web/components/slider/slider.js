import ProgressiveImages from '../ProgressiveImage/ProgressiveImage';
import IntersectionObserver from '../../util/intersectionObserver';
import { scaleUp } from '../../util/animation';
import React from 'react';
import styles from './slider.module.css';
import { TweenMax, Power4 } from 'gsap';
import { motion } from 'framer-motion';

const Slider = (props) => {

  const sliderInner = React.createRef(null);
  let arrayDots = [];
  let imagesRef = [];
  let imageCount = 0;

  const calculateDistWindow = (el) => {
    let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollRight = window.pageXOffset || document.documentElement.scrollRight;
    return { right: rect.right + scrollRight, left: rect.left + scrollLeft }
  }

  const calculateAmountRange = ( endPoint ) => {
    let amoutInPixel = calculateDistWindow( imagesRef[ endPoint ] ).left - ( ( window.innerWidth - imagesRef[ endPoint ].clientWidth ) / 2 ) ;
    return Math.abs( ( (amoutInPixel / window.innerWidth ) * 100) );
  }

  const slideAimation = ( direction, startPoint, endPoint, onStart ) => {
    let amount = calculateAmountRange( endPoint )
    let range = Math.abs( startPoint - endPoint );
    let divider = range > 3 ? 3 : 1 ;
    TweenMax.to( arrayDots[ imageCount ].parentNode.children, 1, { scale: 0.5 })
    TweenMax.to( sliderInner.current, ( range / divider ), { x: direction + amount + '%', ease: Power4.InOut, onStart: () => onStart } )
    TweenMax.to( arrayDots[ endPoint ], 1, { scale: 1 })
  }

  // MOVE TO NEXT SLIDE
  const toggleImage = ( direction ) => {

    if ( typeof direction !== 'object' ) {
      switch ( true ) {
        case imageCount === imagesRef.length - 1 && direction === '-=':
            slideAimation( '+=', imageCount, 0, imageCount = 0 );
          break;
        case imageCount === 0  && direction === '+=':
            slideAimation( '-=', imageCount, imagesRef.length - 1, imageCount = imagesRef.length - 1 );
          break;
        case imageCount <= imagesRef.length - 1 && direction === '+=' :
            slideAimation( direction, imageCount, imageCount - 1, imageCount -= 1 )
          break;
        case imageCount <= imagesRef.length - 1 && direction === '-=' :
            // NEXT BUTTON ACTION
            slideAimation( direction, imageCount, imageCount + 1, imageCount += 1 )
          break;
        default:
      }

    } else {
      let dot = arrayDots.indexOf( direction.target )
      switch (true) {
        case dot >= imageCount:
            slideAimation( '-=', imageCount, dot, imageCount = dot )
          break;
        case dot <= imageCount:
            slideAimation( '+=', imageCount, dot, imageCount = dot )
          break;
        default:
      }
    }

  }

  return(

    <IntersectionObserver threshold={ 0.6 }>
      {
        observer => 
          <motion.div className={ styles.Slider } ref={ observer.ref } initial="hidden" animate={ observer.inView ? "show" : "hidden"} variants={scaleUp}>
            <button className={ styles.prev } onClick={ ( e ) => toggleImage( '+=' ) }></button>
            <div className={styles.sliderContainer}>
              <div className={styles.sliderInner} ref={ sliderInner }>
                {
                  props.images.map( (image, i ) => (
                    <div 
                      ref={image => imagesRef[i] = image}
                      className={ styles.images }
                      key={ i }>
                        <ProgressiveImages image={ image.asset } />
                    </div>
                  ))
                }
              </div>
            </div>
            <button className={ styles.next } onClick={ ( e ) => toggleImage( '-=' ) } ></button>
            <ul className={ styles.dotNav } >
              {
                props.images.map( ( image, b ) => {
                  return <li key={b} onClick={ ( e ) => toggleImage( e ) } ref={ dot => arrayDots[b] = dot }></li>;
                })
              }
            </ul>
          </motion.div>
      }
    </IntersectionObserver>
  )
  
}

export default Slider;
