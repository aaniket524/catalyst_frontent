import React, { useEffect, useState } from "react";
import './style.css'
import HomeTestimonials from "../../Components/HomeTestimonials";
import AllPageHeader from "../../Components/AllPageHeader";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function SingleService(params) {
    const {slug} = useParams()
    const [singleserv, setSingleServ] = useState()
    const fetchData= async()=>{    
        const response = await axios.get(`http://127.0.0.1:8000/backend/single-services/${slug}/`)
        // const match = response.singleserv.find(item => item.slug === slug);
        // setSingleServ(match);
        setSingleServ(response.data);
        console.log(response.data)
        // console.log(data)
        // setSingleServ(response.data)

    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>
        <AllPageHeader title='Service Detail' breadcrumb='Home / Service Detail' />

        <div className="singleservicepage-main">

          {
            singleserv &&
            singleserv  ?
            ( <div className="singleservice-container">
                <div className="singleservice-image">
                    <img src="https://favdevs.com/demos/wp/aximo/wp-content/uploads/2023/12/image-1536x711.png"
                    className="singleservice-main-img img-fluid"/>
                </div>
                <div className="singleservice-content">
                    <h1 className="singleservice-title">UI/UX for modern product development
                    </h1>
                    <p className="singleservicep-1" dangerouslySetInnerHTML={{__html:singleserv.fulldesc}}>
 
               </p>
                    {/* <p className="singleservicep-2">They are often used interchangeably, but they refer to different aspects of the design and user interaction process. Here’s a brief overview of each:
                    </p> */}
              
                    <div className="singleservice-grid">
                        <div className="singleservice-g-1" dangerouslySetInnerHTML={{__html:singleserv.featureone}}>
                           
                        </div>
                        <div className="singleservice-g-2" dangerouslySetInnerHTML={{__html:singleserv.featuretwo}}>
                     
                            {/* <h4 className="singleservice-g-title">
                            2/ User Experience (UX):
              
                            </h4>
                            <div className="ss-g-ul">
                            <ul>
                                <li>
                                UX focuses on the overall experience of the user when interacting with a product. It encompasses how users feel when they use the product and how easy or challenging it is to accomplish their goals.
                                </li>
                                <li>
                                UX designers work to understand the user's needs, behaviors, and pain points, and they design the product maximizes user satisfaction.
                                </li>
                                <li>
                                Key aspects of UX design include research, information architecture, wireframing, prototyping, usability testing, and user journey mapping.
                                </li>
                            </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="singleservice-grid1">
                        <div className="ssg1-1">
                            <h1 className="ssg1-1-title">
                            Our Approach
                            </h1>
                            <p className="ssg1-1-content">
                            The working approach for {singleserv.service.title} involves a series of steps and methodologies to ensure that the user interface and user experience. Here’s a typical approach to UI/UX design:
                            </p>
                            <div className="ssg1-1-ul">
                                <div className="ssg1-1icon">
                                    <img src={`http://127.0.0.1:8000${singleserv.processicon1}`}
                                    className="ssg1-1icon-img img-fluid"/>
                                </div>
                                <div className="ssg1-1-txt" dangerouslySetInnerHTML={{__html:singleserv.process}}>
                                   
                                </div>
                            </div>
 
                           <Link to='contact-us'> <p className="ssg1-1-content" dangerouslySetInnerHTML={{__html: singleserv.pricing}}>
 
 </p></Link>
                          
                         
                        </div>
                        <div className="ssg1-1offset"></div>
                        <div className="ssg1-2">
                            <img src={`http://127.0.0.1:8000${singleserv.moreimg}`}
                            className="ssg1-2-img img-fluid"/>
                        </div>
                    </div>
                </div>
              </div>): 
            (

                <p>eror</p>
            )
           
        
          }

        </div>
        <HomeTestimonials/>

        </>
    )
}

export default SingleService