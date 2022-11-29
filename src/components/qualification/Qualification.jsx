import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {

  const [tabToggleState, switchTabState] = useState(1);

  const fnSwitchTabState = (index) => {
    switchTabState(index);
  }
  return (
    <section className="qualification section" id="qualification">
        <div className="container">
            <h2 className="section__tile align-c">Qualification</h2>
            <div className="section__subtitle">My personal journey</div>

            <div className="qualification__container">
                <div className="qualification__tabs flex">
                    <div onClick={() => fnSwitchTabState(1)} className={(tabToggleState === 1) ? "qualification__tabs-btn qualification-active" : "qualification__tabs-btn"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        <span>Job Experience</span>
                    </div>

                    <div onClick={() => fnSwitchTabState(2)} className={(tabToggleState === 2) ? "qualification__tabs-btn qualification-active" : "qualification__tabs-btn"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        <span>Education Journey</span>
                    </div>
                </div>

                <div className="qualification__main">
                    <div className={(tabToggleState === 1) ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div className="qualification__data-first">
                                <h3 className="qualification__title">
                                    WordPress Developer
                                </h3>
                                <span className="qualification__subtitle">BrowserStack - Mumbai</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt qualification__icon"></i>
                                    <span>May 2021 - Present</span>
                                </div>
                            </div>

                            <div className="qualification__data-second">
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data qualification__data--var">
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div className="qualification__data-first">
                                <h3 className="qualification__title">
                                    Front End Developer
                                </h3>
                                <span className="qualification__subtitle">Sogolytics - Mumbai</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt qualification__icon"></i>
                                    <span>June 2017 - May 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={(tabToggleState === 2) ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div className="qualification__data-first">
                                <h3 className="qualification__title">
                                    B.E in Information Technology
                                </h3>
                                <span className="qualification__subtitle">Mumbai University</span>
                                <span className="qualification__score">CGPA - 8.82</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt qualification__icon"></i>
                                    <span>June 2013 - March 2017</span>
                                </div>
                            </div>

                            <div className="qualification__data-second">
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data qualification__data--var">
                            <div></div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div className="qualification__data-first">
                                <h3 className="qualification__title">
                                    HSC - 12th
                                </h3>
                                <span className="qualification__subtitle">Maharashtra State Board</span>
                                <span className="qualification__score">HSC - 80%</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt qualification__icon"></i>
                                    <span>June 2011 - April 2013</span>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div className="qualification__data-first">
                                <h3 className="qualification__title">
                                    SSC - 10th
                                </h3>
                                <span className="qualification__subtitle">Maharashtra State Board</span>
                                <span className="qualification__score">SSC - 92.91%</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt qualification__icon"></i>
                                    <span>Till March 2011</span>
                                </div>
                            </div>

                            <div className="qualification__data-second">
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification