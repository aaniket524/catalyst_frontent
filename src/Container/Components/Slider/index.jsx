import { useEffect, useRef, useState, useCallback } from "react";
import "./style.css";
import Slide1 from "../../../assests/Global_reach.mp4";
import Slide2 from "../../../assests/Partnership_and_success.mp4";
import Slide3 from "../../../assests/Services_snapshot.mp4";
import { Link } from "react-router-dom";
import Slide5 from "../../../assests/newtab.mp4";
import Slide4 from "../../../assests/logoani.mp4";

const slides = [
  {
    title: "Welcome to Catalyst Outsource",
    subtitle: "Your partner in empowering growth through smart outsourcing",
    buttonText: "Get Started",
    src: Slide1,
  },
  {
    title: "Custom Outsourcing Solutions",
    subtitle:
      "We provide tailored Business Process and Custom Oursourcing designed to fit your unique business needs.",
    buttonText: "Learn More",
    src: Slide2,
  },
  {
    title: "Smart Outsourcing",
    subtitle: "Scale smarter with AI-enabled automation",
    buttonText: "Explore Services",
    src: Slide3,
  },
  {
    title: "Global Brand Solutions",
    subtitle:
      "Access global talent with local insight - the perfect blend to accelerate your success.",
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

// Auto-play interval 
const AUTO_PLAY_INTERVAL = 8000;

function Slider() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef([]);
  const thumbVideoRefs = useRef([]);
  const intervalRef = useRef(null);

  // Function to go to next slide
  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  // Function to go to previous slide
  const prev = useCallback(() => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // Auto-play functionality
  useEffect(() => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start new interval if not paused
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        next();
      }, AUTO_PLAY_INTERVAL);
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, next]);

  // Reset timer when manually changing slides
  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        next();
      }, AUTO_PLAY_INTERVAL);
    }
  }, [isPaused, next]);

  // Handle manual navigation
  const handlePrev = () => {
    prev();
    resetTimer();
  };

  const handleNext = () => {
    next();
    resetTimer();
  };

  const handleThumbnailClick = (index) => {
    setActive(index);
    resetTimer();
  };

  // Handle video playback
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

  // Pause on hover handlers
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      {/* MAIN SLIDER */}
      <section
        className="test-slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
                    <Link to="/contact-us">
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
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Slide Counter */}
                <div className="slide-counter">
                  <span className="current">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <span className="separator">/</span>
                  <span className="total">
                    {String(slides.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button className="slider-arrow left" onClick={handlePrev}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="slider-arrow right" onClick={handleNext}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Progress Bar */}
          <div className="slide-progress">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`progress-item ${index === active ? "active" : ""} ${
                  isPaused ? "paused" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
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
                onClick={() => handleThumbnailClick(index)}
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
                  <span className="thumb-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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