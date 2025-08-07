import React, { useState } from 'react';
import '../css/landingpage.css';
import Header from '../components/header';
import docRevu from '../assets/docrevu.png';
import edit from '../assets/edit.png';
import reload from '../assets/reload.png';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
  
  const handleViewSignClick = () => {
    setWelcomeSubtitle("You have 2 tasks pending across 2 entities: Let's get started.");
    setActiveActionButton('viewSign');
    navigate('/documentsign');
  };

  return (
    <>
      <Header />

      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <div className="header-section">
                      <h1 className="welcome-title">Welcome, John.</h1>
                      <p className="welcome-subtitle">{welcomeSubtitle}</p>
                      
                      {/* Dropdown filters moved here - below welcome subtitle */}
                      <div className="custom-dropdown-container">
                        <div className="custom-dropdown-wrapper">
                          <select className="custom-dropdown-select">
                            <option>Sample Company Ltd</option>
                            <option>Another Company Inc</option>
                            <option>Test Corporation</option>
                          </select>
                          <div className="custom-dropdown-arrow">
                            <FiChevronDown className="custom-arrow-icon" />
                          </div>
                        </div>
          
                        <div className="custom-dropdown-wrapper">
                          <select className="custom-dropdown-select">
                            <option>FY 2025</option>
                            <option>FY 2024</option>
                            <option>FY 2023</option>
                          </select>
                          <div className="custom-dropdown-arrow">
                            <FiChevronDown className="custom-arrow-icon" />
                          </div>
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
                  // FIX: Change 'disabled' logic to make the button clickable
                  // You can remove the 'disabled' prop entirely, or update the state.
                  // For this example, let's assume it should be clickable.
                  className="btn-primary" // Use the default enabled class
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