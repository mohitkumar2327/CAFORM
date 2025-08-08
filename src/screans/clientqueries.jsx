import React, { useState } from 'react';
import '../css/clientqueries.css';
import Headquerie from '../components/headerqueries';
import { useNavigate } from 'react-router-dom';

const Clientqueries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Pending');
  const [responses, setResponses] = useState({
    1: '',
    2: '',
    3: ''
  });
  const [showAttachmentPopup, setShowAttachmentPopup] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState({});

  const queries = [
    {
      id: 1,
      date: '17/06/2024',
      description: 'Cash withdrawal $500.00 Explanation/receipt Clarify purpose',
      raised: '16/06/2025',
      due: '30/06/2025',
      status: 'Pending'
    },
    {
      id: 2,
      date: '20/01/2025',
      description: 'Payment to XYZ Consulting $1,200.00 Missing invoice Upload invoice please',
      raised: '16/06/2025',
      due: '30/06/2025',
      status: 'Pending'
    },
    {
      id: 3,
      date: '12/04/2024',
      description: 'Purchase - Harvey Norman $2,198.00 Tax Invoice Upload invoice or confirm if personal',
      raised: '16/06/2025',
      due: '30/06/2025',
      status: 'Resolved'
    }
  ];

  const handleResponseChange = (queryId, value) => {
    setResponses(prev => ({
      ...prev,
      [queryId]: value
    }));
  };

  const toggleAttachmentPopup = (queryId) => {
    setShowAttachmentPopup(showAttachmentPopup === queryId ? null : queryId);
  };

  const handleFileChange = (queryId, e) => {
    if (e.target.files[0]) {
      // Handle the file upload here
      console.log(`File selected for query ${queryId}:`, e.target.files[0]);
      
      // Store the uploaded file info
      setUploadedFiles(prev => ({
        ...prev,
        [queryId]: {
          name: e.target.files[0].name,
          file: e.target.files[0]
        }
      }));
      
      setShowAttachmentPopup(null);
    }
  };

  // Check if all pending queries have responses
  const areAllResponsesComplete = () => {
    const pendingQueries = queries.filter(query => query.status === 'Pending');
    
    return pendingQueries.every(query => {
      const response = responses[query.id];
      return response && response.trim().length > 0;
    });
  };

  const handleSave = () => {
    console.log('Saving responses:', responses);
    console.log('Uploaded files:', uploadedFiles);
    navigate('/documentreview');
  };

  const filteredQueries = queries.filter(query =>
    query.status === activeTab &&
    query.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const navigate = useNavigate();

  return (
    <>
      <Headquerie />
      <div className="dashboard-container">
        <div className="dashboard">
          <div className="dashboard-header">
            <div className="header-content">
              <div className="search-container">
                <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="tab-container">
                <button
                  onClick={() => setActiveTab('Pending')}
                  className={`tab ${activeTab === 'Pending' ? 'active' : 'inactive'}`}
                >
                  Pending
                </button>
                <button
                  onClick={() => setActiveTab('Resolved')}
                  className={`tab ${activeTab === 'Resolved' ? 'active' : 'inactive'}`}
                >
                  Resolved
                </button>
              </div>
            </div>
          </div>

          {/* Validation Status Indicator */}
          {activeTab === 'Pending' && (
            <div className="validation-status">
              <div className={`status-indicator ${areAllResponsesComplete() ? 'complete' : 'incomplete'}`}>
                {areAllResponsesComplete() ? (
                  <span className="status-text complete">✓ All responses complete</span>
                ) : (
                  <span className="status-text incomplete">
                    ⚠ {queries.filter(q => q.status === 'Pending' && (!responses[q.id] || !responses[q.id].trim())).length} response(s) required
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="table-container">
            <table className="dashboard-table">
              <thead className="table-header">
                <tr>
                  <th className="table-header-cell number">#</th>
                  <th className="table-header-cell">Queries</th>
                  <th className="table-header-cell">Response</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {filteredQueries.map((query) => (
                  <tr key={query.id} className="table-row">
                    <td className="table-cell number">{query.id}</td>
                    <td className="table-cell">
                      <div className="query-description">{query.description}</div>
                      <div className="query-dates">
                        <span>Raised Date: {query.raised}</span>
                        <span>Due Date: {query.due}</span>
                      </div>
                    </td>
                    <td className="table-cell response">
                      <div className="response-container">
                        <textarea
                          placeholder={query.status === 'Resolved' ? 'Query resolved' : 'Enter your response...'}
                          value={responses[query.id] || ''}
                          onChange={(e) => handleResponseChange(query.id, e.target.value)}
                          className="response-textarea"
                          disabled={query.status === 'Resolved'}
                        />
                        <div className="attachment-wrapper">
                          <button 
                            className="attachment-button"
                            onClick={() => toggleAttachmentPopup(query.id)}
                            disabled={query.status === 'Resolved'}
                            title={uploadedFiles[query.id] ? `File attached: ${uploadedFiles[query.id].name}` : 'Attach file'}
                          >
                            <svg className={`attachment-icon ${uploadedFiles[query.id] ? 'has-file' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            {uploadedFiles[query.id] && (
                              <span className="file-indicator">📎</span>
                            )}
                          </button>
                          {showAttachmentPopup === query.id && (
                            <div className="attachment-popup">
                              <input
                                type="file"
                                id={`file-upload-${query.id}`}
                                onChange={(e) => handleFileChange(query.id, e)}
                                className="file-input"
                                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.txt"
                              />
                              <label htmlFor={`file-upload-${query.id}`} className="file-label">
                                Choose File
                              </label>
                              {uploadedFiles[query.id] && (
                                <div className="current-file">
                                  Current: {uploadedFiles[query.id].name}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="dashboard-footer">
            <button 
              className={`save-button ${!areAllResponsesComplete() ? 'disabled' : ''}`}
              onClick={handleSave}
              disabled={!areAllResponsesComplete()}
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Simple styles for save button */}
      <style jsx>{`
        .save-button.disabled {
          background-color: #6c757d;
          border-color: #6c757d;
          cursor: not-allowed;
          opacity: 0.65;
        }

        .save-button:not(.disabled) {
          background-color: #6064FFFF;
          border-color: #6064FFFF;
        }

        .validation-status {
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .status-indicator {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          display: inline-block;
        }

        .status-indicator.complete {
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          color: #6064FFFF;
        }

        .status-indicator.incomplete {
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
          color: #721c24;
        }
      `}</style>
    </>
  );
};

export default Clientqueries;