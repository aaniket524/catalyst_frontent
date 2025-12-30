import React from "react";
import './style.css'
import Hero from "../../Components/Hero";
import DesignSolution from "../../Components/DesignSolution";
import StandOutSection from "../../Components/StandOutSection";
import ProjectRange from "../../Components/ProjectRange";
import WorkProcess from "../../Components/WorkProcess";
import HomeTestimonials from "../../Components/HomeTestimonials";
import HomeMarquee from "../../Components/HomeMarquee";
import HomeTeam from "../../Components/HomeTeam";
import Slider from "../../Components/Slider";
import Whoweare from "../../Components/WhoAreWe";

function HomePage(params) {
    return(
        <>
        <Slider/>
         
         <Whoweare/>
         <Hero/> 
         <StandOutSection/>
         <ProjectRange/> 
         <HomeTestimonials/>
         <HomeMarquee/>

         <HomeTeam/>
        
       
        
        </>
    )
}

export default HomePage