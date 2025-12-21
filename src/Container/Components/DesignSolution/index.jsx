import React, { useEffect, useState } from "react";
import './style.css';
import { Link } from "react-router-dom";
import axios from "axios";

export const CreateSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .trim();
};

// Helper to build full slug path recursively
const buildFullPath = (service, allServices) => {
    if (!service.parent) return service.slug;
    const parentService = allServices.find(s => s.id === service.parent);
    return parentService ? `${buildFullPath(parentService, allServices)}/${service.slug}` : service.slug;
};

function DesignSolution({ limit = null }) {
    const [service, setService] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('http://api.catalystoutsource.com/backend/multiservice/');
        setService(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Filter top-level items only (parent === null)
    const topLevelServices = service.filter(s => s.parent === null);
    const visibleServices = limit ? topLevelServices.slice(0, limit) : topLevelServices;

    return (
        <div className="main-ds block">
            <div className="designsolution">
                <div className="designsolution-container">
                    <h1 className="designsolution-title">
                        We provide effective & productive solutions
                    </h1>
                    <div className="designsolution-main">
                        {visibleServices && visibleServices.map((data) => {
                            const fullPath = buildFullPath(data, service); // build full path
                            return (
                                <div className="designsolution-grid1" key={data.id}>
                                    <div className="ds-g-image">
                                        <img src={`http://api.catalystoutsource.com/${data.thumbimg}`} className="ds-g-img img-fluid" />
                                    </div>
                                    <h4 className="ds-g-title">{data.title}</h4>
                                    <p className="ds-g-desc">{data.shortdesc}</p>
                                    <Link to={`/our-services/${fullPath}`}>
                                        <img src={`http://api.catalystoutsource.com/${data.redirecticon}`} className="redirect-icon img-fluid" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesignSolution;
