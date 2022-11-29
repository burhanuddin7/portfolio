import React, { useState } from 'react'
import "./header.css";

const Header = () => {

    /***** Mobile Menu Toggle State *****/
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");

        if (this.scrollY >= 80) {
            header.classList.add("header-stuck");
        } else {
            header.classList.remove("header-stuck");
        }
    });

    /***** Mobile Menu Toggle State *****/
    const[Toggle, showMobileMenu] = useState(false);
    const[activeNavLink, setActiveNavLink] = useState("#home");

    return (
    <header className="header">
        <nav className="nav container">
            <a href="/portfolio" className="nav__logo">Burhan Madraswala</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNavLink("#home")} className={(activeNavLink === "#home") ? "nav__link active-link" : "nav__link"}>
                            <span>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNavLink("#about")} className={(activeNavLink === "#about") ? "nav__link active-link" : "nav__link"}>
                            <span>
                                <i className="uil uil-user nav__icon"></i> About Me
                            </span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNavLink("#skills")} className={(activeNavLink === "#skills") ? "nav__link active-link" : "nav__link"}>
                            <span>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={() => setActiveNavLink("#services")} className={(activeNavLink === "#services") ? "nav__link active-link" : "nav__link"}>
                            <span>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNavLink("#contact")} className={(activeNavLink === "#contact") ? "nav__link active-link" : "nav__link"}>
                            <span>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </span>
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMobileMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMobileMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
    )
}

export default Header
