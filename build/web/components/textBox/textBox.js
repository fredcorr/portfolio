import { faCalendarAlt, faClock, faMapMarkerAlt, faPoundSign, faGraduationCap } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './textBox.module.css';
import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import Aux from '../../hoc/Aux';
// eslint-disable-next-line
import { TweenMax, Power3 } from 'gsap';

class TextBox extends Component {

  state = {
  }

  render() {
    // eslint-disable-next-line
    let h3, headline, subHeadline, button, date, courses;

    return(
      <Aux>
        {this.props.subHeadline === undefined ? subHeadline = null : subHeadline = <div className={ styles.subHeadline } style={{ color: this.props.color }}>{this.props.subHeadline}</div> }
        {this.props.headline === undefined ? headline = null : headline = <h2 className={ styles.Headline } style={{ color: this.props.color }}>{this.props.headline}</h2>}
        {this.props.h3 === undefined ? h3 = null : h3 = <h3 className={ styles.Headline } style={{ color: this.props.color }}>{this.props.h3}</h3>}
        <div className={ styles.divider } style={{ backgroundColor: this.props.color }}></div>
        { this.props.coursesDetails === undefined ? courses = null : courses = (
          <ul className={ styles.courseDetails }>
            <li>
              <div className={ styles.icon }><FontAwesomeIcon preserveAspectRatio="slice xMidYMid" icon={ faClock } /></div>
              <p>{ this.props.duration }</p>
            </li>
            <li>
              <div className={ styles.icon }><FontAwesomeIcon preserveAspectRatio="slice xMidYMid" icon={ faGraduationCap } /></div>
              <p>{ this.props.suitability }</p>
            </li>
            <li>
              <div className={ styles.icon }><FontAwesomeIcon preserveAspectRatio="slice xMidYMid" icon={ faMapMarkerAlt } /></div>
              <p>{ this.props.location }</p>
            </li>
            <li>
              <div className={ styles.icon }><FontAwesomeIcon preserveAspectRatio="slice xMidYMid" icon={ faPoundSign } /></div>
              <p>{ this.props.cost }</p>
            </li>
          </ul>
        )}
        <p className={ styles.paragraph } style={{ color: this.props.color }} dangerouslySetInnerHTML={{__html: this.props.children }}></p>
        { this.props.date === undefined ? date = null : date = ( <div className={ styles.date }>
          <FontAwesomeIcon preserveAspectRatio="slice xMidYMid" style={{ color: this.props.color, fontSize: '1rem', margin: 'auto 0' }} icon={ faCalendarAlt }/><p style={{ color: this.props.color }}>{this.props.date}</p>
        </div> ) }
        {this.props.button === undefined ? button = null : button = <Button buttonSmall={ this.props.buttonSize } classPassed={ this.props.buttonClass } color={ this.props.color } colorHover={ this.props.colorHover } backgroundButton={'transparent'} click={ this.props.click } type={ this.props.buttonType } url={this.props.url}>{ this.props.button }</Button> }
      </Aux>
    );
  }
}
export default TextBox;
