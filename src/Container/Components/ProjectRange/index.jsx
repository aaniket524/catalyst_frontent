import React from "react";
import './style.css'
import Project1 from '../../../assests/project1.png';
import Project2 from '../../../assests/project2.png';
function ProjectRange(params) {
    
  const cards = [
    { id: 1, title: "AI & Automation", url:'https://aximo.pixcelsthemes.com/Tailwind/Aximo/assets/img/images/th-1/project-img-3.jpg' },
    { id: 2, title: "Web Development", url:"https://aximo.pixcelsthemes.com/Tailwind/Aximo/assets/img/images/th-1/project-img-2.jpg" },
    { id: 3, title: "UI/UX Design", url:"https://aximo.pixcelsthemes.com/Tailwind/Aximo/assets/img/images/th-1/project-img-1.jpg"  },
    { id: 4, title: "Consulting",  url:"https://aximo.pixcelsthemes.com/Tailwind/Aximo/assets/img/images/th-1/project-img-4.jpg"  },
    { id: 5, title: "Machine Learning",  url:"https://aximo.pixcelsthemes.com/Tailwind/Aximo/assets/img/images/th-1/project-img-2.jpg"  },
    { id: 6, title: "App Development",  url:"https://aximo.pixcelsthemes.com/Tailwind/Aximo/assets/img/images/th-1/project-img-1.jpg"  },
  ];
    return(<>
    <div className="main-projectRange"><div className="projectrange-main">
        <div className="projectrange">
            <div className="projectrange-h">
                <h1 className="projectrange-heading">
                Smarter Automation, Faster outcomes
                </h1>
            </div>
            <div className="projectrange-container">
                <div className="pr-box1">
                <div className="pr-box-img">
                <img src={Project1}
                    className="projectrange-image img-fluid"/>
                </div>
                {/* <div className="pr-box-content">
                    <div className='pr-box-content-part'>
                    <h4 className="pr-box-title">
                        Project Design
                    </h4>
                    <p className="pr-box-dec">
                        Developing a wide range of physical products, aesthetics, and functionality
                    </p>
                    </div>
                    <div className="pr-box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" 
                    viewBox="0 0 34 28" fill="none">
                    <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                </div> */}
                </div>
                <div className="pr-box1">
                <div className="pr-box-img">
                <img src={Project2}
                    className="projectrange-image img-fluid"/>
                </div>
                <div className="pr-box-content">
                    {/* <div className='pr-box-content-part'>
                    <h4 className="pr-box-title">
                        Project Design
                    </h4>
                    <p className="pr-box-dec">
                        Developing a wide range of physical products, aesthetics, and functionality
                    </p>
                    </div>
                    <div className="pr-box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" 
                    viewBox="0 0 34 28" fill="none">
                    <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div> */}
                </div>
                </div>
            </div>
        </div>

    </div></div>
    </>)
}

export default ProjectRange;