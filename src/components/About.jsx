import React, { useEffect, useRef, useState } from 'react';

import aboutImage from '../img/about-image.jpg'; 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when not in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    const currentRef = sectionRef.current; // Copy the ref value to a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className={`about ${isVisible ? 'fade-in' : ''}`} ref={sectionRef}>
      <h2 className={`about-heading ${isVisible ? 'pop-in' : ''}`}>A Wide Variety Of Premium Services We Offer
      </h2>
      <div className="about-content">
        <div className={`about-image ${isVisible ? 'slide-in-left' : ''}`}>
          <img src={aboutImage} alt="About" />
        </div>
        <div className={`about-info ${isVisible ? 'slide-in-up' : ''}`}>
          <div className="column">
            
            <p><i className="fas fa-paint-brush"></i> UI/UX Design </p>
            <p><i className="fas fa-mobile-alt"></i> App Development </p>
            <p><i className="fas fa-pen-fancy"></i> Logo Development </p>
            <p><i className="fas fa-chart-line"></i> SEO and Branding </p>
          </div>
          <div className="column">
            
            <p><i className="fas fa-bullhorn"></i> Digital Marketing </p>
            <p><i className="fas fa-images"></i> Graphic Design </p>
            <p><i className="fas fa-desktop"></i> Website Design </p>
            <p><i className="fas fa-file-alt"></i> Web Post </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
