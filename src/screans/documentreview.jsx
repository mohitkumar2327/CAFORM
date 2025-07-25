import React, { useState } from 'react';
import '../css/landingpage.css';
import Header from '../components/header';
import docRevu from '../assets/docrevu.png';
import edit from '../assets/edit.png';
import reload from '../assets/reload.png';

const Documentreview = () => {
  const [welcomeSubtitle, setWelcomeSubtitle] = useState("You have 3 tasks pending across 1 entities. Let's get started.");
  const [activeActionButton, setActiveActionButton] = useState('getStarted');

  const handleGetStartedClick = () => {
    setWelcomeSubtitle("You have 3 tasks pending in 1 entity: Let's get started.");
    setActiveActionButton('getStarted');
  };

  const handleViewRespondClick = () => {
    setWelcomeSubtitle("You have 3 tasks pending in 1 entity: Let's get started.");
    setActiveActionButton('viewRespond');
  };

  const handleViewSignClick = () => {
    setWelcomeSubtitle("You have 2 tasks pending across 2 entities: Let's get started.");
    setActiveActionButton('viewSign');
  };

  return (
    <>
      <Header />

      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <div className="header-section">
            <h1 className="welcome-title">Welcome, John.</h1>
            <p className="welcome-subtitle">{welcomeSubtitle}</p>
          </div>

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

          <div className="main-content-grid">
            {/* General Questionnaire Card */}
            <div className="task-card card-base">
              <div className="card-content">
                <div className="icon-container">
                  <img src={edit} alt="General Questionnaire" className="task-icon" />
                </div>
                <div className="card-text-content">
                  <h3 className="card-title">General</h3>
                  <h3 className="card-title">Questionnaire</h3>
                </div>
                <p className="card-status status-not-started">Not Started</p>
                <button
                  disabled={activeActionButton !== 'getStarted'}
                  className={`btn-secondary ${activeActionButton !== 'viewRespond' ? 'btn-disabled' : ''}`}
                  onClick={handleGetStartedClick}
                >
                  Completed
                </button>
              </div>
            </div>

            {/* Query Resolution Card */}
            <div className="task-card card-base">
              <div className="card-content">
                <div className="icon-container">
                  <img src={reload} alt="Query Resolution" className="task-icon" />
                </div>
                <div className="card-text-content">
                  <h3 className="card-title">Query</h3>
                  <h3 className="card-title">Resolution</h3>
                </div>
                
                <button
                
                  disabled={activeActionButton !== 'viewRespond'}
                  className={`btn-secondary ${activeActionButton !== 'viewRespond' ? 'btn-disabled' : ''}`}
                  onClick={handleViewRespondClick}
                >
                  Completed
                </button>
              </div>
            </div>

            {/* Document Review Card */}
            <div className="task-card card-base">
              <div className="card-content">
                <div className="icon-container">
                  <img src={docRevu} alt="Document Review" className="task-icon" />
                </div>
                <div className="card-text-content">
                  <h3 className="card-title">Document</h3>
                  <h3 className="card-title">Review</h3>
                </div>
                <p className="card-status status-no-queries">2 Documents</p>
                <button
                  disabled={activeActionButton !== 'viewSign'}
                  className={`btn-primary ${activeActionButton !== 'getStarted' ? 'btn-disabled' : ''}`}
                  onClick={handleViewSignClick}
                >
                  View & Sign
                </button>
              </div>
            </div>

            {/* Notifications Panel */}
            <div className="notifications-panel card-base">
              <div className="card-content">
                <h3 className="notifications-title">Notifications</h3>
                <p className="notifications-text">
                  This will show notifications in your notification area and notification drawer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentreview;