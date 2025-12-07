import React, { useEffect, useState } from "react";
import './style.css'
import { Link } from "react-router-dom";
import { CreateSlug } from "../DesignSolution";
import axios from "axios";

function Tags(params) {
    const [tags, setTags] = useState([])
    const fetchData = async()=>{
        const response = await axios.get('http://127.0.0.1:8000/backend/blogs/')
        setTags(response.data)
    }

    useEffect(()=>{
        fetchData()
    },[])
   
    return(
        <>
        <div className="tags-main">
            <div className="tags-container">
            {tags &&
                tags.map((data) =>
                    data.tags.map((tag, index) => (
                    <div className="tag1" key={`${tag.slug}-${index}`}>
                        <Link to={`/blogs/tags/${tag.slug}`}>
                        <p className="tag-p">{tag.name}</p>
                        </Link>
                    </div>
                    ))
                )
                }
              
            </div>
        </div>
        </>
    )
}

export default Tags