import React from 'react';
import Resume from "../../assets/Burhanuddin_Madraswala_Resume.PDF";

const AboutInfo = () => {
  return (
    <div className="about__main">
        <div className="about__info flex">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtext">5.5+ Years Working</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtext">20 + Projects</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtext">Online 24/7</span>
            </div>
        </div>

        <p className="about__description">
            Proficient in developing user interfaces and a firm believer in mobile first approach & good core web vitals numbers for the webpage. <br/>Team player with adequate management skills and a keen learner for trending technologies & frameworks to keep myself updated in ever growing software development industry.
        </p>

        <a rel="noreferrer" target="_blank" href={Resume} className="primary-btn about__btn">
            <span className="about__btn-text">Download Resume</span>
            <span className="about__btn-icon"></span>
        </a>
    </div>
  )
}

export default AboutInfo