import React from "react";
import './style.css';
import StandOutSection from "../../Components/StandOutSection";
import HomeMarquee from "../../Components/HomeMarquee";
import HomeTeam from "../../Components/HomeTeam";
import AllPageHeader from "../../Components/AllPageHeader";

function AboutPage(){
    return(
        <>
        <AllPageHeader title="About Us" breadcrumb="Home / About Us"/>
        <div className="about-page">
            <StandOutSection/>
            <div className="about-page-main">
               <div className="about-page-container">
               <h1 className="about-page-title">
                We think our story is worth sharing with you
                </h1>
                <p className="about-page-content">Established in 2008, we began as a small but ambitious team. We understood the importance of creative and tech-savvy solutions to help businesses succeed in the ever-changing digital landscape.
                </p>
               </div>
               <div className="about-page-contain1">
                <div className="about-page-container1">
                    <img src="https://favdevs.com/demos/wp/aximo/wp-content/uploads/2023/12/image-11-1536x718.png"
                    className="aboutpage-img-2 img-fluid"/>
                </div>
                <div className="about-page-container2">
                    <img src="https://favdevs.com/demos/wp/aximo/wp-content/uploads/2023/12/image-12-1.png"
                    className="aboutpage-img-1 img-fluid"/>
                </div>
                
               </div>
               <div className="about-page-contain2">
               <div className="about-page-container-2">
                    <img src="https://favdevs.com/demos/wp/aximo/wp-content/uploads/2023/12/image-12-1.png"
                    className="aboutpage-img-1 img-fluid"/>
                </div>
                <div className="about-page-container-1">
                    <img src="https://favdevs.com/demos/wp/aximo/wp-content/uploads/2023/12/image-11-1536x718.png"
                    className="aboutpage-img-2 img-fluid"/>
                </div>
              
                
               </div>

               <div className="about-page-box">
                <div className="about-page-grid1">
                    <h4 className="apg">Our core vision
                    </h4>
                    <p className="apg-c1">
                    Empowering businesses to create impactful and visually stunning brand experiences that 
                    captivate audiences and drive success in the digital age.
                    </p>
                    <p className="apg-c2">
                    Our team consists of experienced designers, developers. We have a wide variety of skills and backgrounds, allowing us to tackle projects of all sizes and complexities.
                    We believe in the power of imagination and innovation.
                    </p>
                </div>
                <div className="about-page-grid1">
                <h4 className="apg">Our main mission
                </h4>
                <p className="apg-c1">
                Our mission is to collaborate with businesses of all sizes, from startups to established brands, 
                to provide innovative and creative design solutions.
                </p>
                <p className="apg-c2">
                We are committed to creating designs that inspire, connect & our clients in the marketplace. Our focus is on understanding. Our clients’ 
                unique needs and delivery designs that not only meet but exceed their expectations.
                </p>
                </div>
               </div>
               
            </div>
            <HomeMarquee/>
            <HomeTeam/>
        </div>
        </>
    )
}
export default AboutPage