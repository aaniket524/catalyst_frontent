import React, { useEffect, useState } from "react";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTop(params) {
    const [isHalfScrolled, setIsHalfScrolled] = useState(false)
  const scrollTop=()=>{
    window.scrollTo({top:0, left:0, behavior:"smooth"})
  }
  const scrollBottom=()=>{
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }

  useEffect(()=>{
    const handleScroll = ()=>{
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (scrollTop > (documentHeight / 2 - windowHeight / 2)) {
            setIsHalfScrolled(true);
          } else {
            setIsHalfScrolled(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        // Clean up the event listener when component is removed
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
   
    return(
        <>
          <button className="scrolltop" onClick={isHalfScrolled ? scrollTop :scrollBottom}>
        {
        isHalfScrolled ?  
      
        <FontAwesomeIcon className="scrollicon" icon={faArrowUp}/>
        
        :  
       
        <FontAwesomeIcon className="scrollicon" icon={faArrowDown}/>
       
        }
        </button> 
            
      
        {/* onClick={isHalfScrolled ? scrollToTop : scrollToBottom}
        // style={{}}
        // >
     */}
        </>
    )
}

export default ScrollToTop