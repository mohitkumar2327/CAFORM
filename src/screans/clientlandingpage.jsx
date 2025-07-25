import React from 'react';
import docRevu from '../assets/docrevu.png';     // Your document review icon
import edit from '../assets/edit.png';           // Your general questionnaire icon  
import reload from '../assets/reload.png';       // Your query resolution icon (replace with your custom icon)

const Landingpg = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="header-section">
          <h1 className="welcome-title">Welcome, John.</h1>
          <p className="welcome-subtitle">You have 3 tasks pending across 2 entities. Let's get started.</p>
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
              <button className="btn-primary">
                Get Started
              </button>
              <p className="due-date">Due Date: 04/07/25</p>
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
              <p className="card-status status-no-queries">No Queries</p>
              <button className="btn-secondary">
                View & Respond
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
              <button className="btn-secondary">
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
  );
};

export default Landingpg;
