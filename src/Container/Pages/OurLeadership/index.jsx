import React from "react";
import './style.css'
import AllPageHeader from "../../Components/AllPageHeader";
import Leadership from "../../Components/Leadership";

function OurLeadership(params) {
    return(
        <>
        
        <AllPageHeader title='Our Leadership' breadcrumb='Home / our-leadership'/>
         <Leadership/>
        
       
        
        </>
    )
}

export default OurLeadership