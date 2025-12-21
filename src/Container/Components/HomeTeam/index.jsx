import React, { useEffect, useState } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';


function HomeTeam(params) {
  const [team, setTeam] = useState([])
  const fetchData=async()=>{
    const response = await axios.get('http://api.catalystoutsource.com/backend/team/')
    setTeam(response.data)
    console.log(response.data)
    console.log(team)
  }
  useEffect(()=>{
    fetchData()
  },[])
    return(
        <>
       <div className='main-hometeam block'>
       <div className='hometeam-main'>
            <div className='hometeam'>
                <h1 className='hometeam-head'>We have a team of creative people
                </h1>
                <div className='hometeam-box'>
             {team &&
             team.map((data)=>
            (
              <div className='hometeam-card'>
              <div className='hometeam-img-wrapper'>
                <img
                  src={`http://127.0.0.1:8000${data.image}`}
                  className='hometeam-img'
                />
                <div className='hometeam-icons'>
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
              <h4 className='hometeam-title'>{data.users}</h4>
              <p className='hometeam-prof'>{data.prof}</p>
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

export default HomeTeam