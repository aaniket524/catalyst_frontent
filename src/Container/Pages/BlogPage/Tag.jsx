import React from "react";
import './style.css';
import AllPageHeader from "../../Components/AllPageHeader";
import BlogCard from "../../Components/BlogCard";
import { useParams } from "react-router-dom";

function Tag(){
    const {tag} = useParams()
    return(
        <>
        <AllPageHeader title={tag.toLocaleLowerCase().replace(/-/g, ' ')}  
        breadcrumb={`Home / Blogs / ${tag.replace(/-/g, ' ')}`} /> 
        <BlogCard tagsSlug={tag}/>
        </>
    )
}
export default Tag