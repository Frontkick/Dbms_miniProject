import React, { useState } from 'react';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="navigation-bar">
      <div
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => handleTabClick('home')}
      >
        Home
      </div>
      <div
        className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
        onClick={() => handleTabClick('about')}
      >
        About
      </div>
      <div
        className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
        onClick={() => handleTabClick('contact')}
      >
        Contact
      </div>
    </div>
  );
};

export default NavigationBar;
