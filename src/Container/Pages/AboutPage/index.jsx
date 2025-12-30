import React from "react";
import './style.css';
import StandOutSection from "../../Components/StandOutSection";
import HomeMarquee from "../../Components/HomeMarquee";
import HomeTeam from "../../Components/HomeTeam";
import AllPageHeader from "../../Components/AllPageHeader";
import About1 from "../../../assests/aboutimage1.JPG";
import About2 from "../../../assests/aboutimage2.JPG";
import About3 from "../../../assests/aboutimage3.JPG";
import About4 from "../../../assests/aboutimage4.JPG";

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
                <p className="about-page-content">With a strong focus on quality and efficiency, we deliver reliable outsourcing solutions that streamline operations and support scalable growth. Our approach blends skilled expertise with technology to create consistent, results-driven outcomes.
                </p>
               </div>
               <div className="about-page-contain1">
                <div className="about-page-container1">
                    <img src={About2}
                    className="aboutpage-img-2 img-fluid"/>
                </div>
                <div className="about-page-container2">
                    <img src={About1}
                    className="aboutpage-img-1 img-fluid"/>
                </div>
                
               </div>
               <div className="about-page-contain2">
               <div className="about-page-container-2">
                    <img src={About4}
                    className="aboutpage-img-1 img-fluid"/>
                </div>
                <div className="about-page-container-1">
                    <img src={About3}
                    className="aboutpage-img-2 img-fluid"/>
                </div>
              
                
               </div>

               <div className="about-page-box">
                <div className="about-page-grid1">
                    <h4 className="apg">Our core vision
                    </h4>
                    <p className="apg-c1">
                    To redefine global outsourcing through intelligent automation, operational excellence, and visual clarity—empowering businesses to scale with confidence, precision, and purpose.
                    </p>
                </div>
                <div className="about-page-grid1">
                <h4 className="apg">Our main mission
                </h4>
                <p className="apg-c1">
                To empower businesses with scalable, tech-enabled outsourcing solutions that combine operational rigor, intelligent automation, and visual clarity—delivering consistent value through process excellence and trusted execution.
                </p>
                </div>
               </div>
            {/* WHY CHOOSE US SECTION */}
              <div className="why-choose-us">
                <div className="why-choose-header">
                  <h2 className="why-title">Why Choose Us</h2>
                  <p className="why-subtitle">
                    We combine experience, innovation, and commitment to deliver
                    solutions that truly make a difference.
                  </p>
                </div>

                <div className="why-grid">
                  <div className="why-card">
                    <h4 className="apg">Industry-Focused Expertise</h4>
                    <p className="apg-c1">
                      We bring deep domain knowledge across financial services and multiple industry verticals. Our understanding of complex processes, compliance requirements, and operational challenges enables us to deliver solutions that are practical, reliable, and results-driven.
                    </p>
                  </div>

                  <div className="why-card">
                    <h4 className="apg">End-to-End Outsourcing Solutions</h4>
                    <p className="apg-c1">
                      From finance and accounting to vendor management and billing operations, we provide comprehensive, end-to-end services. This integrated approach helps streamline workflows, reduce operational silos, and ensure consistent outcomes across the value chain.
                    </p>
                  </div>

                  <div className="why-card">
                    <h4 className="apg">Intelligent Automation & Technology</h4>
                    <p className="apg-c1">
                      We leverage RPA, AI, Intelligent Document Processing, and business intelligence to transform traditional processes into smart, automated systems. Our technology-driven solutions improve accuracy, speed, and scalability while reducing manual effort and rework.
                    </p>
                  </div>

                  <div className="why-card">
                    <h4 className="apg">Outcome-Driven Approach</h4>
                    <p className="apg-c1">
                      Our solutions are designed to grow with your business. By focusing on measurable outcomes, transparency, and continuous optimization, we help organizations achieve sustainable cost savings, improved efficiency, and long-term success.
                    </p>
                  </div>
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