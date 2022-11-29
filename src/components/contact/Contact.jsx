import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";

class Contact extends React.Component {
    checkContactNo(event) {
        var that = event.target;
        var re = /[1-9]{1}[0-9]{9}/;
        var inputVal = that.value.trim();
        if (inputVal.length === 0) {
            that.closest('.form-element').classList.add('invalid');
        }
        if (!re.test(inputVal)) {
            that.closest('.form-element').classList.add('invalid');
        }
    }

    checkName(event) {
        var that = event.target;
        var re = /^[a-zA-Z_ ]*$/;
        var inputVal = that.value.trim();
        if (inputVal === "") {
            that.closest('.form-element').classList.add('invalid');
        }
        if (!re.test(inputVal)) {
            that.closest('.form-element').classList.add('invalid');
        }
    }

    checkContactSubject(event) {
        var that = event.target;
        var inputVal = that.value.trim();
        if (inputVal === "") {
            that.closest('.form-element').classList.add('invalid');
        }
    }
    
    checkEmail(event) {
        var that = event.target;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var inputVal = that.value.trim();
        if (inputVal === "") {
            that.closest('.form-element').classList.add('invalid');
        }
        if (!re.test(inputVal)) {
            that.closest('.form-element').classList.add('invalid');
        }
    }

    removeValidity(event) {
        var that = event.target;
        that.closest('.form-element').classList.remove('invalid');
    }

    resetWidgetCaptcha() {
        var grecaptcha = window.grecaptcha;
        if (grecaptcha.getResponse() === '') {
            grecaptcha.reset();
        }
    }

    fnValidateContactForm(event) {
        event.preventDefault();

        var isFormValid = true;
		const formData = new FormData(document.getElementById("contactForm"));
        const entries = formData.entries();
        const data = Object.fromEntries(entries);
        const grecaptchaObject = window.grecaptcha;

        if (grecaptchaObject && grecaptchaObject.getResponse().length > 0) {
			document.querySelector('.g-recaptcha').parentElement.classList.remove("invalid");
			isFormValid = true; 
		} else {
			document.querySelector('.g-recaptcha').parentElement.classList.add("invalid");
			isFormValid = false; 
		}

        var mainElem = document.querySelectorAll("#contactForm .form-control");

        mainElem.forEach(function (ele) {
            var that = ele;
			if (that.value.length === 0){
				that.parentElement.classList.add("invalid");
				isFormValid = false;   
			}

			if (that.parentElement.classList.contains("invalid")) {
				isFormValid = false; 
			}
        });

        function submitMSG(valid, msg) {
            var msgClasses = '';
            if (valid) {
                msgClasses = "text-success";
            } else {
                msgClasses = "text-danger";
            }
            document.getElementById("msgSubmit").removeAttribute('class');
            document.getElementById("msgSubmit").classList.add(msgClasses);
            document.getElementById("msgSubmit").innerHTML = msg;
        }

        function formSuccess() {
            document.getElementById('contactForm').reset();
            submitMSG(true, "Message Submitted!");
            grecaptchaObject.reset();
            setTimeout(function() {
                document.getElementById("msgSubmit").removeAttribute('class');
                document.getElementById("msgSubmit").classList.add('hidden');
            }, 4000);
        }

        var formElem = document.getElementById('contactForm');

		if (!isFormValid){
			event.preventDefault(); 
			document.getElementById("msgSubmit").classList.remove('hidden');
			submitMSG(false, "Did you fill in the form properly?");
		} else{
			event.preventDefault();
            emailjs.sendForm('service_spktk7w', 'template_a5pjudq', formElem, 'Ep59MY0JkZXdg7hmi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
			formSuccess();
		}

		return isFormValid;
    }

    formSuccess() {
        document.getElementById('contactForm').reset();
        this.submitMSG(true, "Message Submitted!");
    }

    render() {
        const form = useRef;
        return (
            <section className="contact section" id="contact">
                <div className="container">
                    <h2 className="section__tile align-c">Get in touch</h2>
                    <div className="section__subtitle">Contact Me</div>

                    <div className="contact__wrapper">
                        <div className="contact__main flex">
                            <div className="contact__child">
                                <div className="contact__info">
                                    <div className="contact__card">
                                        <i className="bx bx-mail-send contact__card-icon"></i>
                                        <h3 className="contact__card-title">Email</h3>
                                        <span className="contact__card-data">madraswalaburhanuddin@gmail.com</span>
                                        <a rel="noreferrer" target="_blank" href="mailto:madraswalaburhanuddin@gmail.com" className="contact__card-link">
                                            <span>Write me</span>
                                            <i className="bx bx-right-arrow-alt contact__card-link-icon"></i>
                                        </a>
                                    </div>

                                    <div className="contact__card">
                                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                                        <h3 className="contact__card-title">Whatsapp</h3>
                                        <span className="contact__card-data">+91 - 9561503852</span>
                                        <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=9561503852&text=Hello,%20Please%20provide%20more%20details%20about%20your%20project" className="contact__card-link">
                                            <span>Write me</span>
                                            <i className="bx bx-right-arrow-alt contact__card-link-icon"></i>
                                        </a>
                                    </div>

                                    <div className="contact__card">
                                        <i className="bx bxl-linkedin contact__card-icon"></i>
                                        <h3 className="contact__card-title">Linkedin</h3>
                                        <span className="contact__card-data">burhanuddin-madraswala</span>
                                        <a href="https://www.linkedin.com/in/burhanuddin-madraswala-66495112b/" rel="noreferrer" target="_blank" className="contact__card-link">
                                            <span>Write me</span>
                                            <i className="bx bx-right-arrow-alt contact__card-link-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="contact__child">
                                <h3 className="contact__title">Write me your project</h3>

                                <form ref={this.form} name="myForm" id="contactForm">
                                    <div className="form-wrapper">
                                        <div className="form-content">
                                            <div className="form-element">
                                                <label htmlFor="emailid">Email ID</label>
                                                <input onBlur={this.checkEmail} onKeyUp={this.removeValidity} className="form-control" id="emailid" type="text" placeholder="Enter your email id" name="emailid" />
                                            </div>
                                            <div className="form-element-main">
                                                <div className="form-element form-element-half">
                                                    <label htmlFor="fname">Name</label>
                                                    <input onBlur={this.checkName} onKeyUp={this.removeValidity} className="form-control" id="fname" type="text" placeholder="Enter your name" name="fname" maxLength="100" />
                                                </div>
                                                <div className="form-element form-element-half">
                                                    <label htmlFor="contact_no">Contact Number</label>
                                                    <input onBlur={this.checkContactNo} onKeyUp={this.removeValidity} className="form-control" id="contact_no" type="text" placeholder="Enter your mobile number" name="contact_no" maxLength="20" />
                                                </div>
                                            </div>
                                            <div className="form-element">
                                                <label htmlFor="description">Message</label>
                                                <textarea onBlur={this.checkContactSubject} rows="3" onKeyUp={this.removeValidity} className="form-control" id="description" type="text" placeholder="Enter your project details" name="description"></textarea>
                                            </div>
                                            <div className="form-element">
                                            <ReCAPTCHA className="g-recaptcha" sitekey={process.env.REACT_APP_SITE_KEY} onExpired={this.resetWidgetCaptcha} onErrored={this.resetWidgetCaptcha} />
                                            </div>
                                            <div className="submit-button">
                                                <input onClick={this.fnValidateContactForm}  className="submit-btn primary-btn" id="request-form-submit" type="submit" value="Submit Request" />
                                                <div id="msgSubmit" className="hidden"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact