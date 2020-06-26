import CreativeStep from '../../components/CreativeStep/CreativeStep';
import Button from '../../components/UI/Button/Button';
import Skill from '../../components/Skill/Skill';
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.css';
import Client from '../../client';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      creativeStep: [
        { title: 'CLIENT REQUIREMENTS' ,copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'USER REASERCH' ,copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'VISUAL REASERCH' ,copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'INTEGRATION' ,copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
      ],
      skils: {
        design: [
          { type: 'Photoshop', grade: '50%' },
          { type: 'Illustrator', grade: '50%' },
          { type: 'Sketch', grade: '50%' },
          { type: 'After Effects', grade: '50%' }
        ],
        coding: [
          { type: 'HTML5', grade: '50%' },
          { type: 'CSS3', grade: '50%' },
          { type: 'Javascript', grade: '50%' },
          { type: 'React', grade: '50%' }
        ]
      }
    }
  }

  componentDidMount() {
    console.log( this.props );
    
  }

  render(){
    return (
      <motion.div className={ styles.about } exit={{ opacity: 0 }}>
        <section className={ styles.Hero }>
          <p>Born and raised in Milan (Italy), I have a real rat passion for everything that is an expression of creativity – I am always looking for ways to express my digital thinking. I’m always hungry to explore new fields of the industry and learn new skills, and I’ve got a profound interest in understanding the human interaction with the digital world. Outgoing, confident, client-facing and sociable, but at the same time a passionate hard worker that is completely dedicated to achieving both my professional and personal goals.</p>
        </section>
        <section className={ styles.CreativeProcess }>
          {
            this.state.creativeStep.map(( step, i ) => {
              return <CreativeStep index={ i } title={ step.title } copy={ step.copy } key={ i }/>
            })
          }
        </section>
        <section className={ styles.skillsSection }>
          <div className={ styles.skills } >
            <h4>DESIGN SKILLS</h4>
            <p>Attending a technical institute (ITSOS Albe Steiner) gave me the opportunity to learn most of the Adobe Creative Suite software, and spend time getting to know it back to front. I now apply what I learned at university at the agency that I currently work at. I'm proficient with most common software, and more knowledgeable with Photoshop and Illustrator.</p>
            <ul>
              {
                this.state.skils.design.map( ( skill, i ) => (
                  <li key={ i }>
                    <Skill skillName={ skill.type } amount={ skill.grade } />
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={ styles.skills } >
            <h4>CODING SKILLS</h4>
            <p>As with the software element of my skillset, my coding knowledge followed a similar process of development. My skills have improved dramatically since I started working full-time. Since then I’ve had the opportunity to build upon the range of languages I can code in and proficiency in it has improved markedly.</p>
            <ul>
              {
                this.state.skils.coding.map( ( skill, i ) => (
                  <li key={ i }>
                    <Skill skillName={ skill.type } amount={ skill.grade } />
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
        <p className={ styles.ctaCopy }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Button link='https://bplmarketing.udemy.com/?next=%2Forganization%2Fhome%2F' margin={ '5% 0' } >Download CV</Button>
      </motion.div>
    );
  }
}

About.getInitialProps = async function (context) {
  const query = `*[_type == "about"]`;

  return await Client.fetch(query).then( res => res[0] )
}

export default About;