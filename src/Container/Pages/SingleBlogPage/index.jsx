import React, { useEffect, useState } from "react";
import './style.css'
import AllPageHeader from "../../Components/AllPageHeader";
import Sidebar from "../../Components/Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleBlogPage(params) {
    const {slug} = useParams()
    const [blogs, setblogs] = useState([])
    const fetchData = async()=>{
        const response = await axios.get(`http://127.0.0.1:8000/backend/blogs/`)
        const match = response.data.find(item => item.slug === slug);
        setblogs(match)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>
        <AllPageHeader title='Blog title' breadcrumb="Home / blogs /"></AllPageHeader>
        <div className="singleblogpage">
          {
            blogs?.category?.name ?
            ( <div className="singleblogpage-container">
                <div className="sbp-container1">
                   <div className="sbpcontain-image"> <img src={`http://127.0.0.1:8000/${blogs.thumbnail}`}
                    className="sbp-conainer-img img-fluid"/></div>
                     <div className="blog-card-inner-content">
                        <div className="blog-card-inner-categ">
                            <button className="blog-card-categ-btn">{blogs.category.name}</button>
                        </div>
                        <div className="blog-card-inner-date">
                            <p className="bci-date">
                            {blogs.created_at}</p>
                        </div>
                    </div>
                    <div className="single-bp-title">
                        <h1 className="sbp-title">
                            {blogs.title}
                        </h1>
                        <p className="spb-p" dangerouslySetInnerHTML={{__html:blogs.content}}></p>

  </div>
                </div>
                <div className="sbp-container2">
                    <Sidebar/>
                    </div>
            </div>)
            :
            (<p> May be an error</p>)
            
          }
        </div>
        </>
    )
}

export default SingleBlogPage