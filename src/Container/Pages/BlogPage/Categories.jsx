import React from "react";
import './style.css';
import AllPageHeader from "../../Components/AllPageHeader";
import BlogCard from "../../Components/BlogCard";
import { useParams } from "react-router-dom";

function Categories(){
    const {category} = useParams()
    return(
        <>
        <AllPageHeader title={category.toLocaleUpperCase().replace(/-/g, ' ')}  
        breadcrumb={`Home / Blogs / ${category.replace(/-/g, ' ')}`} /> 
        <BlogCard categorySlug={category}/>
        </>
    )
}
export default Categories