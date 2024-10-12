import React, { useEffect, useRef } from 'react';
import backgroundImage from '../img/contact-background.jpg'; // Ensure you have a background image

const ContactSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftDiv = leftRef.current;
    const rightDiv = rightRef.current;

    const handleScroll = () => {
      const rect = leftDiv.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        leftDiv.classList.add('slide-in-left');
        rightDiv.classList.add('slide-in-right');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="contact-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="contact-details" ref={leftRef}>
        <h2>Contact Us</h2>
        <p>Any questions or remarks? Just write us a message!</p>
        <div>
          <h3>Sydney</h3>
          <p>45 Pirrama Rd, Pyrmont NSW 2022</p>
        </div>
        <div>
          <h3>Melbourne</h3>
          <p>163 Collins St, Melbourne VIC 3000</p>
        </div>
        <div>
          <h3>Los Angeles</h3>
          <p>340 Main St, Venice CA 902291, USA</p>
        </div>
      </div>
      <div className="contact-form" ref={rightRef}>
        <h2>Get in Touch</h2>
        <p>Have an inquiry or some feedback for us? Fill out the form below to contact our team.</p>
        <form>
          <label>
            Name
            <input type="text" placeholder="Enter your Name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="Enter a valid email address" required />
          </label>
          <label>
            How can we help?
            <textarea placeholder="Your message here..." required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
