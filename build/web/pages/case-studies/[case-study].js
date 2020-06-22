import OneColumnTitle from '../../components/OneColumnTitle/OneColumnTitle';
import TwoColumnTitle from '../../components/TwoColumnTitle/TwoColumnTitle';
import ImageTextBox from '../../components/ImageTextBox/ImageTextBox';
import NextProject from '../../components/NextProject/NextProject';
import TwoColumn from '../../components/TwoColumn/TwoColumn';
import Button from '../../components/UI/Button/Button';
// import BPLThumb from '../assets/images/bplThumb.png';
import Slider from '../../components/slider/slider';
import styles from './case-study.module.css';
import React, { Component } from 'react';

class CaseStudy extends Component {

  render(){
    return (
      <div className={ styles.CaseStudy }>
        <section className={ styles.Hero }>
          <div className={ styles.heroClip }>
            <img src={ '../assets/images/bplThumb.png' } alt='BPL Marketing'/>
          </div>
          <div className={ styles.projectTitle }>
            <h2>BPL<br/>Marketing</h2>
            <p>2019</p>
          </div>
        </section>
        <section className={ styles.mainContent }>
          <OneColumnTitle title={ 'Sink or Swim' } paragraph={ 'I joined BPL Marketing in February 2019, and they decided to put me straight up to a challenge with the new company website…a sink or swim situation.</br></br>The entire company brand was being re-developed, with the ‘go-to’ message at heart of it. Visually this was translated in the use of lines to connect elements, as per the connection between the client and the agency.' } />
          <ImageTextBox imgUrl={ '../assets/images/BPL_Leadership_1.jpg' } title={ 'Start with the<br/>right method' } paragraph={ 'As part of my creative process, I like to start with the right method to ensure flexibility to rapid changes, so I opted for an object orientated approach, taking advantage of a modern tools such as Sketch fro the design tase and a JS framework, known as React.<br/><br/>This method helped laying out the design, by creating design element and defining rules, such as the different heading and design guidelines for the site, which could then be easily translated into the development phase.' } />
          <TwoColumnTitle title={ 'The look and Feel' } columnOne={ 'The design phase was characterised by trying to find a way to incorporate the lines into the design in a way that could be replicated in a responsive way, when it came to coding it. After a bit of research I found a way to implement it.<br/><br/>Some section, such as the ‘work’ and ‘our story’ pages have a stronger representation of the line with them being more curvy and running down the page, while in other sections I preferred to keep things a bit cleaner such as for the case studies which have to be more modular and quick to build upon request.' } columnTwo={'Some of the design element were already established where already coming from the new guidelines, such as the colours where the yellow was used as highlight colour and the light blue, in contrast with the dark blue, for the copy. As per the font, I decided to opt for a google font, fast too load, and san serif such as ‘Barlow’, with the main use of three body-weight.'}/>
          <img src={ '../assets/images/fullWidthImage.png' } alt='Our Story Page' />
          <ImageTextBox reverse={ true } imgUrl={ '../assets/images/BPL_Leadership_2.png' } title={ 'Bring it to life' } paragraph={ 'After a couple of weeks between initial design a reviews from the board, we moved onto bringing the site to life. Starting by separating the site in single objects as highlighted in the design, so that the styling could be consistent using Css Modules. <br/><br/>This helped even in the responsive phase as I could control the styling of multiple object all at the same time, while keeping my Css files tidy.' } />
          <TwoColumn columnOne={ 'The design phase was characterised by trying to find a way to incorporate the lines into the design in a way that could be replicated in a responsive way, when it came to coding it. After a bit of research I found a way to implement it.<br/><br/>Some section, such as the ‘work’ and ‘our story’ pages have a stronger representation of the line with them being more curvy and running down the page, while in other sections I preferred to keep things a bit cleaner such as for the case studies which have to be more modular and quick to build upon request.' } columnTwo={'Some of the design element were already established where already coming from the new guidelines, such as the colours where the yellow was used as highlight colour and the light blue, in contrast with the dark blue, for the copy. As per the font, I decided to opt for a google font, fast too load, and san serif such as ‘Barlow’, with the main use of three body-weight.'}/>
          <Slider images={ [ '../assets/images/slides/slidesOne.jpg', '../assets/images/slides/slidesTwo.jpg', '../assets/images/slides/slidesThree.jpg' ] }/>
          <TwoColumnTitle title={ 'With a little help from my friends' } columnOne={ 'Another key aspect of any website is how to animate it so that it can look even more appealing to the user eye. This was made easier for me by the use of the GSAP suite, which is great when you’re trying to achieve complicated animations.<br/><br/>In particular the use of DrawSVG helped me a lot in making the lines move across the site and connect different elements, which was one of the underlying ideas of the site.' } columnTwo={'In order to achieve a more immersive experience, I opted to use a scroll based animation using ScrollMagic, which helps you in setting triggers down the page so you can time you animation very well. This, combined with Lottie for web, really brought some pages to life, like in the åOur Story’ section where the illustrations start drawing on the page back and forward.'}/>
          <Button link='https://bplmarketing.udemy.com/?next=%2Forganization%2Fhome%2F' margin={ '10% 0 0 0' }>Visit Site</Button>
        </section>
        <NextProject img={ '../assets/images/BPL_Leadership_1.jpg' } />
      </div>
    );
  }
}

export default CaseStudy;
