import React from 'react'
import "./about.css";
import AboutImg from "../../assets/burhan-profile.png";
import AboutInfo from './AboutInfo';

const About = () => {
  return (
    <section className="about section" id="about">
        <div className="container">
            <h2 className="section__tile align-c">About Me</h2>
            <div className="section__subtitle">My Introduction</div>

            <div className="about__wrapper flex">
                <img src={AboutImg} alt="Burhan Madraswala" className="about__img" />

                <div className="about__data">
                    <AboutInfo />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About