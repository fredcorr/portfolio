import CreativeStep from '../../components/CreativeStep/CreativeStep';
import Button from '../../components/UI/Button/Button';
import Skill from '../../components/Skill/Skill';
import { client, baseUrl } from '../../client';
import React, { Component } from 'react';
import styles from './about.module.css';
import { motion } from 'framer-motion';

const About = props => {
  return (
    <motion.div className={ styles.about } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
      <section className={ styles.Hero }>
        <p>{ props.brief_intro }</p>
      </section>
      <section className={ styles.CreativeProcess }>
        {
          props.creative_process.map(( step, i ) => {
            return <CreativeStep index={ i } title={ step.title } copy={ step.body } key={ i }/>
          })
        }
      </section>
      <section className={ styles.skillsSection }>
        {
          props.skill_sets.map( skillSet => 
            <div className={ styles.skills } key={ skillSet._key }>
              <h4>{ skillSet.skills_type }</h4>
              <p>{  skillSet.skills_description}</p>
              <div className={ styles.skilListing }>
                {
                  skillSet.skills_listing.map( skill => (
                    <div key={ skill._key }>
                      <Skill skillName={ skill.skill_name } amount={ skill.grade + '%' } />
                    </div>
                  ))
                }
              </div>
            </div>

            )
        }
      </section>
      <p className={ styles.ctaCopy }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Button link='https://bplmarketing.udemy.com/?next=%2Forganization%2Fhome%2F' margin={ '5% 0' } >Download CV</Button>
    </motion.div>
  );
}

About.getInitialProps = async function (context) {
  const query = `*[_type == "about"]{
    page_title,
    seo_details,
    brief_intro,
    creative_process,
    skill_sets,
    CV
  }`;

  return await client.fetch(query).then( res => res[0] )
}

export default About;