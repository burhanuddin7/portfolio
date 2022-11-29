import React from 'react';

const SocialMedia = () => {
  return (
    <div className="home__social">
        <a rel="noreferrer" title="Github" href="https://github.com/burhanuddin7" className="home__social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>

        <a rel="noreferrer" title="Linkedin" href="https://www.linkedin.com/in/burhanuddin-madraswala-66495112b/" className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin"></i>
        </a>

        <a title="Gmail" href="mailto:madraswalaburhanuddin@gmail.com" className="home__social-icon">
            <i className="uil uil-envelope-check"></i>
        </a>
    </div>
  )
}

export default SocialMedia