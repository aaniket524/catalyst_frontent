import React from "react";
// import './style.css';

import AllPageHeader from "../../Components/AllPageHeader";
import ServiceLine from "../../Components/DesignSolution/serviceline";

function ServiceType(){
    return(
        <>
        <div className="servicetype">
            <AllPageHeader title='Our Services' breadcrumb='Home / Our Services'/>
            <ServiceLine/>
        </div>
        </>
    )
}
export default ServiceType