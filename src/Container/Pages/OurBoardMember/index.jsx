import React from "react";
import './style.css'
import OurBoards from "../../Components/OurBoards";
import AllPageHeader from "../../Components/AllPageHeader";
import Leadership from "../../Components/Leadership";

function OurBoardMemberPage(params) {
    return(
        <>
        
        <AllPageHeader title='Our Board Member' breadcrumb='Home / our-board-member'/>
         <OurBoards/>
        
        
       
        
        </>
    )
}

export default OurBoardMemberPage