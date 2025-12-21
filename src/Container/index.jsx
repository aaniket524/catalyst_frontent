import React from "react";
import { Routes, Route } from "react-router-dom";

import './style.css'
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import PrivacyPage from "./Pages/PrivacyPage";
import Terms from "./Pages/Terms";
import BlogPage from "./Pages/BlogPage";
import ServicePage from "./Pages/ServicePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import SingleService from "./Pages/SingleServicePage";
import SingleBlogPage from "./Pages/SingleBlogPage";
import Categories from "./Pages/BlogPage/Categories";
import Tag from "./Pages/BlogPage/Tag";
import ServiceType from "./Pages/ServiceType";
import VerticalLine from "./Pages/ServiceType/verticalline";
import ServiceHierarchyPage from "./Pages/ServiceHierarchyPage";
import OurBoardMemberPage from "./Pages/OurBoardMember";
import OurLeadership from "./Pages/OurLeadership";

function Container(params) {
    return(
        <>
        <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/our-board-member" element={<OurBoardMemberPage />} />
      <Route path="/our-leadership" element={<OurLeadership />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/our-services" element={<ServicePage />} />
      <Route path="/our-services/serviceline" element={<ServiceType />} />
      <Route path="/our-services/verticalline" element={<VerticalLine />} />
      {/* <Route path="/our-services/:slug" element={<SingleService />} /> */}

      <Route path="/blogs" element={<BlogPage/>} />
      <Route path="/blogs/:category/:slug" element={<SingleBlogPage/>} />
      <Route path="/blogs/:category" element={<Categories/>} />
      <Route path="/blogs/tags/:tag" element={<Tag/>} />


      <Route path="/terms-and-conditions" element={<Terms />} />
      <Route path="/privacy-and-policy" element={<PrivacyPage />} />
      <Route path="/404-page-not-found" element={<PageNotFound />} />
      <Route path="/singleservice" element={<SingleService />} />
      <Route path="/our-services/*" element={<ServiceHierarchyPage />} />


    </Routes>
        </>
    )
}
export default Container