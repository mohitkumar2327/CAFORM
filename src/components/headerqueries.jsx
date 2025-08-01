import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import userImage from '../assets/profile.jpg';
import '../css/headermain.css';
import homeIcon from '../assets/home.png';

const Headquerie = () => {
  const userName = useSelector((state) => state.user.name);
  const masterEntityName = useSelector((state) => state.user.masterEntityName);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        <h3>User Name: {userName}</h3>
        <div className="profile-container" ref={dropdownRef}>
          <button className="profile-button" onClick={toggleDropdown}>
            <img src={userImage} alt="profile" />
          </button>
          {isDropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>
                  <button className="dropdown-item">
                    <span>Add Image</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    <span>Add New User</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    <span>Change Password</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    <span>Sign out</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="header-bottom">
        <div className="breadcrumb">
          <img src={homeIcon} alt="Home" className="home-icon" />
          <b><a href="/client-portal">Client Portal <b>&gt;</b> Queries</a></b>
        </div>
        <p>Master Entity name: {masterEntityName}</p>
      </div>
    </div>
  );
};

export default Headquerie;