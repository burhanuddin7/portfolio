import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h2 className="footer__title">Burhan Madraswala</h2>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
                <a rel="noreferrer" title="Facebook" href="https://www.facebook.com/burhan.madraswala" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>

                <a rel="noreferrer" title="Instagram" href="https://www.instagram.com/burhanmadraswala/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a rel="noreferrer" title="Twitter" href="https://twitter.com/Burhanmsd" className="footer__social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>

            <div className="footer__copyright">
                © Copyright 2022 All Rights Reserved by <a href="/">Burhan Madraswala</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer