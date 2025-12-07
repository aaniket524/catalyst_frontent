import React, { useEffect, useState } from "react";
import './style.css'
import { Link, useSearchParams } from "react-router-dom";
import { CreateSlug } from "../DesignSolution";
import axios from "axios";

function RelatedPost(params) {
    const [rblogs, setRblogs] = useState([])
    const fetchData = async()=>{
        const response = await axios.get('http://127.0.0.1:8000/backend/blogs/')
        setRblogs(response.data)
        console.log(response.data)
    }

    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>
        <div className="recentpost-main">
            <div className="recentpost-title">
                <h4 className="rp-title">Recent Posts:</h4>
              <div >
             {
                rblogs &&
                rblogs.map((data)=>{
                    return(
                        <div className="recent-post-container">
                        <div className="recent-post-grid-img">
                            <img src={`http://127.0.0.1:8000/${data.thumbnail}`}
                            className="rpg-img img-fluid"/>
                        </div>
                        <div className="recent-post-grid-content">
                        <p className="rp-g-date">
                        {data.created_at}</p>
                       <Link to={`/blogs/${CreateSlug(data.category.name)}/${CreateSlug(data.title)}`}>
                        <p className="rp-g-heading">
                            {data.title}
                        </p>
                        </Link>
                        </div>
                        
                    </div>
                    )
                })
             }
                {/* <div className="recent-post-container">
                    <div className="recent-post-grid-img">
                        <img src="https://favdevs.com/demos/wp/aximo/wp-content/uploads/2024/02/h6-blog-s-img-02.png"
                        className="rpg-img img-fluid"/>
                    </div>
                    <div className="recent-post-grid-content">
                    <p className="rp-g-date">
                    February 17, 2024</p>
                    <p className="rp-g-heading">
                    The smartest way to create an office....
                    </p>
                    </div>
                </div> */}
              </div>
            </div>
        </div>
        </>
    )
}

export default RelatedPost