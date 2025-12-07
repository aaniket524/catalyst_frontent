import React from "react";
import './style.css';
import DesignSolution from "../../Components/DesignSolution";
import AllPageHeader from "../../Components/AllPageHeader";

function ServicePage(){
    return(
        <>
        <div className="servicepage">
            <AllPageHeader title='Our Services' breadcrumb='Home / Our Services'/>
            <DesignSolution/>
        </div>
        </>
    )
}
export default ServicePage