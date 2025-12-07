import React from "react";
import './style.css';
import star from '../../../assests/star-dot-svgrepo-com.svg'
import sun from '../../../assests/sun-star-svgrepo-com.svg'


function HomeMarquee(params) {
    return(<>
    <div className="homemarquee-main ">
        <div className="homemarquee block">
        <marquee>
            <span className="marquee-image"> <img src={sun}
        className="img-fluid marquee-img"/></span>
            <span className="marquee-text ">
            Let's create new experiences
            </span>
            <span className="marquee-image"> <img src={sun}
        className="img-fluid marquee-img"/></span>
        <span className="marquee-text">
            Let's create new experiences
            </span>
            <span className="marquee-image"> <img src={sun}
        className="img-fluid marquee-img"/></span>
        <span className="marquee-text">
            Let's create new experiences
            </span>
            <span className="marquee-image"> <img src={sun}
        className="img-fluid marquee-img"/></span>
        </marquee>
        </div>
    </div>
    </>)
}

export default HomeMarquee