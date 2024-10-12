import React from 'react';
import image1 from '../img/c1.jpg';
import image2 from '../img/c2.jpg';
import image3 from '../img/c3.jpg';
import image4 from '../img/c4.jpg';
import image5 from '../img/c5.jpg';
import image6 from '../img/c6.jpg';


const CollageSection = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="collage-section">
      <h2 className="collage-heading">Our Amazing Gallery</h2>
      <div className="collage-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}   
            alt={`Collage ${index + 1}`}
            className={`collage-image collage-image-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CollageSection;
