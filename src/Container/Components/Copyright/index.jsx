import React from "react";
import './style.css';
import mainlogo from '../../../assests/updatedlogo.png';
function Copyright(params) {
   return(
    <>
    <div className="main-c">
    <div className="copyright">
        <div className="copyright-main">
            <div className="copy-img">
                <img src={mainlogo}
                className="img-fluid copy-image"/>
            </div>
            <div className="copy-content">
               <p className="copy-text">© Copyright 2025, All Rights Reserved by Catalyst Outsource</p>
            </div>
        </div>
    </div>
    </div>
    </>
   ) 
}

export default Copyright