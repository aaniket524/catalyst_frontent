import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight, faArrowUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";
import catamain from '../../../assests/catamain.png'


function Hero(params) {

    const navigate = useNavigate(); 
    const HandleRedirect = ()=>{
        navigate('/contact-us');
    }
    return(
        <>
      <div className="main-hero ">
      <div className="hero-main">
            <div className="hero-section  container-fluid">
                <div className="hero-content ">
                    <h1 className="hero-heading">
                    Smart Outsourcing for Smarter Growth
                    </h1>
                    <p className="hero-desc">
                    We specialize in innovative outsourcing, financial management, and strategic consulting to help businesses elevate performance, streamline operations, and achieve sustainable growth in today’s fast-moving world.
                    </p>
                    <div className="inner-hero-section">
                        <div className="inner-hero-section-image">
                            <img src={"https://favdevs.com/demos/wp/aximo/wp-content/uploads/2023/12/images.png"}
                            className="ihs-img img-fluid"/>
                        </div>
                        <div className="inner-hero-section-content">
                            <p className="ihs-content">Believed by more than a thousand Brands</p>
                        </div>
                    </div>
                    <div className="hero-section-btn">
                        <div className="heros-s-btn" >
                        <button className="hero-section-button" onClick={HandleRedirect}>Book a free consultation
                          </button>
                        </div>
                        <div className="hero-section-icon">
                        <FontAwesomeIcon icon={faPhone} className="icon-phone"/>        
                        </div>
                                            </div>
                </div>
                <div className="hero-soffset">
                    
                </div>
                <div className="hero-image ">
                    <img src={catamain}
                    className="hero-top-image img-fluid"/>
                </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default Hero;