// import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
// import '../css/clientquestion.css';
// import React, { useState } from 'react';
// import Headmain from '../components/mainhead'
// import { useNavigate } from 'react-router-dom';
// const Clientquestionnaire = () => {
//   const steps = [
//     { id: 'all', number: '✓', label: 'All', status: 'completed' },
//     { id: 'trading', number: '1', label: 'Trading Information', status: 'trading-current' },
//     { id: 'accounting', number: '2', label: 'Accounting Information', status: 'current' },
//     { id: 'accruals', number: '3', label: 'Accruals', status: 'pending' },
//     { id: 'hire', number: '4', label: 'Hire Purchase', status: 'pending' },
//     { id: 'asset', number: '5', label: 'Asset and Investments', status: 'pending' },
//     { id: 'income', number: '6', label: 'Other Income', status: 'pending' },
//     { id: 'vehicle', number: '7', label: 'Vehicle Expenses', status: 'pending' }
//   ];

//   // --- Start of new state declarations for the missing variables ---
//   const [tradingAnswer, setTradingAnswer] = useState('Yes');
//   const [rentalAnswer, setRentalAnswer] = useState('');
//   const [showLastYearResponse, setShowLastYearResponse] = useState(false);
//   const [termsChecked, setTermsChecked] = useState(false); // New state for "I agree to terms"
//   const [confirmChecked, setConfirmChecked] = useState(false); // New state for "I confirm information"
//   const [fullName, setFullName] = useState(''); // New state for Full Name input
//   const [signature, setSignature] = useState(''); // New state for Signature input
//   // --- End of new state declarations ---
//   const navigate = useNavigate();
//   const handleSubmit = () => {
//     if (termsChecked && confirmChecked) {
//       // You'd typically send data to a server here, e.g., using fetch or axios
//       console.log('Form data:', {
//         tradingAnswer,
//         rentalAnswer,
//         fullName,
//         signature,
//         termsChecked,
//         confirmChecked,
//         // ... any other form data
//       });
//       navigate('/queryresolver');
//     } else {
//       alert('Please check both checkboxes before submitting.');
//     }
//   };

//   // Helper function for "Copy Paste" in the modal
//   const handleCopyPaste = () => {
//     // This is the text from your modal body
//     const textToCopy = "Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.";
//     navigator.clipboard.writeText(textToCopy)
//       .then(() => {
//         alert('Last year’s response copied!');
//         setShowLastYearResponse(false); // Close modal after copying
//       })
//       .catch(err => {
//         console.error('Failed to copy text: ', err);
//         alert('Failed to copy text.');
//       });
//   };

//   return (
//     // Corrected: Wrap the two main top-level divs with a React Fragment <>...</>
//     <>
//      <Headmain/>
//       <div className="progress-container">
//         <div className="progress-wrapper">
//           {/* Progress Steps */}
//           <div className="progress-bar">
//             {/* Left Arrow */}
//             <button className="nav-arrow">
//               <ChevronLeft size={16} />
//             </button>

//             {/* Steps Container */}
//             <div className="steps-container">
//               {steps.map((step, index) => (
//                 <React.Fragment key={step.id}>
//                   {/* Step Circle and Label */}
//                   <div className="step-item">
//                     <div className={`step-circle ${step.status}`}>
//                       {step.id === 'all' ? (
//                         <Check size={20} />
//                       ) : (
//                         step.number
//                       )}
//                     </div>
//                     <div className="step-label">
//                       {step.label}
//                     </div>
//                   </div>

//                   {/* Connector Line */}
//                   {index < steps.length - 1 && (
//                     <div className={`connector ${step.status === 'completed' ? 'completed' : 'pending'}`} />
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>

//             {/* Right Arrow */}
//             <button className="nav-arrow">
//               <ChevronRight size={16} />
//             </button>
//           </div>

//           {/* Legend */}
//           <div className="legend">
//             <div className="legend-item">
//               <div className="legend-dot completed"></div>
//               <span>Completed</span>
//             </div>
//             <div className="legend-item">
//               <div className="legend-dot partially"></div>
//               <span>Partially Completed</span>
//             </div>
//             <div className="legend-item">
//               <div className="legend-dot pending"></div>
//               <span>Pending</span>
//             </div>
//           </div>
//         </div>
//         <div className="form-container">
//           {/* ///////////////////////////////////////// */}

