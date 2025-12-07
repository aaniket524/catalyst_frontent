import React, { useEffect, useState } from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { CreateSlug } from "../DesignSolution";
import axios from "axios";
import Searchbar from "../Sidebar/Searchbar";
function BlogCard( { categorySlug = null, tagsSlug = null } ){
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const [blogs, setBlogs] = useState([])
       const handleSearch= (query)=>{
        setSearchQuery(query);
    };
 
    const fetchData = async()=>{
        const response = await axios.get('http://127.0.0.1:8000/backend/blogs/')
      
        setBlogs(response.data)
        console.log(response.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(() => {
        const filtered = blogs.filter(blog =>{
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.category.name.toLowerCase().includes(searchQuery.toLowerCase())
          const matchesCategory = categorySlug ? blog.category.slug === categorySlug : true;
          const matchesTags = tagsSlug
          ? blog.tags.some(tag => tag.slug === tagsSlug)
          : true;      
          return matchesSearch && matchesCategory &&  matchesTags;
    });
 


        setFilteredBlogs(filtered);
      }, [searchQuery, blogs, categorySlug, tagsSlug]);
    return(
        <>
    <div className="blog-main-cards">
    <div className="blog-card-main">
          <div className="blogcard-g">
          {filteredBlogs &&
  filteredBlogs.map((data) => {
            return(
                <div className="blog-card block" key={data.id} >
                <div className="blog-card-image">
                    <img src={`http://127.0.0.1:8000/${data.thumbnail}`}
                    className="blog-card-img img-fluid"/>
                </div>
                <div className="blog-card-content">
                    <div className="blog-card-inner-content">
                        <div className="blog-card-inner-categ">
                            <button className="blog-card-categ-btn">{data.category.name}</button>
                        </div>
                        <div className="blog-card-inner-date">
                            <p className="bci-date">
                           {data.created_at}</p>
                        </div>
                    </div>
                    <div className="blog-card-contents">
                        <h4 className="blog-card-title">
                            {data.title}
                        </h4>
                        <p className="blog-card-exert">
                            {data.excerpt}
                            </p>
                           <div className="blog-card-button">
                            <Link to={`/blogs/${(data.category.slug)}/${(data.slug)}`}>
                            <button className="blog-c-btn">Read More <FontAwesomeIcon className="blog-c-btn-icon" icon={faArrowRight}/></button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            )
            
          })
          }
        {filteredBlogs.length === 0 && (
  <div className="blog-card-main">
    <h1 style={{
      marginTop: "40px",
      marginBottom: '40px',
      color: "#999",
      textAlign: "center",
      fontFamily: "var(--body-font)"
    }}>
      {searchQuery ? (
        <>No blog found for "<strong>{searchQuery}</strong>". Try something else.</>
      ) : categorySlug ? (
        <>No blog found in "<strong>{categorySlug.replace(/-/g, ' ')}</strong>" category.</>
      ) : tagsSlug ? (
        <>No blog found with "<strong>{tagsSlug.replace(/-/g, ' ')}</strong>" tag.</>
      ) : (
        <>No blogs found.</>
      )}
    </h1>
    <img src="https://aximo.pixcelsthemes.com/Tailwind/Aximo/assets/img/images/th-1/404-image.svg"
      className="img-fluid" />
  </div>
)}


            {/* <div className="blog-card">
                <div className="blog-card-image">
                    <img src="https://favdevs.com/demos/wp/aximo/wp-content/uploads/2024/02/h6-blog-s-img-02.png"
                    className="blog-card-img img-fluid"/>
                </div>
                <div className="blog-card-content">
                    <div className="blog-card-inner-content">
                        <div className="blog-card-inner-categ">
                            <button className="blog-card-categ-btn">Office Interior</button>
                        </div>
                        <div className="blog-card-inner-date">
                            <p className="bci-date">
                            February 17, 2024</p>
                        </div>
                    </div>
                    <div className="blog-card-contents">
                        <h4 className="blog-card-title">
                        The smartest way to create an office in a small space
                        </h4>
                        <p className="blog-card-exert">Of course, having a dedicated home office with ample storage, room for supplies, and a proper desk setup...</p>
                        <div className="blog-card-button">
                            <button className="blog-c-btn">Read More <FontAwesomeIcon className="blog-c-btn-icon" icon={faArrowRight}/></button>
                        </div>
                    </div>
                </div>
            </div> */}
          </div>
            
           
        </div>
        <div className="blog-sidebar">
            <Searchbar onSearch={handleSearch}/>
                <Sidebar/>
            </div>
    </div>
        </>
    )
}

export default BlogCard