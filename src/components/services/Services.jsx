import React, { useState } from 'react';
import './services.css';

const Services = () => {

  const [modalToggleState, setToggleModalState] = useState(0);

  const fnOpenModal = (index) => {
    setToggleModalState(index);
  }
  return (
    <section className="services section" id="services">
        <div className="container">
            <h2 className="section__tile align-c">Services</h2>
            <div className="section__subtitle">What i offer</div>

            <div className="services__container flex">
                <div className="services__box">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">WordPress <br/> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => fnOpenModal(1)}>
                        <span>View More</span>
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={(modalToggleState === 1) ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => fnOpenModal(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">WordPress Development</h3>
                            <p className="services__modal-desc">
                                Service with more than 5 years of experience. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-info">
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Developed web & landing pages from concept through deployment with responsive, mobile-first approach.</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Specialist in creating components, templates, short codes, custom theme & plugins for Wordpress.</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Developed Dynamic, Static & E-Commerce websites etc.</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Build website with custom theme or any thid party theme or any design mockup</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Web page development with primary focus on mobile responsiveness and page speed performance number (Core Web Vitals).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__box">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Front End <br/> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => fnOpenModal(2)}>
                        <span>View More</span>
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={(modalToggleState === 2) ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => fnOpenModal(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Front End Development</h3>
                            <p className="services__modal-desc">
                                Service with more than 5 years of experience. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-info">
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Developed websites, web & landing pages from concept through deployment with responsive, mobile-first approach.</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Offer Lazy loading and code optimization services (Core Web Vitals) to improve performance and load time of web pages.</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Experience of working with web infrastructure and also understanding of building scalable web applications using frameworks like React and Node.js</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Experience of developing Newsletter Email Templates Fully Responsive.</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Knowledge and Experience of working with various Design tools to create an exact replica of the design provided.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__box">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Website <br /> Optimization</h3>
                    </div>

                    <span className="services__button" onClick={() => fnOpenModal(3)}>
                        <span>View More</span>
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={(modalToggleState === 3) ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => fnOpenModal(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Website Optimization</h3>
                            <p className="services__modal-desc">
                                Service with more than 5 years of experience. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-info">
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Experience in implementing a Caching solution to reduce load on server, eliminating the need for them to be loaded every time a visitor accesses your site.</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Services like Implementing Lazy Loading, Optimizing Web fonts, Properly sized Images, Defer load JS and third party scripts etc.</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Experience of working on Core Web Vitals and improving the page speed of the website</span>
                                </li>
                                <li className="services__modal-list">
                                    <i className="uil uil-check-circle servies__modal-icon"></i>
                                    <span className="services__modal-list-item">Specialized in improving the page speed score for both Desktop & Mobile.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services