import React, { useEffect, useState } from 'react';
import back from '../img/background.jpg'

const SlideImage = () => {
  const [scrollingDown, setScrollingDown] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`image-container ${scrollingDown ? 'slide-out' : 'slide-in'}`}>
      <img src={back} alt="Sliding" className="sliding-image" />
      <div className={`card-container ${scrollingDown ? 'slide-out' : 'slide-in'}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="card">
            <div className="card-icon">🌟</div>
            <h3>Card Title {index + 1}</h3>
            <p>This is a description for card {index + 1}. It has some information.</p>
            <button className="more-button">More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideImage;
