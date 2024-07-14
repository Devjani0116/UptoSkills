import React from 'react';
import { FaHackerrank } from 'react-icons/fa'; // Replace with your preferred icon
import './index.css';

const Navbar = ({ step }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <FaHackerrank className="icon" />
      </div>
      <div className="hackathon-info">
        <div className="hackathon-name">Hackathon Name</div>
        <div className="institution-name">Institution Name</div>
      </div>
      <div className="progress-bar" style={{ width: step === 1 ? '50%' : '100%' }}></div>
    </div>
  );
};

export default Navbar;
