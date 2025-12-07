import React from "react";
import './style.css';

function AllPageHeader({title,breadcrumb}) {
    return(
        <>
          <div className='aboutpage-main-part' data-aos='fade-in'>
          <div className="aph-main">
            <h1 className="aph-head"  >{title}</h1>
            <p className="aph-breadcrumb">{breadcrumb}</p>
            </div>
       </div>
        </>
    )
}
export default AllPageHeader