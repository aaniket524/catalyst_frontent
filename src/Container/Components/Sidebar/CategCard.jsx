import React, { useEffect, useState } from "react";
import './style.css'
import { Link } from "react-router-dom";
import { CreateSlug } from "../DesignSolution";
import axios from "axios";

function CategCard(params) {
    const [categ, setCateg] = useState([])
    const fetchData = async()=>{
        try {
            const response = await axios.get('http://api.catalystoutsource.com/backend/blogs/');
            setCateg(response.data);
            console.log(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

    useEffect(()=>{
        fetchData()
    },[])
   
    return(
        <>
        <div className="categcard">
            <div className="categcard-main">
                <h4 className="categcard-title">
                Categories:
                </h4>
               {
                categ.map((items)=>{
                    return(
                        <div className="categcard-lists">
                        <div className="categcard-list">
                            <div className="categcard--title">
                                <Link to={`/blogs/${items.category.slug}`}>
                                <p className="categcard-title-p">{items.category.name}</p>
                                </Link>
                            </div>
                            {/* <div className="categcard-count">
                                <p className="categcard-count-p">(1)</p>
                            </div> */}
                        </div>
                        {/* <div className="categcard-list">
                            <div className="categcard--title">
                                <p className="categcard-title-p">Home Decor</p>
                            </div>
                            <div className="categcard-count">
                                <p className="categcard-count-p">(1)</p>
                            </div>
                        </div> */}
                    </div>
                    )
                })
               }
            </div>
        </div>
        </>
    )
}

export default CategCard