import React from "react";
import './style.css'
import CategCard from "./CategCard";
import Searchbar from "./Searchbar";
import RelatedPost from "./RelatedPost";
import Tags from "./Tags";

function Sidebar(params) {
    return(< div className="main-sidebar-div block">

    {/* <Searchbar/> */}
    <CategCard/>
    <RelatedPost/>
    <Tags/>
    </div>)

}
export default Sidebar