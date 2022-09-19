import styles from './SkillSet.module.css'
import React from 'react'

export interface SkillSetProps {
  skills_type: string
  skills_description: string
}

const SkillSet = ({ skills_description, skills_type }: SkillSetProps) => (
  <div className={styles.skillSet}>
    <h3>{skills_type}</h3>
    <span></span>
    <p>{skills_description}</p>
  </div>
)

export default SkillSet
