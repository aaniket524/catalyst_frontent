import React, { useEffect, useState } from "react";
import './style.css';
import axios from 'axios';

function WorkProcess() {
    
    const [workprocess, setWorkProcess] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0); 

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); 
        } else {
            setActiveIndex(index); 
        }
    };
    
    const fetchData = async () => {
        const response = await axios.get('https://api.catalystoutsource.com/backend/workprocess/');
        setWorkProcess(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="main-workprocess block">
            <div className="workprocess-main">
                <div className="workprocess-container">
                    <div className="workprocess-1">
                        <h1 className="workprocess-title">
                            Our high-quality working processes
                        </h1>
                        <p className="workprocess-desc-m">
                            We focus at every stage on effective communication and collaboration between the client and 
                            ensuring that the final design meets the client’s objectives and expectations.
                        </p>
                        <p className="workprocess-desc-m">
                            It is important to note that these are simplified steps, 
                            and the actual work process may vary depending on the complexity of the project.
                        </p>
                    </div>
                    <div className="workprocess-offset"></div>
                    <div className="workprocess-2">
                        {workprocess.map((process, index) => (
                            <div key={index} className={`workprocess-box ${activeIndex === index ? 'active' : ''}`}>
                                <div className="wk-box" onClick={() => handleClick(index)}>
                                    <h4 className="workprocess-h">{process.title}</h4>
                                    <div className="workprocess-cicons-actiive">
                                        {activeIndex === index ? (
                                            <img src={`https://api.catalystoutsource.com/${process.inactiveIcon}`} alt="Inactive Icon" />
                                        ) : (
                                            <img src={`https://api.catalystoutsource.com/${process.activeIcon}`} alt="Active Icon" />
                                        )}
                                    </div>
                                    <div className="workprocess-cicons-inactive"></div>
                                </div>
                                <p className={`workprocess-desc ${activeIndex === index ? 'active' : ''}`}>
                                    The process starts with a detailed discussion with the client 
                                    to understand their idea & goals.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkProcess;


