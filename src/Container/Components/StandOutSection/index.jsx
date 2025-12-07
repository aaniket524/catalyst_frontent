import React, { useEffect, useState, useRef } from "react";
import './style.css';
import numberimage from './../../../assests/numbersec.png';


function StandOutSection(params) {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const targetCount1 = 20;
    const targetCount2 = 100;
    const targetCount3 = 30;
    const targetCount4 = 50;

    const duration = 10000; 
    const startTimeRef = useRef(null);
    const animationFrameRef = useRef(null);
    // const intervalTime = duration / targetCount ; 
  
    useEffect(() => {
        
        const animate = (timestamp) => {
            if (!startTimeRef.current) {
              startTimeRef.current = timestamp;
            }
      
            const elapsed = timestamp - startTimeRef.current;
            const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
            setCount1(Math.floor(progress * targetCount1));
            setCount2(Math.floor(progress * targetCount2));
            setCount3(Math.floor(progress * targetCount3));
            setCount4(Math.floor(progress * targetCount4));
            
            if (progress < 1) {
                
              animationFrameRef.current = requestAnimationFrame(animate);
            }
          };
      
          animationFrameRef.current = requestAnimationFrame(animate);
          return () => {
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current);
            }
          };
        }, [targetCount1, targetCount2, targetCount3, targetCount4, duration]);
            
      return(
        <>
      <div className="main-standout block">  <div className="standoutsection-main">
            <div className="standoutsection-container">
                <div className="sos-head">
                    <h2 className="sos-h">We make your business stand out
                    </h2>
                </div>
                <div className="sos-offset"> </div>
                    <div className="sos-desc">
                        <p className="sos-p">We work closely with our clients to know their objectives, unique needs, and the best outsourcing solutions.
                        </p>
                   
                </div>
            </div>
            <div className="sos-container">
                <div className="sos-imagepart">
                    <img src={numberimage}
                    className="sos-img img-fluid"/>
                </div>
                <div className="sos--offset">

                </div>
                <div className="sos-box">
                    <div className="inner-sos-box">
                    <span className="sos-counter"> {count1}+</span>
                    <span className="sos-counter-title">Years of experience</span>
                    </div>
                    <div className="inner-sos-box">
                    <span className="sos-counter">{count2}+</span>
                    <span className="sos-counter-title">Successful projects
                    </span>
                    </div>
                    <div className="inner-sos-box">
                    <span className="sos-counter">{count3}+</span>
                    <span className="sos-counter-title">Countries Served
                    </span>
                    </div>
                    <div className="inner-sos-box">
                    <span className="sos-counter">{count4}+</span>
                    <span className="sos-counter-title">Process Redesign
                    </span>
                    </div>
                </div>
            </div>
        </div></div>
        </>
    )
}

export default StandOutSection;