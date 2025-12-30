import React, { useEffect, useState } from "react";
import './style.css';
import ManojMalik from '../../../assests/malik.png';

function Leadership() {
  return (
    <section className="leadership-section py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <div className="leadership-img-wrapper">
              <img
                src={ManojMalik} 
                alt="Manoj Malik - Founder & CEO"
                className="img-fluid rounded-circle leadership-img"
              />
            </div>
          </div>

          <div className="col-lg-8">
            <h2 className="leadership-title">Manoj Malik</h2>

            <p className="leadership-role">Founder & Chief Executive Officer</p>

            <p className="leadership-text">
              With over <strong>19 years of global experience</strong> in finance operations and process
              transformation, Manoj Malik brings a rare blend of strategic insight and operational
              excellence to the helm of Catalyst Outsource Pvt. Ltd.
            </p>

            <p className="leadership-text">
              Before founding Catalyst Outsource, Manoj led multi-tower finance functions at
              <strong> Multinational Company</strong>, managing teams across the USA, Canada, and 12 Latin American
              countries. He spearheaded automation and compliance initiatives that set industry
              benchmarks.
            </p>

            <p className="leadership-text">
              His vision is rooted in precision, transparency, and innovation. With deep expertise
              in PTP, OTC, and RTR processes, he is committed to building scalable solutions that
              empower businesses to streamline operations and unlock growth.
            </p>

            <p className="leadership-text">
              A certified Lean and Six Sigma professional, Manoj believes in leading with integrity,
              nurturing talent, and delivering noiseless execution—making Catalyst Outsource a
              strategic partner, not just a service provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