//           {/* Trading Information Section */}
//           <div className="section">
//             <h2 className="section-title">Trading Information</h2>

//             <div className="question-container">
//               <div className="question">
//                 <span className="question-number">1.1</span> Has this entity traded in the financial year? (includes owning rental property or running any business)
//               </div>

//               <div className="radio-group">
//                 {['No', 'Yes', 'Unsure'].map((option) => (
//                   <div className="radio-option" key={option}>
//                     <input
//                       type="radio"
//                       id={`trading-${option.toLowerCase()}`}
//                       name="trading"
//                       value={option}
//                       checked={tradingAnswer === option}
//                       onChange={(e) => setTradingAnswer(e.target.value)}
//                     />
//                     <label htmlFor={`trading-${option.toLowerCase()}`}>{option}</label>
//                   </div>
//                 ))}
//               </div>

//               <div className="response-section">
//                 <div className="edit-link">
//                   <button>Edit</button>
//                 </div>
//                 <label className="response-label">Response:</label>

//                 <div style={{ position: 'relative' }}>
//                   <textarea
//                     className="response-textarea"
//                     placeholder="Enter your response here..."
//                     // You might want to bind this textarea to a state variable, e.g., tradingResponseText
//                   ></textarea>

//                   <button
//                     className="view-answer-btn"
//                     style={{
//                       position: 'absolute',
//                       bottom: 10,
//                       right: 10,
//                     }}
//                     onClick={() => setShowLastYearResponse(true)}
//                   >
//                     👁 View Last Year’s Answer
//                   </button>
//                 </div>

//                 <p className="required-text">
//                   <a href="#" className="required-link">Answer is required for this question</a>
//                 </p>
//               </div>
//             </div>

//             {/* Last Year's Response Popup */}
//             {showLastYearResponse && (
//               <div className="last-year-modal">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <h4 className="modal-title">Response (Last Year)</h4>
//                     <button
//                       className="modal-close-btn"
//                       onClick={() => setShowLastYearResponse(false)}
//                     >
//                       ×
//                     </button>
//                   </div>
//                   <div className="modal-body">
//                     <p className="modal-text">
//                       Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.
//                     </p>
//                   </div>
//                   <div className="modal-footer">
//                     <button className="modal-copy-btn" onClick={handleCopyPaste}>Copy Paste</button> {/* Added onClick */}
//                     {/* <button
//                       className="modal-close-btn-secondary"
//                       onClick={() => setShowLastYearResponse(false)}
//                     >
//                       Close
//                     </button> */}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>


//           {/* Rental Property Section */}
//           <div className="section">
//             <h3 className="section-title">Rental Property</h3>

//             <div className="question-container">
//               <div className="question">
//                 <span className="question-number">1.2</span> Does this entity hold rental property?
//               </div>

//               <div className="radio-group">
//                 <div className="radio-option">
//                   <input
//                     type="radio"
//                     id="rental-no"
//                     name="rental"
//                     value="No"
//                     checked={rentalAnswer === 'No'}
//                     onChange={(e) => setRentalAnswer(e.target.value)}
//                   />
//                   <label htmlFor="rental-no">No</label>
//                 </div>
//                 <div className="radio-option">
//                   <input
//                     type="radio"
//                     id="rental-yes"
//                     name="rental"
//                     value="Yes"
//                     checked={rentalAnswer === 'Yes'}
//                     onChange={(e) => setRentalAnswer(e.target.value)}
//                   />
//                   <label htmlFor="rental-yes">Yes</label>
//                 </div>
//                 <div className="radio-option">
//                   <input
//                     type="radio"
//                     id="rental-unsure"
//                     name="rental"
//                     value="Unsure"
//                     checked={rentalAnswer === 'Unsure'}
//                     onChange={(e) => setRentalAnswer(e.target.value)}
//                   />
//                   <label htmlFor="rental-unsure">Unsure</label>
//                 </div>
//               </div>

//               <div className="response-section">
//                 <div className="edit-link">
//                   <button>Edit</button>
//                 </div>

//                 <label className="response-label">Response:</label>
//                 <textarea
//                   className="response-textarea"
//                   placeholder=""
//                 />

//                 <p className="required-text">
//                   <a href="#" className="required-link">Answer is required for this question</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//             <div className="terms-section">
//           <h2 className="terms-title">TERMS & CONDITIONS</h2>

