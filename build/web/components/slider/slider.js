import ProgressiveImages from '../ProgressiveImage/ProgressiveImage';
import { Swipeable } from "react-swipeable";
import styles from './slider.module.css';
import React, { Component } from 'react';
import { TweenMax, Power4 } from 'gsap';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.sliderInner = React.createRef();
    this.arrayDots = [];
    this.imagesRef = [];
    this.imageCount = 0;
    this.state = {}
  }

  calculateDistWindow = (el) => {
    let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollRight = window.pageXOffset || document.documentElement.scrollRight;
    return { right: rect.right + scrollRight, left: rect.left + scrollLeft }
  }

  calculateAmountRange = ( endPoint ) => {
    let amoutInPixel = this.calculateDistWindow( this.imagesRef[ endPoint ] ).left - ( ( window.innerWidth - this.imagesRef[ endPoint ].clientWidth ) / 2 ) ;
    return Math.abs( ( (amoutInPixel / window.innerWidth ) * 100) );
  }

  slideAimation = ( direction, startPoint, endPoint, onStart ) => {
    let amount = this.calculateAmountRange( endPoint )
    let range = Math.abs( startPoint - endPoint );
    let divider = range > 3 ? 3 : 1 ;
    TweenMax.to( this.arrayDots[ this.imageCount ].parentNode.children, 1, { scale: 0.5 })
    TweenMax.to( this.sliderInner.current, ( range / divider ), { x: direction + amount + '%', ease: Power4.InOut, onStart: () => onStart } )
    TweenMax.to( this.arrayDots[ endPoint ], 1, { scale: 1 })
  }

  // MOVE TO NEXT SLIDE
  toggleImage = ( direction ) => {

    if ( typeof direction !== 'object' ) {
      switch ( true ) {
        case this.imageCount === this.imagesRef.length - 1 && direction === '-=':
            this.slideAimation( '+=', this.imageCount, 0, this.imageCount = 0 );
          break;
        case this.imageCount === 0  && direction === '+=':
          this.slideAimation( '-=', this.imageCount, this.imagesRef.length - 1, this.imageCount = this.imagesRef.length - 1 );
          break;
        case this.imageCount <= this.imagesRef.length - 1 && direction === '+=' :
            this.slideAimation( direction, this.imageCount, this.imageCount - 1, this.imageCount -= 1 )
          break;
        case this.imageCount <= this.imagesRef.length - 1 && direction === '-=' :
            // NEXT BUTTON ACTION
            this.slideAimation( direction, this.imageCount, this.imageCount + 1, this.imageCount += 1 )
          break;
        default:
      }

    } else {
      let dot = this.arrayDots.indexOf( direction.target )
      switch (true) {
        case dot >= this.imageCount:
            this.slideAimation( '-=', this.imageCount, dot, this.imageCount = dot )
          break;
        case dot <= this.imageCount:
            this.slideAimation( '+=', this.imageCount, dot, this.imageCount = dot )
          break;
        default:
      }
    }

  }

  // SET SWIPE FOR MOBILE
  config = {
    onSwipedRight: ( e ) => this.toggleImage( '+=' ),
    onSwipedLeft: ( e ) => this.toggleImage( '-=' ),
    preventDefaultTouchmoveEvent: true,
    stopPropagation: true,
    trackMouse: true
  }

  render(){
    return(
      <div className={ styles.Slider } title='slider' id={ 'slider_' + this.props.i }>
        <Swipeable {...this.config} className={styles.sliderContainer}>
          <button className={ styles.prev } onClick={ ( e ) => this.toggleImage( '+=' ) }></button>
          <div className={styles.sliderInner} ref={ this.sliderInner }>
            {
              this.props.images.map( (image, i ) => (
                <ProgressiveImages
                  ref={imagesRef => this.imagesRef[i] = imagesRef}
                  classPassed={ styles.images }
                  image={ image.asset }
                  key={ i }
                />
              ))
            }
          </div>
          <button className={ styles.next } onClick={ ( e ) => this.toggleImage( '-=' ) } ></button>
        </Swipeable>
        <ul className={ styles.dotNav } >
          {
            this.props.images.map( ( image, b ) => {
              return <li key={b} onClick={ ( e ) => this.toggleImage( e ) } ref={ arrayDot => this.arrayDots[b] = arrayDot }></li>;
            })
          }
        </ul>
      </div>
    )
  }
}

export default Slider;
