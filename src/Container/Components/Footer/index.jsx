import React, { useState } from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return "Please enter a valid email.";
    if (!formData.number.trim() || !/^[0-9]{10,15}$/.test(formData.number)) return "Please enter a valid phone number.";
    if (!formData.message.trim()) return "Please enter your message.";
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validateForm();
    if (error) {
      setErrorMsg(error);
      setSuccessMsg("");
    } else {
      setErrorMsg("");
      setSuccessMsg(`Thank you, ${formData.name.toUpperCase()}, your message has been sent!`);
      console.log('Form submitted:', formData);

      // Clear form
      setFormData({
        name: "",
        email: "",
        number: "",
        message: ""
      });
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="main-footer">
        <div className="footer-main ">
          <div className="footer ">
            <div className="footer-container1">
              <h1 className="footer-title">Let's start a project together</h1>
              <p className="footer-content">
                We work closely with our clients to understand their objectives, target audience, and unique needs.
                We use our creative skills to translate these requirements and practical design solutions.
              </p>
              <p className="footer-details-title">Call Us Now:</p>
              <p className="footer-details">+91 9772222392</p>
              <p className="footer-details-title">Send us an email:</p>
              <p className="footer-details">accounts@catalystoutsource.com</p>
              <div className="footer-icons">
                <div className="footer-icon"><FontAwesomeIcon icon={faFacebook} className="fi" /></div>
                <div className="footer-icon"><FontAwesomeIcon icon={faInstagram} className="fi" /></div>
                <div className="footer-icon"><FontAwesomeIcon icon={faLinkedin} className="fi" /></div>
                <div className="footer-icon"><FontAwesomeIcon icon={faTwitter} className="fi" /></div>
              </div>
            </div>

            <div className="footer-offset"></div>

            <div className="footer-container2">
              <h4 className="footer-form-title">Send us a message</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-details">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className="form-details">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address" />
                </div>
                <div className="form-details">
                  <input type="tel" name="number" value={formData.number} onChange={handleChange} placeholder="+088-234-6837" />
                </div>
                <div className="form-details">
                  <textarea name="message" rows="4" cols="50" value={formData.message} onChange={handleChange} placeholder="Write your message here..." />
                </div>

                {/* Success or error message */}
                {errorMsg && <p className="error-message" style={{ color: 'red', marginTop: '10px' }}>{errorMsg}</p>}
                {successMsg && <p className="success-message" style={{ color: 'green', marginTop: '10px' }}>{successMsg}</p>}

                {/* Submit area */}
                <div className="form-btn" onClick={handleSubmit} style={{ cursor: 'pointer' }}>
                  <div className="form-button">
                    <button className="submit-btn" type="submit">Send message</button>
                  </div>
                  <div className="form-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28" fill="none">
                      <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                        stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
