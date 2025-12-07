import React from "react";
// import './style.css';

import AllPageHeader from "../../Components/AllPageHeader";
import Vertical from "../../Components/DesignSolution/vertical";

function VerticalLine(){
    return(
        <>
        <div className="VerticalLine">
            <AllPageHeader title='Our Services' breadcrumb='Home / Our Services'/>
            <Vertical/>
        </div>
        </>
    )
}
export default VerticalLine