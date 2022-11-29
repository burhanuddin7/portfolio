import React from 'react'

const Languages = () => {
  return (
    <div className="skills__box">
        <h3 className="skills__title">Tech Stack</h3>

        <div className="skills__group">
            <div className="skills__data">
                <ul className="skills__list">
                    <li className="skills__item">
                        <span className="skills__item-name">HTML5, CSS3</span>
                    </li>
                    <li className="skills__item">
                        <span className="skills__item-name">JavaScript & jQuery</span>
                    </li>
                    <li className="skills__item skills__item--var">
                        <span className="skills__item-title">CSS Preprocessors:</span>
                        <span className="skills__item-name">LESS & SASS</span>
                    </li>
                    <li className="skills__item skills__item--var">
                        <span className="skills__item-title">JavaScript Frameworks:</span>
                        <span className="skills__item-name">React & Angular</span>
                    </li>
                    <li className="skills__item skills__item--var">
                        <span className="skills__item-title">CSS Frameworks:</span>
                        <span className="skills__item-name">Bootstrap & Tailwind CSS</span>
                    </li>
                    <li className="skills__item">
                        <span className="skills__item-title">CMS:</span>
                        <span className="skills__item-name">Wordpress</span>
                    </li>
                    <li className="skills__item">
                        <span className="skills__item-title">Backend Languages:</span>
                        <span className="skills__item-name">PHP</span>
                    </li>
                    <li className="skills__item">
                        <span className="skills__item-title">Database:</span>
                        <span className="skills__item-name">MySQL</span>
                    </li>
                    <li className="skills__item skills__item--var">
                        <span className="skills__item-title">Version Control System:</span>
                        <span className="skills__item-name">Git & VSS</span>
                    </li>
                    <li className="skills__item">
                        <span className="skills__item-name">Gulp & Webpack</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Languages