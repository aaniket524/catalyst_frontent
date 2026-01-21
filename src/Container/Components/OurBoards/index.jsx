import React, { useEffect, useState } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';


function OurBoards(params) {
  const [team, setTeam] = useState([])
  const fetchData=async()=>{
    const response = await axios.get('https://api.catalystoutsource.com/backend/boardmember/')
    setTeam(response.data)
    console.log(response.data)
    console.log(team)
  }
  useEffect(()=>{
    fetchData()
  },[])
    return(
        <>
       <div className='main-ourboards block'>
       <div className='ourboards-main'>
            <div className='ourboards'>
                <h1 className='ourboards-head'>Let's Meet Our Board Members
                </h1>
                <div className='ourboards-box'>
             {team &&
             team.map((data)=>
            (
              <div className='ourboards-card'>
              <div className='ourboards-img-wrapper'>
                <img
                  src={`https://api.catalystoutsource.com/${data.image}`}
                  className='ourboards-img'
                />
                <div className='ourboards-icons'>
                  <div className='t-icons'>
                    <FontAwesomeIcon icon={faFacebook} className='ht-icon' />
                  </div>
                  <div className='t-icons'>
                    <FontAwesomeIcon icon={faInstagram} className='ht-icon' />
                  </div>
                  <div className='t-icons'>
                    <FontAwesomeIcon icon={faTwitter} className='ht-icon' />
                  </div>
                  <div className='t-icons'>
                    <FontAwesomeIcon icon={faLinkedin} className='ht-icon' />
                  </div>
                </div>
              </div>
              <h4 className='ourboards-title'>{data.users}</h4>
              <p className='ourboards-prof'>{data.prof}</p>
            </div>
            ))

             }


                </div>
                
            </div>
            
        </div>
       </div>
        </>
    )
}

export default OurBoards