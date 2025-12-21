import React, { useState } from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faLocation, faMap, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import AllPageHeader from "../../Components/AllPageHeader";

function ContactPage(){
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        number:'',
        message:''
    })
    const[errorMsg, setErrorMsg] = useState("")
    const[successMsg, setSuccessMsg] = useState("")
    const validateForm = () => {
        if (!formData.name.trim()) return "Please enter your name.";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return "Please enter a valid email.";
        if (!formData.number.trim() || !/^[0-9]{10,15}$/.test(formData.number)) return "Please enter a valid phone number.";
        if (!formData.message.trim()) return "Please enter your message.";
        return "";
      };
      
      const handleSubmit = (event) => {
        event.preventDefault(); // prevent page reload
      
        const error = validateForm(); // check if form is valid
      
        if (error) {
          setErrorMsg(error);      // show error message
          setSuccessMsg("");       // remove success message if any
        } else {
          setErrorMsg("");         // remove previous error
          setSuccessMsg(`Thank you, ${formData.name.toUpperCase()}, your message has been sent!`); // show thank you message
      
          // Log form data to console (optional)
          console.log('Form submitted:', formData);
      
          // Clear form fields
          setFormData({
            name: "",
            email: "",
            number: "",
            message: ""
          });
        }
      };
      
    const handleChange=(e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value });

       
    }
    return(
        <>
        <AllPageHeader title='Contact Us' breadcrumb='Home / Cotact-us'/>
        <div className="contactpage-main">
            <h1 className="contactpage-title">Contact us for a personal experience
            </h1>
            <div className="contactpage-container">
                <div className="contactpage-inner1">
                    <form >
                        <div className="contactpage-details">
                            <label for='name'>Your name</label>
                            <input type="text" name='name' value={formData.name} onChange={handleChange}/>
                        </div>
                        <div className="contactpage-details">
                            <label for='email'>Your email</label>
                            <input type="email" name='email' value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className="contactpage-details">
                            <label for='number'>Phone No</label>
                            <input type="number"  name='number' value={formData.number} onChange={handleChange}/>
                        </div>
                        <div className="contactpage-details">
                        <label for='message'>Write your message here...</label>

                            <textarea type="text" rows='4' cols='50' name='message' value={formData.message} onChange={handleChange} />
                        </div>
                         {/* Success or error message */}
                {errorMsg && <p className="error-message" style={{ color: 'red', marginTop: '10px' }}>{errorMsg}</p>}
                {successMsg && <p className="success-message" style={{ color: 'green', marginTop: '10px', marginLeft:'30px' }}>{successMsg}</p>}

                        <div className="contactpage-btn" >
                           <button className="contact-page-btn" type="submit" onClick={handleSubmit}> Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="contactpage-inner2">
                <img src="https://favdevs.com/demos/wp/aximo/wp-content/uploads/2023/12/image-9-645x1024.png"
                className="contactpage-img img-fluid"/>
                    </div>
            </div>
            <h1 className="cp-infoo">Contact Information
            </h1>
            <div className="contactpage-info-container">
                <div className="cp-info-card1">
                    <div className="cp-infocard-icon">
                        <FontAwesomeIcon icon={faPhone} className="cp-phone"/>
                    </div>
                    <div className="cp-infocard-details">
                    <h4 className="cp-info-title">Call Us</h4>
                    <p className="cp-info-more">+91 9772222392</p>
                    </div>
                </div>
                <div className="cp-info-card1">
                    <div className="cp-infocard-icon">
                        <FontAwesomeIcon icon={faMessage} className="cp-phone"/>
                    </div>
                    <div className="cp-infocard-details">
                    <h4 className="cp-info-title">Email Us</h4>
                    <p className="cp-info-more">accounts@catalystoutsource.com</p>
                    </div>
                </div>
                <div className="cp-info-card1">
                    <div className="cp-infocard-icon">
                        <FontAwesomeIcon icon={faLocation} className="cp-phone"/>
                    </div>
                    <div className="cp-infocard-details">
                    <h4 className="cp-info-title">Address</h4>
                    <p className="cp-info-more">ES-177 Gulmohar Gardens, Bhatawala, Vatika Road, Watika Jaipur Rajasthan India 303905</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ContactPage