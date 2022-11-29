import React from 'react';
import "./home.css";
import SocialMedia from './SocialMedia';
import Data from './Data';

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container">
            <div className="home__content">
                <SocialMedia />
                <div className="home__wrapper">
                    <Data />
                    <div className="home__img"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home