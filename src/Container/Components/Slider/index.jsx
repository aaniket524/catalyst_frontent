import { useEffect, useRef, useState } from "react";
import "./style.css";
import Slide1 from "../../../assests/Global_reach.MP4";
import Slide2 from "../../../assests/Partnership_and_success.MP4";
import Slide3 from "../../../assests/Services_snapshot.MP4";
import Slide4 from "../../../assests/brands.MP4";
import { Link } from "react-router-dom";
import Slide5 from "../../../assests/newtab.MP4"
const slides = [
  {
    title: "Powering Businesses with AI",
    subtitle: "Smart automation and intelligence for scalable growth",
    buttonText: "Get Started",
    src: Slide1,
  },
  {
    title: "AI Voice Intelligence",
    subtitle: "Audio-driven insights and automation",
    buttonText: "Learn More",
    src: Slide2,
  },
  {
    title: "Smart Outsourcing",
    subtitle: "Optimized processes for smarter growth",
    buttonText: "Explore Services",
    src: Slide3,
  },
  {
    title: "Global Brand Solutions",
    subtitle: "Trusted partnerships for worldwide success",
    buttonText: "Partner With Us",
    src: Slide4,
  },
  {
    title: "Partnership and Success",
    subtitle: "Trusted partner that empowers your business.",
    buttonText: "Partner With Us",
    src: Slide5,
  },
];

function Slider() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef([]);
  const thumbVideoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });

    thumbVideoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active]);

  const prev = () =>
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setActive((prev) => (prev + 1) % slides.length);

  return (
    <>
      {/* MAIN SLIDER */}
      <section className="test-slider">
        <div className="slides-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`test-slide ${index === active ? "active" : ""}`}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="test-media"
                src={slide.src}
                muted
                loop
                playsInline
                preload="auto"
              />

              <div className="overlay" />

              <div className="test-content">
                <div className="content-inner">
                  <span className="slide-tag">Welcome to the Future</span>
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                  <div className="slide-buttons">
                 <Link to='/contact-us'>
                    <button className="btn-primary">
                      {slide.buttonText}
                      <svg 
                        className="btn-arrow" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                 </Link>
                    
                  </div>
                </div>

                {/* Slide Counter */}
                <div className="slide-counter">
                  <span className="current">{String(active + 1).padStart(2, '0')}</span>
                  <span className="separator">/</span>
                  <span className="total">{String(slides.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button className="slider-arrow left" onClick={prev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="slider-arrow right" onClick={next}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Progress Bar */}
          <div className="slide-progress">
            {slides.map((_, index) => (
              <div 
                key={index} 
                className={`progress-item ${index === active ? "active" : ""}`}
                onClick={() => setActive(index)}
              >
                <div className="progress-fill"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THUMBNAILS */}
      <section className="slider-thumbs">
        <div className="container">
          <div className="thumbs-row">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`thumb ${index === active ? "active" : ""}`}
                onClick={() => setActive(index)}
              >
                <video
                  ref={(el) => (thumbVideoRefs.current[index] = el)}
                  src={slide.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="thumb-overlay">
                  <span className="thumb-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;