//           <p className="terms-text">
//             By proceeding, you agree to provide accurate and complete financial information. All data shared will be handled confidentially and used strictly for professional accounting, tax, and compliance purposes. You consent to receiving communications electronically and accept that digital documents are valid for official use.
//             <a href="#" className="policy-link"> Read Full Policy </a>
//           </p>

//           <div className="checkbox-container">
//             <div className="checkbox-wrapper">
//               <input
//                 type="checkbox"
//                 id="terms-agree"
//                 className="checkbox-input"
//                 checked={termsChecked}
//                 onChange={(e) => setTermsChecked(e.target.checked)}
//               />
//               <label htmlFor="terms-agree" className="checkbox-label">
//                 I agree to the Terms & Conditions stated above.
//               </label>
//             </div>
//           </div>

//           <div className="checkbox-container">
//             <div className="checkbox-wrapper">
//               <input
//                 type="checkbox"
//                 id="confirm-info"
//                 className="checkbox-input"
//                 checked={confirmChecked}
//                 onChange={(e) => setConfirmChecked(e.target.checked)}
//               />
//               <label htmlFor="confirm-info" className="checkbox-label">
//                 I confirm that the information I have provided is true and complete.
//               </label>
//             </div>
//           </div>
//           <hr />

//           <div className="form-section">
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="full-name" className="form-label">Full Name</label>
//                 <input
//                   type="text"
//                   id="full-name"
//                   className="form-input"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="signature" className="form-label">Signature</label>
//                 <input
//                   type="text"
//                   id="signature"
//                   className="form-input signature-input"
//                   value={signature}
//                   onChange={(e) => setSignature(e.target.value)}
//                 />
//               </div>

//               <button
//                 className="submit-button"
//                 onClick={handleSubmit}
//                 disabled={!termsChecked || !confirmChecked}
//               >
//                 Submit
//               </button>
//             </div>

//             <div className="signature-info">
//               <span className="signature-detail">Signature: {signature || '_______'}</span> {/* Display current signature or placeholder */}
//               <span className="signature-detail">Date: {new Date().toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric'
//               })}</span>
//             </div>

//             <p className="security-text">
//               Your signed acknowledgment will be encrypted and stored securely.<br />
//               A copy will be emailed to you for your records.
//             </p>
//           </div>
//         </div>


//         </div> {/* Closes form-container */}
//       </div> {/* Closes progress-container */}


//     </>
//   );
// };

// export default Clientquestionnaire;


import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import '../css/clientquestion.css'; // Assuming this is the correct CSS file
import React, { useState } from 'react';
import Headmain from '../components/mainhead';

