import React from 'react'

const Tools = () => {
  return (
    <div className="skills__box">
        <h3 className="skills__title">Tools & Utilities</h3>

        <div className="skills__group">
            <div className="skills__data skills__data--tools">
                <ul className="skills__list">
                    <li className="skills__item">
                        <span className="skills__item-title">Design Tools:</span>
                        <span className="skills__item-name">
                            Figma, InVision, Zeplin, UXPin, Adobe XD
                        </span>
                    </li>
                    <li className="skills__item">
                        <span className="skills__item-title">Tracking Tools:</span>
                        <span className="skills__item-name">
                            Google Tag Manager, Google Analytics, Amplitude, Salesforce, Deepcrawl, BigQuery, JIRA
                        </span>
                    </li>
                    <li className="skills__item">
                        <span className="skills__item-title">A/B Testing Tools:</span>
                        <span className="skills__item-name">
                            VWO & Unbounce
                        </span>
                    </li>
                    <li className="skills__item">
                        <span className="skills__item-title">Email Tools:</span>
                        <span className="skills__item-name">
                            MailChimp, Pardot, Litmus
                        </span>
                    </li>
                    <li className="skills__item">
                        <span className="skills__item-title">Basic Tools:</span>
                        <span className="skills__item-name">
                            MS-Office, Powerpoint, Excel, Google Sheets
                        </span>
                    </li>
                    <li className="skills__item">
                        <span className="skills__item-title">Other Tools:</span>
                        <span className="skills__item-name">
                            Jenkins, Sentry
                        </span>
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Tools