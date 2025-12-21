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
                <p className="about-page-content">With a strong focus on quality and efficiency, we deliver reliable outsourcing solutions that streamline operations and support scalable growth. Our approach blends skilled expertise with technology to create consistent, results-driven outcomes.
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
                    Our vision is to create a purpose-driven organization that inspires growth, innovation, and long-term impact. We aim to empower individuals and businesses by delivering thoughtful solutions that combine creativity, industry expertise, and modern technology. Through continuous learning & forward-thinking strategies, we strive to adapt to changing needs while maintaining strong ethical values and reliability.
                    </p>
                    <p className="apg-c2">
                    We believe true success comes from balancing performance with purpose. By focusing on quality, collaboration, and intelligent decision-making, we work toward building sustainable systems that help our clients and communities thrive. Our commitment is to remain curious, innovative, and resilient—constantly evolving to shape a smarter, more connected future.
                    </p>
                </div>
                <div className="about-page-grid1">
                <h4 className="apg">Our main mission
                </h4>
                <p className="apg-c1">
                Our mission is to deliver reliable, efficient, and innovative solutions that help organizations optimize operations and achieve sustainable growth. We are committed to maintaining high standards of quality, compliance, and transparency while leveraging modern technologies and skilled expertise. By building strong partnerships and focusing on continuous improvement, we aim to create measurable value, drive long-term success, and support our clients in navigating an ever-evolving business landscape.
                </p>
                <p className="apg-c2">
                Guided by a client-first approach, we align our strategies with business goals to deliver practical, results-driven outcomes. Our focus remains on agility, accountability, and innovation, ensuring that every solution is scalable, secure, and future-ready.
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