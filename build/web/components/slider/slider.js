import { Swipeable } from "react-swipeable";
import React, { Component } from 'react';
import styles from './slider.module.css';
import { TweenMax } from 'gsap';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.imagesRendered = null;
    this.arrayDots = null;
    this.imagesRef = [];
    this.imageCount = 0;
    this.amountMoved = 0;
    this.state = {
    }

  }

  componentDidMount() {
    this.imagesRendered = Array.from(document.getElementsByClassName( styles.sliderInner )[0].children);
    this.arrayDots = Array.from(document.getElementsByClassName( styles.dotNav )[0].children);
  }

  slideAimation = ( direction, indexOf, startPoint, endPoint ) => {
    // TweenMax.to( '.' + styles.sliderInner, 1, { x: direction + amount + '%'})
  }

  // MOVE TO NEXT SLIDE
  toggleNext = ( event, type ) => {
    switch ( true ) {
      case this.imageCount === ( this.imagesRendered.length - 1 ) && type === 'next':
          this.slideAimation( '+=', this.imageCount, 0, this.imagesRef.length - 1 );
          this.imageCount = 0;
        break;
      case this.imageCount === 0  && type === 'prev':
        this.slideAimation( '-=', this.imageCount, 0, this.imagesRef.length - 1 );
        this.imageCount = this.imagesRendered.length - 1
        break;
      case this.imageCount <= ( this.imagesRendered.length - 1 ) && type === 'prev':
          this.slideAimation( '+=', this.imageCount, this.imageCount, this.imageCount - 1 )
          this.imageCount -= 1;
        break;
      case this.imageCount <= ( this.imagesRendered.length - 1 ) && type === 'next':
          this.slideAimation( '-=', this.imageCount, this.imageCount, this.imageCount + 1 )
          this.imageCount += 1;
        break;
      default:
    }
    TweenMax.to( this.arrayDots[ this.imageCount ].parentNode.children, 1, { scale: 0.5 })
    TweenMax.to( this.arrayDots[ this.imageCount ], 1, { scale: 1 })
  }

  dotsNav = ( event ) => {
    let indexOfThumb =  (Array.from(document.getElementsByClassName( styles.dotNav )[0].children).indexOf( event.target )) ;
    switch (true) {
      case indexOfThumb > this.imageCount :
          this.slideAimation( true, '-=', this.imageCount, this.imageCount, indexOfThumb )
        break;
      case indexOfThumb < this.imageCount :
          this.slideAimation( true, '+=', this.imageCount, this.imageCount, indexOfThumb  )
        break;
      default:
    }
    TweenMax.to( event.target.parentNode.children, 1, { scale: 0.5 })
    TweenMax.to( event.target, 1, { scale: 1 })
    this.imageCount = indexOfThumb;
  }

  // SET SWIPE FOR MOBILE
  config = {
    onSwipedLeft: ( e ) => this.toggleNext( e, 'next' ),
    onSwipedRight: ( e ) => this.toggleNext( e, 'prev' ),
    preventDefaultTouchmoveEvent: true,
    stopPropagation: true,
    trackMouse: true
  }

  render(){

    return(
      <div className={ styles.Slider }>
        <Swipeable {...this.config} className={styles.sliderContainer}>
          <button className={ styles.prev } onClick={ ( e ) => this.toggleNext( e, 'prev' ) }></button>
          <div className={styles.sliderInner}>
            { this.props.images.map((img, i) => { return <div key={i} style={{ backgroundImage: `url(${img})`} }></div> } ) }
          </div>
          <button className={ styles.next } onClick={ ( e ) => this.toggleNext( e, 'next' ) } ></button>
        </Swipeable>
        <ul className={ styles.dotNav }>
          {
            this.props.images.map( b => {
              return <li key={b} onClick={ ( e ) => this.dotsNav( e ) } ></li>;
            })
          }
        </ul>
      </div>
    )
  }
}

export default Slider;
