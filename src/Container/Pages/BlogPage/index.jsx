import React from "react";
import './style.css';
import AllPageHeader from "../../Components/AllPageHeader";
import BlogCard from "../../Components/BlogCard";

function BlogPage(){
    return(
        <>
        <AllPageHeader title='Blogs' breadcrumb='Home / Blogs'/> 
        <BlogCard/>
        </>
    )
}
export default BlogPage