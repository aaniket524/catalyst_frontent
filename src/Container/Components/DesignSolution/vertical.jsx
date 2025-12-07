import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const CreateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

function Vertical({ limit = null }) {
  const [service, setService] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/backend/multiservice/"
    );
    setService(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const visibleServices = limit ? service.slice(0, limit) : service;

  const primaryServices = visibleServices.filter(
    (item) => item.service_type === "primary"
  );

  return (
    <>
      <div className="main-ds block">
        <div className="designsolution">
          <div className="designsolution-container">
            <h1 className="designsolution-title">We provide effective design solutions</h1>

            <div className="designsolution-main">
              {primaryServices.map((data) => (
                <div className="designsolution-grid1" key={data.id}>
                  
                  <div className="ds-g-image">
                    <img
                      src={`http://127.0.0.1:8000${data.thumbimg}`}
                      className="ds-g-img img-fluid"
                      alt={data.title}
                    />
                  </div>

                  <div className="blog-card-inner-categ">
                    <strong className="innercat">{data.service_type}</strong>
                  </div>

                  <h4 className="ds-g-title">{data.title}</h4>

                  <p className="ds-g-desc">{data.shortdesc}</p>

                  <Link to={`/our-services/${data.slug}`}>
                    <img
                      src={`http://127.0.0.1:8000${data.redirecticon}`}
                      className="redirect-icon img-fluid"
                      alt="redirect icon"
                    />
                  </Link>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vertical;
