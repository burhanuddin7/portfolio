import React from 'react';
import "./scrollTop.css";

const ScrollTop = () => {

    /***** Scroll up Active State *****/
    window.addEventListener("scroll", function() {
        const scrollup = document.querySelector(".scrollup");

        if (this.scrollY >= 150) {
            scrollup.classList.add("scroll-active");
        } else {
            scrollup.classList.remove("scroll-active");
        }
    });

    function fnScrollToTop() {
        window.scrollTo(0,0);
    }


    return (
        <span onClick={() => fnScrollToTop()} className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </span>
    )
}

export default ScrollTop