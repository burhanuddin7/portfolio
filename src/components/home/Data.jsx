import React from 'react';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Burhan Madraswala
            <span className="home__title-icon" title="Hello"></span>
        </h1>
        <h3 className="home__subtitle">Front End Developer</h3>
        <p className="home__description">
            Innovative task-driven professional with 5+ years of Front end development experience.
        </p>
        <a href="#contact" className="primary-btn">
            <span className="primary-btn__text">Say Hello</span>
            <span className="primary-btn__icon"></span>
        </a>

        <div className="home__scroll">
            <a title="Scroll Down" href="#about" className="home__scroll-button flex">
                <svg
                    width="32px"
                    height="32px"
                    className="home__scroll-mouse"
                    viewBox="0 0 247 390"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "1.5",
                    }}
                    >
                    <path
                        className="wheel"
                        d="M123.359,79.775l0,72.843"
                        style={{
                        fill: "none",
                        stroke: "var(--title-color)",
                        strokeWidth: "20px"
                        }}
                        ></path>
                    <path
                        id="mouse"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        style={{
                        fill: "none",
                        stroke: "var(--title-color)",
                        strokeWidth: "20px"
                        }}
                        ></path>
                </svg>
                <span className="home__scroll-text">
                    <span>Scroll Down</span> <i className="uil uil-arrow-down home__scroll-arrow"></i>
                </span>
            </a>
        </div>
    </div>
  )
}

export default Data
