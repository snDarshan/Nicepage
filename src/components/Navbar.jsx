import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Navbar = () => {
  const [device, setDevice] = useState('desktop');

  const handleDeviceChange = (newDevice) => {
    setDevice(newDevice);
    console.log(`Switched to: ${newDevice}`);
    // Additional logic can be added here to change the layout
  };

  return (
    <nav className={`nav-bar ${device}`}>
      <h1>NicePage</h1>
      <div className='icons'>
        <button onClick={() => handleDeviceChange('desktop')} aria-label="Desktop view">
          <i className="fas fa-desktop"></i>
        </button>
        <button onClick={() => handleDeviceChange('mobile')} aria-label="Mobile view">
          <i className="fas fa-mobile-alt"></i>
        </button>
        <button onClick={() => handleDeviceChange('tablet')} aria-label="Tablet view">
          <i className="fas fa-tablet-alt"></i>
        </button>
        <button onClick={() => handleDeviceChange('laptop')} aria-label="Laptop view">
          <i className="fas fa-laptop"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
