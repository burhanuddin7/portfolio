import React from 'react';
import './skills.css';
import Tools from './Tools';
import Languages from './Languages';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <div className="container">
            <h2 className="section__tile align-c">Skills</h2>
            <div className="section__subtitle">My Technical Skills</div>

            <div className="skills__wrapper">
                <Languages />
                <Tools />
            </div>
        </div>
    </section>
  )
}

export default Skills