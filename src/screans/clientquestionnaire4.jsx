import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import '../css/clientquestion.css';
import React, { useState } from 'react';
import Headmain from '../components/mainhead'
import { useNavigate } from 'react-router-dom';
const Clientquestionnaire4 = () => {
  const steps = [
    { id: 'all', number: '✓', label: 'All', status: 'completed' },
    { id: 'trading', number: '✓', label: 'Trading Information', status: 'completed' },
    { id: 'accounting', number: '✓', label: 'Accounting Information', status: 'completed' },
    { id: 'accruals', number: '✓', label: 'Accruals', status: 'completed' },
    { id: 'hire', number: '4', label: 'Hire Purchase', status: 'current' },
    { id: 'asset', number: '5', label: 'Asset and Investments', status: 'pending' },
    { id: 'income', number: '6', label: 'Other Income', status: 'pending' },
    { id: 'vehicle', number: '7', label: 'Vehicle Expenses', status: 'pending' }
  ];

  // --- Start of new state declarations for the missing variables ---
  const [tradingAnswer, setTradingAnswer] = useState('Yes');
  const [rentalAnswer, setRentalAnswer] = useState('');
  const [showLastYearResponse, setShowLastYearResponse] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false); // New state for "I agree to terms"
  const [confirmChecked, setConfirmChecked] = useState(false); // New state for "I confirm information"
  const [fullName, setFullName] = useState(''); // New state for Full Name input
  const [signature, setSignature] = useState(''); // New state for Signature input
  // --- End of new state declarations ---
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (termsChecked && confirmChecked) {
      // You'd typically send data to a server here, e.g., using fetch or axios
      console.log('Form data:', {
        tradingAnswer,
        rentalAnswer,
        fullName,
        signature,
        termsChecked,
        confirmChecked,
        // ... any other form data
      });
      navigate('/queryresolver');
    } else {
      alert('Please check both checkboxes before submitting.');
    }
  };

  // Helper function for "Copy Paste" in the modal
  const handleCopyPaste = () => {
    // This is the text from your modal body
    const textToCopy = "Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Last year’s response copied!');
        setShowLastYearResponse(false); // Close modal after copying
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text.');
      });
  };

  return (
    // Corrected: Wrap the two main top-level divs with a React Fragment <>...</>
    <>
     <Headmain/>
      <div className="progress-container">
        <div className="progress-wrapper">
          {/* Progress Steps */}
          <div className="progress-bar">
            {/* Left Arrow */}
            <button className="nav-arrow">
              <ChevronLeft size={16} />
            </button>

            {/* Steps Container */}
            <div className="steps-container">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Step Circle and Label */}
                  <div className="step-item">
                    <div className={`step-circle ${step.status}`}>
                      {step.id === 'all' ? (
                        <Check size={20} />
                      ) : (
                        step.number
                      )}
                    </div>
                    <div className="step-label">
                      {step.label}
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`connector ${step.status === 'completed' ? 'completed' : 'pending'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="nav-arrow">
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Legend */}
          <div className="legend">
            <div className="legend-item">
              <div className="legend-dot completed"></div>
              <span>Completed</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot partially"></div>
              <span>Partially Completed</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot pending"></div>
              <span>Pending</span>
            </div>
          </div>
        </div>
        <div className="form-container">
          {/* ///////////////////////////////////////// */}

          {/* Trading Information Section */}
          <div className="section">
            <h2 className="section-title">Trading Information</h2>

            <div className="question-container">
              <div className="question">
                <span className="question-number">1.1</span> Has this entity traded in the financial year? (includes owning rental property or running any business)
              </div>

              <div className="radio-group">
                {['No', 'Yes', 'Unsure'].map((option) => (
                  <div className="radio-option" key={option}>
                    <input
                      type="radio"
                      id={`trading-${option.toLowerCase()}`}
                      name="trading"
                      value={option}
                      checked={tradingAnswer === option}
                      onChange={(e) => setTradingAnswer(e.target.value)}
                    />
                    <label htmlFor={`trading-${option.toLowerCase()}`}>{option}</label>
                  </div>
                ))}
              </div>

              <div className="response-section">
                <div className="edit-link">
                  <button>Edit</button>
                </div>
                <label className="response-label">Response:</label>

                <div style={{ position: 'relative' }}>
                  <textarea
                    className="response-textarea"
                    placeholder="Enter your response here..."
                    // You might want to bind this textarea to a state variable, e.g., tradingResponseText
                  ></textarea>

                  <button
                    className="view-answer-btn"
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      right: 10,
                    }}
                    onClick={() => setShowLastYearResponse(true)}
                  >
                    👁 View Last Year’s Answer
                  </button>
                </div>

                <p className="required-text">
                  <a href="#" className="required-link">Answer is required for this question</a>
                </p>
              </div>
            </div>

            {/* Last Year's Response Popup */}
            {showLastYearResponse && (
              <div className="last-year-modal">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Response (Last Year)</h4>
                    <button
                      className="modal-close-btn"
                      onClick={() => setShowLastYearResponse(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body">
                    <p className="modal-text">
                      Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button className="modal-copy-btn" onClick={handleCopyPaste}>Copy Paste</button> {/* Added onClick */}
                    {/* <button
                      className="modal-close-btn-secondary"
                      onClick={() => setShowLastYearResponse(false)}
                    >
                      Close
                    </button> */}
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Rental Property Section */}
          <div className="section">
            <h3 className="section-title">Rental Property</h3>

            <div className="question-container">
              <div className="question">
                <span className="question-number">1.2</span> Does this entity hold rental property?
              </div>

              <div className="radio-group">
                <div className="radio-option">
                  <input
                    type="radio"
                    id="rental-no"
                    name="rental"
                    value="No"
                    checked={rentalAnswer === 'No'}
                    onChange={(e) => setRentalAnswer(e.target.value)}
                  />
                  <label htmlFor="rental-no">No</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="rental-yes"
                    name="rental"
                    value="Yes"
                    checked={rentalAnswer === 'Yes'}
                    onChange={(e) => setRentalAnswer(e.target.value)}
                  />
                  <label htmlFor="rental-yes">Yes</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="rental-unsure"
                    name="rental"
                    value="Unsure"
                    checked={rentalAnswer === 'Unsure'}
                    onChange={(e) => setRentalAnswer(e.target.value)}
                  />
                  <label htmlFor="rental-unsure">Unsure</label>
                </div>
              </div>

              <div className="response-section">
                <div className="edit-link">
                  <button>Edit</button>
                </div>

                <label className="response-label">Response:</label>
                <textarea
                  className="response-textarea"
                  placeholder=""
                />

                <p className="required-text">
                  <a href="#" className="required-link">Answer is required for this question</a>
                </p>
              </div>
            </div>
          </div>
            <div className="terms-section">
          <h2 className="terms-title">TERMS & CONDITIONS</h2>

          <p className="terms-text">
            By proceeding, you agree to provide accurate and complete financial information. All data shared will be handled confidentially and used strictly for professional accounting, tax, and compliance purposes. You consent to receiving communications electronically and accept that digital documents are valid for official use.
            <a href="#" className="policy-link"> Read Full Policy </a>
          </p>

          <div className="checkbox-container">
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="terms-agree"
                className="checkbox-input"
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
              <label htmlFor="terms-agree" className="checkbox-label">
                I agree to the Terms & Conditions stated above.
              </label>
            </div>
          </div>

          <div className="checkbox-container">
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="confirm-info"
                className="checkbox-input"
                checked={confirmChecked}
                onChange={(e) => setConfirmChecked(e.target.checked)}
              />
              <label htmlFor="confirm-info" className="checkbox-label">
                I confirm that the information I have provided is true and complete.
              </label>
            </div>
          </div>
          <hr />

          <div className="form-section">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="full-name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  className="form-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="signature" className="form-label">Signature</label>
                <input
                  type="text"
                  id="signature"
                  className="form-input signature-input"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                />
              </div>

              <button
                className="submit-button"
                onClick={handleSubmit}
                disabled={!termsChecked || !confirmChecked}
              >
                Submit
              </button>
            </div>

            <div className="signature-info">
              <span className="signature-detail">Signature: {signature || '_______'}</span> {/* Display current signature or placeholder */}
              <span className="signature-detail">Date: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>

            <p className="security-text">
              Your signed acknowledgment will be encrypted and stored securely.<br />
              A copy will be emailed to you for your records.
            </p>
          </div>
        </div>


        </div> {/* Closes form-container */}
      </div> {/* Closes progress-container */}


    </>
  );
};

export default Clientquestionnaire4;