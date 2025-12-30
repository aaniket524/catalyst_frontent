import React from "react";
import "./style.css";
import handshake from "../../../assests/handshake.svg";
import cpu from "../../../assests/cpu.svg";
import chart from "../../../assests/file-chart-pie.svg";
import check from "../../../assests/package-check.svg";


function Whoweare() {
  return (
    <section className="who-we-are-glass">
      <div className="who-overlay" />

      <div className="who-container">
        <div className="who-header">
          <span className="who-eyebrow">ABOUT CATALYST OUTSOURCE</span>
          <h2 className="who-title">Who We Are</h2>

          <p className="who-description">
            At <strong>Catalyst Outsource</strong>, we partner with growing
            businesses to design smarter outsourcing ecosystems. By combining
            operational discipline, technology-driven processes, and strategic
            collaboration, we help brands scale with clarity and confidence.
          </p>
        </div>

        <div className="who-grid">
          <div className="who-card">
            <img src={cpu} alt="Tech Enabled BPO" className="who-icon" />
            <h4>Tech-Enabled BPO Solutions</h4>
            <p>
              Intelligent outsourcing frameworks powered by automation,
              analytics, and scalable platforms.
            </p>
          </div>

          <div className="who-card">
            <img src={check} alt="Process Compliance" className="who-icon" />
            <h4>Process & Compliance Excellence</h4>
            <p>
              Transparent workflows built with compliance, governance, and
              operational efficiency at the core.
            </p>
          </div>

          <div className="who-card">
            <img src={chart} alt="Visual Storytelling" className="who-icon" />
            <h4>Visual & Strategic Storytelling</h4>
            <p>
              We simplify complexity through process diagrams, dashboards, and
              executive-ready presentations.
            </p>
          </div>

          <div className="who-card">
            <img src={handshake} alt="Partnership Model" className="who-icon" />
            <h4>Collaborative Partnership Model</h4>
            <p>
              We work as an extension of your team — aligning solutions with
              your business goals and brand identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whoweare;
