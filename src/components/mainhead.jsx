import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector hook
import userImage from '../assets/profile.jpg';
import '../css/headermain.css';
import homeIcon from '../assets/home.png';

const Headmain = () => {
  // Use useSelector to grab the state from the Redux store
  const userName = useSelector((state) => state.user.name);
  const masterEntityName = useSelector((state) => state.user.masterEntityName);

  return (
    <div className='header'>
      <div className="header-top">
        <div className="dropdown-filters-container">
            <div className="dropdown-wrapper">
              <select className="dropdown-select">
                <option>Sample Company Ltd</option>
              </select>
              <div className="dropdown-arrow">
                <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="dropdown-wrapper">
              <select className="dropdown-select">
                <option>FY 2025</option>
              </select>
              <div className="dropdown-arrow">
                <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
        </div>
        {/* Now the name is dynamic, coming from Redux state */}
        <h3>User Name: {userName}</h3>
        <div className="profile">
          <img src={userImage} alt="profile" />
        </div>
      </div>
      <div className="header-bottom">
        <div className="breadcrumb">
          <img src={homeIcon} alt="Home" className="home-icon" />
          <b><a href="/client-portal">Client Portal <b>&gt;</b> General Questionnaire</a></b>
        </div>
        {/* The entity name is also dynamic */}
        <p>Master Entity name: {masterEntityName}</p>
      </div>
    </div>
  );
};

export default Headmain;