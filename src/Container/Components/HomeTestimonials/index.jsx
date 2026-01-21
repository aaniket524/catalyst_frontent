import React, { useEffect, useState } from "react";
import './style.css';
import axios from "axios";
function HomeTestimonials(){
    const [ testimonials, setTestimonials] = useState([])
    const fetchData=async()=>{
        const response = await axios.get('https://api.catalystoutsource.com/backend/testimonials')
        setTestimonials(response.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>
       <div className="main-hometestimonials block">
       <div className="hometestimonials-main">
            <div className="hometestimonials">
                <h1 className="hometestimonials-head">Clients are always satisfied with us
                </h1>

            <div className="hometestimonials-container">
              {testimonials &&
                testimonials.map((data)=>{
                   return(
                    <div className="hometestimonials-box" key={data.id}>
                    <div className="star-box">
                    <div className="5-stars">
                          <img src="https://www.svgrepo.com/show/512912/star-favorite-1499.svg"
                          className="img-fluid fivstar-img"/>
                      </div>
                      <div className="5-stars">
                          <img src="https://www.svgrepo.com/show/512912/star-favorite-1499.svg"
                          className="img-fluid fivstar-img"/>
                      </div>
                      <div className="5-stars">
                          <img src="https://www.svgrepo.com/show/512912/star-favorite-1499.svg"
                          className="img-fluid fivstar-img"/>
                      </div>
                      <div className="5-stars">
                          <img src="https://www.svgrepo.com/show/512912/star-favorite-1499.svg"
                          className="img-fluid fivstar-img"/>
                      </div>
                      <div className="5-stars">
                          <img src="https://www.svgrepo.com/show/512912/star-favorite-1499.svg"
                          className="img-fluid fivstar-img"/>
                      </div>
                    </div>
                    <h4 className="hometestimonial-title">{data.title}
                    </h4>
                    <p className="hometestimonial-desc" dangerouslySetInnerHTML={{__html: data.desc}}></p>
  
                      <div className="hometestimonial-user">
                          <div className="hometestimonial-user-img">
                              <img src={`https://api.catalystoutsource.com/${data.image}` }
                              className="hometestimonial-user-image img-fluid"/>
                          </div>
                          <div className="hometestimonial-user-name">
                              <h4 className="hometestiomnial-name">{data.user}
                              </h4>
                              <p className="hometestimonial-prof">{data.prof}</p>
                          </div>
                      </div>
                  </div>
                   )
                })
              }
                {/* <div className="hometestimonials-box">
                  <div className="star-box">
                  <div className="5-stars">
                        <img src="https://www.svgrepo.com/show/512912/star-favorite-1499.svg"
                        className="img-fluid fivstar-img"/>
                    </div>
                    <div className="5-stars">
                        <img src="https://www.svgrepo.com/show/512912/star-favorite-1499.svg"
                        className="img-fluid fivstar-img"/>
                    </div>
                    <div className="5-stars">
                        <img src="https://www.svgrepo.com/show/512912/star-favorite-1499.svg"
                        className="img-fluid fivstar-img"/>
                    </div>
                    <div className="5-stars">
                        <img src="https://www.svgrepo.com/show/512912/star-favorite-1499.svg"
                        className="img-fluid fivstar-img"/>
                    </div>
                    <div className="5-stars">
                        <img src="https://www.svgrepo.com/show/512912/star-favorite-1499.svg"
                        className="img-fluid fivstar-img"/>
                    </div>
                  </div>
                  <h4 className="hometestimonial-title">Super customer service!
                  </h4>
                  <p className="hometestimonial-desc">Excellent customer service and I was really 
                    impressed and happy with my purchase especially as it was a last minute order 
                    which got to me in time, and when it arrived I was very happy with the design and 
                    size and so was the recipient.</p>

                    <div className="hometestimonial-user">
                        <div className="hometestimonial-user-img">
                            <img src="https://favdevs.com/demos/wp/aximo/wp-content/uploads/2023/12/1.png"
                            className="hometestimonial-user-image img-fluid"/>
                        </div>
                        <div className="hometestimonial-user-name">
                            <h4 className="hometestiomnial-name">William Jack
                            </h4>
                            <p className="hometestimonial-prof">Founder@XYZ</p>
                        </div>
                    </div>
                </div> */}
            </div>
            </div>
        </div>
       </div>
        </>
    )
}

export default HomeTestimonials;