const Clientquestionnaire = () => {
  const [currentStep, setCurrentStep] = useState('trading');

  const steps = [
    { id: 'all', number: '✓', label: 'All' },
    { id: 'trading', number: '1', label: 'Trading Information' },
    { id: 'accounting', number: '2', label: 'Accounting Information' },
    { id: 'accruals', number: '3', label: 'Accruals' },
    { id: 'hire', number: '4', label: 'Hire Purchase' },
    { id: 'asset', number: '5', label: 'Asset and Investments' },
    { id: 'income', number: '6', label: 'Other Income' },
    { id: 'vehicle', number: '7', label: 'Vehicle Expenses' },
  ];

  // Form states
  const [tradingAnswer, setTradingAnswer] = useState('Yes');
  const [rentalAnswer, setRentalAnswer] = useState('');
  const [showLastYearResponse, setShowLastYearResponse] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [signature, setSignature] = useState('');

  // NEW: State to manage all textarea responses
  const [textResponses, setTextResponses] = useState({
    trading: '',
    rental: '',
    accounting: '',
    accruals: '',
    hire: '',
    asset: '',
    income: '',
    vehicle: '',
  });

  const handleResponseChange = (stepId, value) => {
    setTextResponses((prev) => ({
      ...prev,
      [stepId]: value,
    }));
  };

  // Track completed steps
  const [completedSteps, setCompletedSteps] = useState(['all']);

  const getStepStatus = (step) => {
    if (completedSteps.includes(step.id)) return 'completed';
    if (step.id === currentStep) return 'current';
    return 'pending';
  };

  // Step navigation logic
  const handleStepClick = (stepId) => {
    if (stepId === 'all') return;

    if (currentStep !== stepId && !completedSteps.includes(currentStep)) {
      setCompletedSteps((prev) => [...prev, currentStep]);
    }

    setCurrentStep(stepId);
  };

  const handleNextStep = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1];

      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps((prev) => [...prev, currentStep]);
      }

      setCurrentStep(nextStep.id);
    }
  };

  const handlePrevStep = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex > 1) {
      const prevStep = steps[currentIndex - 1];
      setCurrentStep(prevStep.id);
    }
  };

  const handleSubmit = () => {
    if (termsChecked && confirmChecked) {
      alert('Form submitted successfully!');
      console.log('Form data:', {
        tradingAnswer,
        rentalAnswer,
        ...textResponses, // Logs all textarea responses
        fullName,
        signature,
        termsChecked,
        confirmChecked,
      });
    } else {
      alert('Please check both checkboxes before submitting.');
    }
  };

  const handleCopyPaste = () => {
    const textToCopy =
      'Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.';
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Last year's response copied!");
        setTextResponses((prev) => ({ ...prev, trading: textToCopy })); // FIXED: Paste to the correct state
        setShowLastYearResponse(false);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text.');
      });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'trading':
        return (
          <div className="section">
            <h2 className="section-title">Trading Information</h2>
            <div className="question-container">
              <div className="question">
                <span className="question-number">1.1</span> Has this entity
                traded in the financial year? (includes owning rental property
                or running any business)
              </div>

              <div className="radio-group">
                {['No', 'Yes', 'Unsure'].map((option) => (
                  <div className="radio-option" key={option}>
                    <input
                      type="radio"
                      id={`trading-${option.toLowerCase()}`} // FIXED: JSX syntax with backticks
                      name="trading"
                      value={option}
                      checked={tradingAnswer === option}
                      onChange={(e) => setTradingAnswer(e.target.value)}
                    />
                    <label htmlFor={`trading-${option.toLowerCase()}`}>
                      {option}
                    </label>{' '}
                    {/* FIXED: JSX syntax with backticks */}
                  </div>
                ))}
              </div>

              <div className="response-section">
                <label className="response-label">Response:</label>
                <div style={{ position: 'relative' }}>
                  <textarea
                    className="response-textarea"
                    placeholder="Enter your response here..."
                    value={textResponses.trading} // NEW: Connect textarea to state
                    onChange={(e) => handleResponseChange('trading', e.target.value)} // NEW: Handle state change
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
                    👁 View Last Year's Answer
                  </button>
                </div>
                <p className="required-text">
                  <a href="#" className="required-link">
                    Answer is required for this question
                  </a>
                </p>
              </div>
            </div>

            {/* Rental Property Section */}
            <div className="sub-section">
              <h3 className="sub-section-title">Rental Property</h3>
              <div className="question-container">
                <div className="question">
                  <span className="question-number">1.2</span> Does this entity
                  hold rental property?
                </div>

                <div className="radio-group">
                  {['No', 'Yes', 'Unsure'].map((option) => (
                    <div className="radio-option" key={option}>
                      <input
                        type="radio"
                        id={`rental-${option.toLowerCase()}`} // FIXED: JSX syntax
                        name="rental"
                        value={option}
                        checked={rentalAnswer === option}
                        onChange={(e) => setRentalAnswer(e.target.value)}
                      />
                      <label htmlFor={`rental-${option.toLowerCase()}`}>
                        {option}
                      </label>{' '}
                      {/* FIXED: JSX syntax */}
                    </div>
                  ))}
                </div>

                <div className="response-section">
                  <div className="edit-link">
                    <button>Edit</button>
                  </div>
                  <label className="response-label">Response:</label>
                  <textarea
                    className="response-textarea"
                    placeholder=""
                    value={textResponses.rental} // NEW: Connect textarea to state
                    onChange={(e) => handleResponseChange('rental', e.target.value)} // NEW: Handle state change
                  />
                  <p className="required-text">
                    <a href="#" className="required-link">
                      Answer is required for this question
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'accounting':
        return (
          <div className="section">
            <h2 className="section-title">Accounting Information</h2>
            <div className="question-container">
              <div className="question">
                <span className="question-number">2.1</span> What accounting
                method does this entity use?
              </div>
              <div className="radio-group">
                {['Cash', 'Accrual', 'Hybrid'].map((option) => (
                  <div className="radio-option" key={option}>
                    <input
                      type="radio"
                      id={`accounting-${option.toLowerCase()}`} // FIXED: JSX syntax
                      name="accounting"
                      value={option}
                    />
                    <label htmlFor={`accounting-${option.toLowerCase()}`}>
                      {option}
                    </label>{' '}
                    {/* FIXED: JSX syntax */}
                  </div>
                ))}
              </div>
              <div className="response-section">
                <label className="response-label">Response:</label>
                <textarea
                  className="response-textarea"
                  placeholder="Enter your response here..."
                  value={textResponses.accounting} // NEW: Connect textarea to state
                  onChange={(e) => handleResponseChange('accounting', e.target.value)} // NEW: Handle state change
                ></textarea>
              </div>
            </div>
          </div>
        );

      case 'accruals':
        return (
          <div className="section">
            <h2 className="section-title">Accruals</h2>
            <div className="question-container">
              <div className="question">
                <span className="question-number">3.1</span> Are there any
                outstanding accruals for this financial year?
              </div>
              <div className="radio-group">
                {['No', 'Yes', 'Unsure'].map((option) => (
                  <div className="radio-option" key={option}>
                    <input
                      type="radio"
                      id={`accruals-${option.toLowerCase()}`} // FIXED: JSX syntax
                      name="accruals"
                      value={option}
                    />
                    <label htmlFor={`accruals-${option.toLowerCase()}`}>
                      {option}
                    </label>{' '}
                    {/* FIXED: JSX syntax */}
                  </div>
                ))}
              </div>
              <div className="response-section">
                <label className="response-label">Response:</label>
                <textarea
                  className="response-textarea"
                  placeholder="Enter your response here..."
                  value={textResponses.accruals} // NEW: Connect textarea to state
                  onChange={(e) => handleResponseChange('accruals', e.target.value)} // NEW: Handle state change
                ></textarea>
              </div>
            </div>
          </div>
        );

      case 'hire':
        return (
          <div className="section">
            <h2 className="section-title">Hire Purchase</h2>
            <div className="question-container">
              <div className="question">
                <span className="question-number">4.1</span> Does this entity
                have any hire purchase agreements?
              </div>
              <div className="radio-group">
                {['No', 'Yes', 'Unsure'].map((option) => (
                  <div className="radio-option" key={option}>
                    <input
                      type="radio"
                      id={`hire-${option.toLowerCase()}`} // FIXED: JSX syntax
                      name="hire"
                      value={option}
                    />
                    <label htmlFor={`hire-${option.toLowerCase()}`}>
                      {option}
                    </label>{' '}
                    {/* FIXED: JSX syntax */}
                  </div>
                ))}
              </div>
              <div className="response-section">
                <label className="response-label">Response:</label>
                <textarea
                  className="response-textarea"
                  placeholder="Enter your response here..."
                  value={textResponses.hire} // NEW: Connect textarea to state
                  onChange={(e) => handleResponseChange('hire', e.target.value)} // NEW: Handle state change
                ></textarea>
              </div>
            </div>
          </div>
        );

      case 'asset':
        return (
          <div className="section">
            <h2 className="section-title">Asset and Investments</h2>
            <div className="question-container">
              <div className="question">
                <span className="question-number">5.1</span> Does this entity
                hold any significant assets or investments?
              </div>
              <div className="radio-group">
                {['No', 'Yes', 'Unsure'].map((option) => (
                  <div className="radio-option" key={option}>
                    <input
                      type="radio"
                      id={`asset-${option.toLowerCase()}`} // FIXED: JSX syntax
                      name="asset"
                      value={option}
                    />
                    <label htmlFor={`asset-${option.toLowerCase()}`}>
                      {option}
                    </label>{' '}
                    {/* FIXED: JSX syntax */}
                  </div>
                ))}
              </div>
              <div className="response-section">
                <label className="response-label">Response:</label>
                <textarea
                  className="response-textarea"
                  placeholder="Enter your response here..."
                  value={textResponses.asset} // NEW: Connect textarea to state
                  onChange={(e) => handleResponseChange('asset', e.target.value)} // NEW: Handle state change
                ></textarea>
              </div>
            </div>
          </div>
        );

      case 'income':
        return (
          <div className="section">
            <h2 className="section-title">Other Income</h2>
            <div className="question-container">
              <div className="question">
                <span className="question-number">6.1</span> Does this entity
                have any other sources of income?
              </div>
              <div className="radio-group">
                {['No', 'Yes', 'Unsure'].map((option) => (
                  <div className="radio-option" key={option}>
                    <input
                      type="radio"
                      id={`income-${option.toLowerCase()}`} // FIXED: JSX syntax
                      name="income"
                      value={option}
                    />
                    <label htmlFor={`income-${option.toLowerCase()}`}>
                      {option}
                    </label>{' '}
                    {/* FIXED: JSX syntax */}
                  </div>
                ))}
              </div>
              <div className="response-section">
                <label className="response-label">Response:</label>
                <textarea
                  className="response-textarea"
                  placeholder="Enter your response here..."
                  value={textResponses.income} // NEW: Connect textarea to state
                  onChange={(e) => handleResponseChange('income', e.target.value)} // NEW: Handle state change
                ></textarea>
              </div>
            </div>
          </div>
        );

      case 'vehicle':
        return (
          <div className="section">
            <h2 className="section-title">Vehicle Expenses</h2>
            <div className="question-container">
              <div className="question">
                <span className="question-number">7.1</span> Does this entity
                have any vehicle-related expenses?
              </div>
              <div className="radio-group">
                {['No', 'Yes', 'Unsure'].map((option) => (
                  <div className="radio-option" key={option}>
                    <input
                      type="radio"
                      id={`vehicle-${option.toLowerCase()}`} // FIXED: JSX syntax
                      name="vehicle"
                      value={option}
                    />
                    <label htmlFor={`vehicle-${option.toLowerCase()}`}>
                      {option}
                    </label>{' '}
                    {/* FIXED: JSX syntax */}
                  </div>
                ))}
              </div>
              <div className="response-section">
                <label className="response-label">Response:</label>
                <textarea
                  className="response-textarea"
                  placeholder="Enter your response here..."
                  value={textResponses.vehicle} // NEW: Connect textarea to state
                  onChange={(e) => handleResponseChange('vehicle', e.target.value)} // NEW: Handle state change
                ></textarea>
              </div>
            </div>

            {/* Terms & Conditions for the last step */}
            <div className="terms-section">
              <h2 className="terms-title">TERMS & CONDITIONS</h2>
              <p className="terms-text">
                By proceeding, you agree to provide accurate and complete
                financial information. All data shared will be handled
                confidentially and used strictly for professional accounting,
                tax, and compliance purposes. You consent to receiving
                communications electronically and accept that digital documents
                are valid for official use.
                <a href="#" className="policy-link">
                  {' '}
                  Read Full Policy{' '}
                </a>
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
                    I confirm that the information I have provided is true and
                    complete.
                  </label>
                </div>
              </div>

              <div className="form-section">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="full-name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      className="form-input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="signature" className="form-label">
                      Signature
                    </label>
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
                  <span className="signature-detail">
                    Signature: {signature || '_'}
                  </span>
                  <span className="signature-detail">
                    Date:{' '}
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <p className="security-text">
                  Your signed acknowledgment will be encrypted and stored
                  securely.
                  <br />A copy will be emailed to you for your records.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Headmain />
      <div className="progress-container">
        <div className="progress-wrapper">
          {/* Progress Steps */}
          <div className="progress-bar">
  <button className="nav-arrow" onClick={handlePrevStep} disabled={currentStep === 'trading'}>
    <ChevronLeft size={16} />
  </button>

  <div className="steps-container">
    <div className="progress-line"></div>
    {steps.map((step) => {
      const status = getStepStatus(step);
      return (
        <div key={step.id} className="step-item">
          <button
            className={`step-circle ${status}`}
            onClick={() => handleStepClick(step.id)}
            disabled={step.id === 'all'}
          >
            {status === 'completed' ? <Check size={20} /> : step.number}
          </button>
          <div className="step-label">{step.label}</div>
        </div>
      );
    })}
  </div>

  <button className="nav-arrow" onClick={handleNextStep} disabled={currentStep === 'vehicle'}>
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

        <div className="form-container">{renderStepContent()}</div>

        {/* Last Year's Response Modal */}
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
                  Yes, the entity has traded during the financial year. We
                  operated our business and generated income from those
                  activities.
                </p>
              </div>
              <div className="modal-footer">
                <button className="modal-copy-btn" onClick={handleCopyPaste}>
                  Copy Paste
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Clientquestionnaire;