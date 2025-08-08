// import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
// import '../css/clientquestion.css';
// import React, { useState } from 'react';
// import Headmain from '../components/mainhead'
// import { useNavigate } from 'react-router-dom';

// const Clientquestionnaire = () => {
//     const [currentPage, setCurrentPage] = useState('trading');

//     const steps = [
//         { id: 'all', number: '✓', label: 'All', status: 'completed' },
//         { id: 'trading', number: '1', label: 'Trading Information', status: 'pending' },
//         { id: 'accounting', number: '2', label: 'Accounting Information', status: 'pending' },
//         { id: 'accruals', number: '3', label: 'Accruals', status: 'pending' },
//         { id: 'hire', number: '4', label: 'Hire Purchase', status: 'pending' },
//         { id: 'asset', number: '5', label: 'Asset and Investments', status: 'pending' },
//         { id: 'income', number: '6', label: 'Other Income', status: 'pending' },
//         { id: 'vehicle', number: '7', label: 'Vehicle Expenses', status: 'pending' }
//     ];

//     const [tradingAnswer, setTradingAnswer] = useState('Yes');
//     const [rentalAnswer, setRentalAnswer] = useState('');
//     const [accountingAnswer, setAccountingAnswer] = useState('');
//     const [accrualsAnswer, setAccrualsAnswer] = useState('');
//     const [hireAnswer, setHireAnswer] = useState('');
//     const [assetAnswer, setAssetAnswer] = useState('');
//     const [incomeAnswer, setIncomeAnswer] = useState('');
//     const [vehicleAnswer, setVehicleAnswer] = useState('');

//     const [showLastYearResponse, setShowLastYearResponse] = useState(false);
//     const [termsChecked, setTermsChecked] = useState(false);
//     const [confirmChecked, setConfirmChecked] = useState(false);
//     const [fullName, setFullName] = useState('');
//     const [signature, setSignature] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = () => {
//         if (termsChecked && confirmChecked) {
//             console.log('Form data:', {
//                 tradingAnswer,
//                 rentalAnswer,
//                 accountingAnswer,
//                 accrualsAnswer,
//                 hireAnswer,
//                 assetAnswer,
//                 incomeAnswer,
//                 vehicleAnswer,
//                 fullName,
//                 signature,
//                 termsChecked,
//                 confirmChecked,
//             });
//             navigate('/queryresolver');
//         } else {
//             alert('Please check both checkboxes before submitting.');
//         }
//     };

//     const handleCopyPaste = () => {
//         const textToCopy = "Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.";
//         navigator.clipboard.writeText(textToCopy)
//             .then(() => {
//                 alert('Last year’s response copied!');
//                 setShowLastYearResponse(false);
//             })
//             .catch(err => {
//                 console.error('Failed to copy text: ', err);
//                 alert('Failed to copy text.');
//             });
//     };

//     const handleStepClick = (stepId) => {
//         setCurrentPage(stepId);
//     };

//     return (
//         <>
//             <Headmain />
//             <div className="progress-container">
//                 <div className="progress-wrapper">
//                     <div className="progress-bar">
//                         <button className="nav-arrow">
//                             <ChevronLeft size={16} />
//                         </button>
//                         <div className="steps-container">
//                             <div className="progress-line"></div>
//                             {steps.map((step, index) => {
//                                 let status = 'pending';
//                                 const currentPageIndex = steps.findIndex(s => s.id === currentPage);
//                                 if (index < currentPageIndex) {
//                                     status = 'completed';
//                                 } else if (step.id === currentPage) {
//                                     status = 'current';
//                                 }
//                                 if (step.id === 'all') {
//                                     status = 'completed';
//                                 }
//                                 if (step.id === 'trading' && currentPage === 'trading') {
//                                     status = 'trading-current';
//                                 }

//                                 return (
//                                     <React.Fragment key={step.id}>
//                                         <button
//                                             className="step-item"
//                                             onClick={() => handleStepClick(step.id)}
//                                         >
//                                             <div className={`step-circle ${status}`}>
//                                                 {status === 'completed' && step.id !== 'all' ? (
//                                                     <Check size={20} />
//                                                 ) : (
//                                                     step.number
//                                                 )}
//                                             </div>
//                                             <div className="step-label">
//                                                 {step.label}
//                                             </div>
//                                         </button>
//                                         {/* {index < steps.length - 1 && (
//                                             <div className={`connector ${index < currentPageIndex ? 'completed' : 'pending'}`} />
//                                         )} */}
//                                     </React.Fragment>
//                                 );
//                             })}
//                         </div>
//                         <button className="nav-arrow">
//                             <ChevronRight size={16} />
//                         </button>
//                     </div>
//                     <div className="legend">
//                         <div className="legend-item">
//                             <div className="legend-dot completed"></div>
//                             <span>Completed</span>
//                         </div>
//                         <div className="legend-item">
//                             <div className="legend-dot partially"></div>
//                             <span>Partially Completed</span>
//                         </div>
//                         <div className="legend-item">
//                             <div className="legend-dot pending"></div>
//                             <span>Pending</span>
//                         </div>
//                     </div>
//                 </div>

//                 {currentPage === 'trading' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Trading Information</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">1.1</span> Has this entity traded in the financial year? (includes owning rental property or running any business)
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`trading-${option.toLowerCase()}`}
//                                                 name="trading"
//                                                 value={option}
//                                                 checked={tradingAnswer === option}
//                                                 onChange={(e) => setTradingAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`trading-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <div className="edit-link">
//                                         <button>Edit</button>
//                                     </div>
//                                     <label className="response-label">Response:</label>
//                                     <div style={{ position: 'relative' }}>
//                                         <textarea
//                                             className="response-textarea"
//                                             placeholder="Enter your response here..."
//                                         ></textarea>
//                                         <button
//                                             className="view-answer-btn"
//                                             onClick={() => setShowLastYearResponse(true)}
//                                         >
//                                             👁 View Last Year’s Answer
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="section">
//                             <h3 className="section-title">Rental Property</h3>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">1.2</span> Does this entity hold rental property?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`rental-${option.toLowerCase()}`}
//                                                 name="rental"
//                                                 value={option}
//                                                 checked={rentalAnswer === option}
//                                                 onChange={(e) => setRentalAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`rental-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <div className="edit-link">
//                                         <button>Edit</button>
//                                     </div>
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder=""
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'accounting' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Accounting Information</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">2.1</span> Do you have any accounting-related information or queries?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`accounting-${option.toLowerCase()}`}
//                                                 name="accounting"
//                                                 value={option}
//                                                 checked={accountingAnswer === option}
//                                                 onChange={(e) => setAccountingAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`accounting-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details about any accounting information or questions you have."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'accruals' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Accruals</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">3.1</span> Do you have any information about accruals or prepayments?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`accruals-${option.toLowerCase()}`}
//                                                 name="accruals"
//                                                 value={option}
//                                                 checked={accrualsAnswer === option}
//                                                 onChange={(e) => setAccrualsAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`accruals-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details about any accruals or prepayments."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'hire' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Hire Purchase</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">4.1</span> Do you have any hire purchase agreements?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`hire-${option.toLowerCase()}`}
//                                                 name="hire"
//                                                 value={option}
//                                                 checked={hireAnswer === option}
//                                                 onChange={(e) => setHireAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`hire-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any hire purchase agreements."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'asset' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Asset and Investments</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">5.1</span> Have you acquired or disposed of any assets or investments?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`asset-${option.toLowerCase()}`}
//                                                 name="asset"
//                                                 value={option}
//                                                 checked={assetAnswer === option}
//                                                 onChange={(e) => setAssetAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`asset-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any assets or investments."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'income' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Other Income</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">6.1</span> Have you received any other types of income (e.g., dividends, interest)?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`income-${option.toLowerCase()}`}
//                                                 name="income"
//                                                 value={option}
//                                                 checked={incomeAnswer === option}
//                                                 onChange={(e) => setIncomeAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`income-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any other income received."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'vehicle' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Vehicle Expenses</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">7.1</span> Do you have any business vehicle expenses to declare?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`vehicle-${option.toLowerCase()}`}
//                                                 name="vehicle"
//                                                 value={option}
//                                                 checked={vehicleAnswer === option}
//                                                 onChange={(e) => setVehicleAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`vehicle-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any vehicle expenses."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="terms-section">
//                             <h2 className="terms-title">TERMS & CONDITIONS</h2>
//                             <p className="terms-text">
//                                 By proceeding, you agree to provide accurate and complete financial information. All data shared will be handled confidentially and used strictly for professional accounting, tax, and compliance purposes. You consent to receiving communications electronically and accept that digital documents are valid for official use.
//                                 <a href="#" className="policy-link"> Read Full Policy </a>
//                             </p>
//                             <div className="checkbox-container">
//                                 <div className="checkbox-wrapper">
//                                     <input
//                                         type="checkbox"
//                                         id="terms-agree"
//                                         className="checkbox-input"
//                                         checked={termsChecked}
//                                         onChange={(e) => setTermsChecked(e.target.checked)}
//                                     />
//                                     <label htmlFor="terms-agree" className="checkbox-label">
//                                         I agree to the Terms & Conditions stated above.
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className="checkbox-container">
//                                 <div className="checkbox-wrapper">
//                                     <input
//                                         type="checkbox"
//                                         id="confirm-info"
//                                         className="checkbox-input"
//                                         checked={confirmChecked}
//                                         onChange={(e) => setConfirmChecked(e.target.checked)}
//                                     />
//                                     <label htmlFor="confirm-info" className="checkbox-label">
//                                         I confirm that the information I have provided is true and complete.
//                                     </label>
//                                 </div>
//                             </div>
//                             <hr />
//                             <div className="form-section">
//                                 <div className="form-row">
//                                     <div className="form-group">
//                                         <label htmlFor="full-name" className="form-label">Full Name</label>
//                                         <input
//                                             type="text"
//                                             id="full-name"
//                                             className="form-input"
//                                             value={fullName}
//                                             onChange={(e) => setFullName(e.target.value)}
//                                         />
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="signature" className="form-label">Signature</label>
//                                         <input
//                                             type="text"
//                                             id="signature"
//                                             className="form-input signature-input"
//                                             value={signature}
//                                             onChange={(e) => setSignature(e.target.value)}
//                                         />
//                                     </div>
//                                     <button
//                                         className="submit-button"
//                                         onClick={handleSubmit}
//                                         disabled={!termsChecked || !confirmChecked}
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                                 <div className="signature-info">
//                                     <span className="signature-detail">Signature: {signature || '_______'}</span>
//                                     <span className="signature-detail">Date: {new Date().toLocaleDateString('en-US', {
//                                         year: 'numeric',
//                                         month: 'long',
//                                         day: 'numeric'
//                                     })}</span>
//                                 </div>
//                                 <p className="security-text">
//                                     Your signed acknowledgment will be encrypted and stored securely.<br />
//                                     A copy will be emailed to you for your records.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {showLastYearResponse && (
//                     <div className="last-year-modal">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h4 className="modal-title">Response (Last Year)</h4>
//                                 <button className="modal-close-btn" onClick={() => setShowLastYearResponse(false)}>×</button>
//                             </div>
//                             <div className="modal-body">
//                                 <p className="modal-text">
//                                     Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.
//                                 </p>
//                             </div>
//                             <div className="modal-footer">
//                                 <button className="modal-copy-btn" onClick={handleCopyPaste}>Copy Paste</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Clientquestionnaire;



///////////////////////////////////////








// claude night

// import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
// import '../css/clientquestion.css';
// import React, { useState } from 'react';
// import Headmain from '../components/mainhead'
// import { useNavigate } from 'react-router-dom';

// const Clientquestionnaire = () => {
//     const [currentPage, setCurrentPage] = useState('trading');

//     const steps = [
//         { id: 'all', number: '✓', label: 'All', status: 'completed' },
//         { id: 'trading', number: '1', label: 'Trading Information', status: 'pending' },
//         { id: 'accounting', number: '2', label: 'Accounting Information', status: 'pending' },
//         { id: 'accruals', number: '3', label: 'Accruals', status: 'pending' },
//         { id: 'hire', number: '4', label: 'Hire Purchase', status: 'pending' },
//         { id: 'asset', number: '5', label: 'Asset and Investments', status: 'pending' },
//         { id: 'income', number: '6', label: 'Other Income', status: 'pending' },
//         { id: 'vehicle', number: '7', label: 'Vehicle Expenses', status: 'pending' }
//     ];

//     const [tradingAnswer, setTradingAnswer] = useState('Yes');
//     const [rentalAnswer, setRentalAnswer] = useState('');
//     const [accountingAnswer, setAccountingAnswer] = useState('');
//     const [accrualsAnswer, setAccrualsAnswer] = useState('');
//     const [hireAnswer, setHireAnswer] = useState('');
//     const [assetAnswer, setAssetAnswer] = useState('');
//     const [incomeAnswer, setIncomeAnswer] = useState('');
//     const [vehicleAnswer, setVehicleAnswer] = useState('');

//     const [showLastYearResponse, setShowLastYearResponse] = useState(false);
//     const [termsChecked, setTermsChecked] = useState(false);
//     const [confirmChecked, setConfirmChecked] = useState(false);
//     const [fullName, setFullName] = useState('');
//     const [signature, setSignature] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = () => {
//         if (termsChecked && confirmChecked) {
//             console.log('Form data:', {
//                 tradingAnswer,
//                 rentalAnswer,
//                 accountingAnswer,
//                 accrualsAnswer,
//                 hireAnswer,
//                 assetAnswer,
//                 incomeAnswer,
//                 vehicleAnswer,
//                 fullName,
//                 signature,
//                 termsChecked,
//                 confirmChecked,
//             });
//             navigate('/queryresolver');
//         } else {
//             alert('Please check both checkboxes before submitting.');
//         }
//     };

//     const handleCopyPaste = () => {
//         const textToCopy = "Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.";
//         navigator.clipboard.writeText(textToCopy)
//             .then(() => {
//                 alert(`Last year's response copied!`);
//                 setShowLastYearResponse(false);
//             })
//             .catch(err => {
//                 console.error('Failed to copy text: ', err);
//                 alert('Failed to copy text.');
//             });
//     };

//     const handleStepClick = (stepId) => {
//         setCurrentPage(stepId);
//     };

//     // Navigation helper functions
//     const getCurrentStepIndex = () => {
//         return steps.findIndex(step => step.id === currentPage);
//     };

//     const handlePrevious = () => {
//         const currentIndex = getCurrentStepIndex();
//         if (currentIndex > 1) { // Skip 'all' step (index 0)
//             setCurrentPage(steps[currentIndex - 1].id);
//         }
//     };

//     const handleNext = () => {
//         const currentIndex = getCurrentStepIndex();
//         if (currentIndex < steps.length - 1) {
//             setCurrentPage(steps[currentIndex + 1].id);
//         }
//     };

//     const isPreviousDisabled = () => {
//         const currentIndex = getCurrentStepIndex();
//         return currentIndex <= 1; // Disable if at first step (trading) or 'all' step
//     };

//     const isNextDisabled = () => {
//         const currentIndex = getCurrentStepIndex();
//         return currentIndex >= steps.length - 1; // Disable if at last step
//     };

//     return (
//         <>
//             <Headmain />
//             <div className="progress-container">
//                 <div className="progress-wrapper">
//                     <div className="progress-bar">
//                         <button className="nav-arrow" onClick={handlePrevious} disabled={isPreviousDisabled()}>
//                             <ChevronLeft size={16} />
//                         </button>
//                         <div className="steps-container">
//                             <div className="progress-line"></div>
//                             {steps.map((step, index) => {
//                                 let status = 'pending';
//                                 const currentPageIndex = steps.findIndex(s => s.id === currentPage);
//                                 if (index < currentPageIndex) {
//                                     status = 'completed';
//                                 } else if (step.id === currentPage) {
//                                     status = 'current';
//                                 }
//                                 if (step.id === 'all') {
//                                     status = 'completed';
//                                 }
//                                 if (step.id === 'trading' && currentPage === 'trading') {
//                                     status = 'trading-current';
//                                 }

//                                 return (
//                                     <React.Fragment key={step.id}>
//                                         <button
//                                             className="step-item"
//                                             onClick={() => handleStepClick(step.id)}
//                                         >
//                                             <div className={`step-circle ${status}`}>
//                                                 {status === 'completed' && step.id !== 'all' ? (
//                                                     <Check size={20} />
//                                                 ) : (
//                                                     step.number
//                                                 )}
//                                             </div>
//                                             <div className="step-label">
//                                                 {step.label}
//                                             </div>
//                                         </button>
//                                         {/* {index < steps.length - 1 && (
//                                             <div className={`connector ${index < currentPageIndex ? 'completed' : 'pending'}`} />
//                                         )} */}
//                                     </React.Fragment>
//                                 );
//                             })}
//                         </div>
//                         <button className="nav-arrow" onClick={handleNext} disabled={isNextDisabled()}>
//                             <ChevronRight size={16} />
//                         </button>
//                     </div>
//                     <div className="legend">
//                         <div className="legend-item">
//                             <div className="legend-dot completed"></div>
//                             <span>Completed</span>
//                         </div>
//                         <div className="legend-item">
//                             <div className="legend-dot partially"></div>
//                             <span>Partially Completed</span>
//                         </div>
//                         <div className="legend-item">
//                             <div className="legend-dot pending"></div>
//                             <span>Pending</span>
//                         </div>
//                     </div>
//                 </div>

//                 {currentPage === 'trading' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Trading Information</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">1.1</span> Has this entity traded in the financial year? (includes owning rental property or running any business)
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`trading-${option.toLowerCase()}`}
//                                                 name="trading"
//                                                 value={option}
//                                                 checked={tradingAnswer === option}
//                                                 onChange={(e) => setTradingAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`trading-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <div className="edit-link">
//                                         <button>Edit</button>
//                                     </div>
//                                     <label className="response-label">Response:</label>
//                                     <div style={{ position: 'relative' }}>
//                                         <textarea
//                                             className="response-textarea"
//                                             placeholder="Enter your response here..."
//                                         ></textarea>
//                                         <button
//                                             className="view-answer-btn"
//                                             onClick={() => setShowLastYearResponse(true)}
//                                         >
//                                             👁 View Last Year's Answer
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="section">
//                             <h3 className="section-title">Rental Property</h3>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">1.2</span> Does this entity hold rental property?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`rental-${option.toLowerCase()}`}
//                                                 name="rental"
//                                                 value={option}
//                                                 checked={rentalAnswer === option}
//                                                 onChange={(e) => setRentalAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`rental-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <div className="edit-link">
//                                         <button>Edit</button>
//                                     </div>
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder=""
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation">
//                             <button 
//                                 className="nav-btn prev-btn" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'accounting' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Accounting Information</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">2.1</span> Do you have any accounting-related information or queries?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`accounting-${option.toLowerCase()}`}
//                                                 name="accounting"
//                                                 value={option}
//                                                 checked={accountingAnswer === option}
//                                                 onChange={(e) => setAccountingAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`accounting-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details about any accounting information or questions you have."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation">
//                             <button 
//                                 className="nav-btn prev-btn" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'accruals' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Accruals</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">3.1</span> Do you have any information about accruals or prepayments?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`accruals-${option.toLowerCase()}`}
//                                                 name="accruals"
//                                                 value={option}
//                                                 checked={accrualsAnswer === option}
//                                                 onChange={(e) => setAccrualsAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`accruals-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details about any accruals or prepayments."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation">
//                             <button 
//                                 className="nav-btn prev-btn" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'hire' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Hire Purchase</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">4.1</span> Do you have any hire purchase agreements?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`hire-${option.toLowerCase()}`}
//                                                 name="hire"
//                                                 value={option}
//                                                 checked={hireAnswer === option}
//                                                 onChange={(e) => setHireAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`hire-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any hire purchase agreements."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation">
//                             <button 
//                                 className="nav-btn prev-btn" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'asset' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Asset and Investments</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">5.1</span> Have you acquired or disposed of any assets or investments?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`asset-${option.toLowerCase()}`}
//                                                 name="asset"
//                                                 value={option}
//                                                 checked={assetAnswer === option}
//                                                 onChange={(e) => setAssetAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`asset-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any assets or investments."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation">
//                             <button 
//                                 className="nav-btn prev-btn" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'income' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Other Income</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">6.1</span> Have you received any other types of income (e.g., dividends, interest)?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`income-${option.toLowerCase()}`}
//                                                 name="income"
//                                                 value={option}
//                                                 checked={incomeAnswer === option}
//                                                 onChange={(e) => setIncomeAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`income-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any other income received."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation">
//                             <button 
//                                 className="nav-btn prev-btn" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'vehicle' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Vehicle Expenses</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">7.1</span> Do you have any business vehicle expenses to declare?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`vehicle-${option.toLowerCase()}`}
//                                                 name="vehicle"
//                                                 value={option}
//                                                 checked={vehicleAnswer === option}
//                                                 onChange={(e) => setVehicleAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`vehicle-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any vehicle expenses."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="terms-section">
//                             <h2 className="terms-title">TERMS & CONDITIONS</h2>
//                             <p className="terms-text">
//                                 By proceeding, you agree to provide accurate and complete financial information. All data shared will be handled confidentially and used strictly for professional accounting, tax, and compliance purposes. You consent to receiving communications electronically and accept that digital documents are valid for official use.
//                                 <a href="#" className="policy-link"> Read Full Policy </a>
//                             </p>
//                             <div className="checkbox-container">
//                                 <div className="checkbox-wrapper">
//                                     <input
//                                         type="checkbox"
//                                         id="terms-agree"
//                                         className="checkbox-input"
//                                         checked={termsChecked}
//                                         onChange={(e) => setTermsChecked(e.target.checked)}
//                                     />
//                                     <label htmlFor="terms-agree" className="checkbox-label">
//                                         I agree to the Terms & Conditions stated above.
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className="checkbox-container">
//                                 <div className="checkbox-wrapper">
//                                     <input
//                                         type="checkbox"
//                                         id="confirm-info"
//                                         className="checkbox-input"
//                                         checked={confirmChecked}
//                                         onChange={(e) => setConfirmChecked(e.target.checked)}
//                                     />
//                                     <label htmlFor="confirm-info" className="checkbox-label">
//                                         I confirm that the information I have provided is true and complete.
//                                     </label>
//                                 </div>
//                             </div>
//                             <hr />
//                             <div className="form-section">
//                                 <div className="form-row">
//                                     <div className="form-group">
//                                         <label htmlFor="full-name" className="form-label">Full Name</label>
//                                         <input
//                                             type="text"
//                                             id="full-name"
//                                             className="form-input"
//                                             value={fullName}
//                                             onChange={(e) => setFullName(e.target.value)}
//                                         />
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="signature" className="form-label">Signature</label>
//                                         <input
//                                             type="text"
//                                             id="signature"
//                                             className="form-input signature-input"
//                                             value={signature}
//                                             onChange={(e) => setSignature(e.target.value)}
//                                         />
//                                     </div>
//                                     <button
//                                         className="submit-button"
//                                         onClick={handleSubmit}
//                                         disabled={!termsChecked || !confirmChecked}
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                                 <div className="signature-info">
//                                     <span className="signature-detail">Signature: {signature || '_______'}</span>
//                                     <span className="signature-detail">Date: {new Date().toLocaleDateString('en-US', {
//                                         year: 'numeric',
//                                         month: 'long',
//                                         day: 'numeric'
//                                     })}</span>
//                                 </div>
//                                 <p className="security-text">
//                                     Your signed acknowledgment will be encrypted and stored securely.<br />
//                                     A copy will be emailed to you for your records.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons - Special case for last step */}
//                         <div className="form-navigation">
//                             <button 
//                                 className="nav-btn prev-btn" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             {/* No Next button on the last step since it has Submit */}
//                         </div>
//                     </div>
//                 )}
//                 {showLastYearResponse && (
//                     <div className="last-year-modal">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h4 className="modal-title">Response (Last Year)</h4>
//                                 <button className="modal-close-btn" onClick={() => setShowLastYearResponse(false)}>×</button>
//                             </div>
//                             <div className="modal-body">
//                                 <p className="modal-text">
//                                     Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.
//                                 </p>
//                             </div>
//                             <div className="modal-footer">
//                                 <button className="modal-copy-btn" onClick={handleCopyPaste}>Copy Paste</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Clientquestionnaire;





//morning 7:30 am


// import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
// import '../css/clientquestion.css';
// import React, { useState } from 'react';
// import Headmain from '../components/mainhead'
// import { useNavigate } from 'react-router-dom';

// const Clientquestionnaire = () => {
//     const [currentPage, setCurrentPage] = useState('trading');

//     const steps = [
//         { id: 'all', number: '✓', label: 'All', status: 'completed' },
//         { id: 'trading', number: '1', label: 'Trading Information', status: 'pending' },
//         { id: 'accounting', number: '2', label: 'Accounting Information', status: 'pending' },
//         { id: 'accruals', number: '3', label: 'Accruals', status: 'pending' },
//         { id: 'hire', number: '4', label: 'Hire Purchase', status: 'pending' },
//         { id: 'asset', number: '5', label: 'Asset and Investments', status: 'pending' },
//         { id: 'income', number: '6', label: 'Other Income', status: 'pending' },
//         { id: 'vehicle', number: '7', label: 'Vehicle Expenses', status: 'pending' }
//     ];

//     const [tradingAnswer, setTradingAnswer] = useState('Yes');
//     const [rentalAnswer, setRentalAnswer] = useState('');
//     const [accountingAnswer, setAccountingAnswer] = useState('');
//     const [accrualsAnswer, setAccrualsAnswer] = useState('');
//     const [hireAnswer, setHireAnswer] = useState('');
//     const [assetAnswer, setAssetAnswer] = useState('');
//     const [incomeAnswer, setIncomeAnswer] = useState('');
//     const [vehicleAnswer, setVehicleAnswer] = useState('');

//     const [showLastYearResponse, setShowLastYearResponse] = useState(false);
//     const [termsChecked, setTermsChecked] = useState(false);
//     const [confirmChecked, setConfirmChecked] = useState(false);
//     const [fullName, setFullName] = useState('');
//     const [signature, setSignature] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = () => {
//         if (termsChecked && confirmChecked) {
//             console.log('Form data:', {
//                 tradingAnswer,
//                 rentalAnswer,
//                 accountingAnswer,
//                 accrualsAnswer,
//                 hireAnswer,
//                 assetAnswer,
//                 incomeAnswer,
//                 vehicleAnswer,
//                 fullName,
//                 signature,
//                 termsChecked,
//                 confirmChecked,
//             });
//             navigate('/queryresolver');
//         } else {
//             alert('Please check both checkboxes before submitting.');
//         }
//     };

//     const handleCopyPaste = () => {
//         const textToCopy = "Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.";
//         navigator.clipboard.writeText(textToCopy)
//             .then(() => {
//                 alert(`Last year's response copied!`);
//                 setShowLastYearResponse(false);
//             })
//             .catch(err => {
//                 console.error('Failed to copy text: ', err);
//                 alert('Failed to copy text.');
//             });
//     };

//     const handleStepClick = (stepId) => {
//         setCurrentPage(stepId);
//     };

//     // Navigation helper functions
//     const getCurrentStepIndex = () => {
//         return steps.findIndex(step => step.id === currentPage);
//     };

//     const handlePrevious = () => {
//         const currentIndex = getCurrentStepIndex();
//         if (currentIndex > 1) { // Skip 'all' step (index 0)
//             setCurrentPage(steps[currentIndex - 1].id);
//         }
//     };

//     const handleNext = () => {
//         const currentIndex = getCurrentStepIndex();
//         if (currentIndex < steps.length - 1) {
//             setCurrentPage(steps[currentIndex + 1].id);
//         }
//     };

//     const isPreviousDisabled = () => {
//         const currentIndex = getCurrentStepIndex();
//         return currentIndex <= 1; // Disable if at first step (trading) or 'all' step
//     };

//     const isNextDisabled = () => {
//         const currentIndex = getCurrentStepIndex();
//         return currentIndex >= steps.length - 1; // Disable if at last step
//     };

//     return (
//         <>
//             <Headmain />
//             <div className="progress-container">
//                 <div className="progress-wrapper">
//                     <div className="progress-bar">
//                         <button className="nav-arrow" onClick={handlePrevious} disabled={isPreviousDisabled()}>
//                             <ChevronLeft size={16} />
//                         </button>
//                         <div className="steps-container">
//                             <div className="progress-line"></div>
//                             {steps.map((step, index) => {
//                                 let status = 'pending';
//                                 const currentPageIndex = steps.findIndex(s => s.id === currentPage);
//                                 if (index < currentPageIndex) {
//                                     status = 'completed';
//                                 } else if (step.id === currentPage) {
//                                     status = 'current';
//                                 }
//                                 if (step.id === 'all') {
//                                     status = 'completed';
//                                 }
//                                 if (step.id === 'trading' && currentPage === 'trading') {
//                                     status = 'trading-current';
//                                 }

//                                 return (
//                                     <React.Fragment key={step.id}>
//                                         <button
//                                             className="step-item"
//                                             onClick={() => handleStepClick(step.id)}
//                                         >
//                                             <div className={`step-circle ${status}`}>
//                                                 {status === 'completed' && step.id !== 'all' ? (
//                                                     <Check size={20} />
//                                                 ) : (
//                                                     step.number
//                                                 )}
//                                             </div>
//                                             <div className="step-label">
//                                                 {step.label}
//                                             </div>
//                                         </button>
//                                         {/* {index < steps.length - 1 && (
//                                             <div className={`connector ${index < currentPageIndex ? 'completed' : 'pending'}`} />
//                                         )} */}
//                                     </React.Fragment>
//                                 );
//                             })}
//                         </div>
//                         <button className="nav-arrow" onClick={handleNext} disabled={isNextDisabled()}>
//                             <ChevronRight size={16} />
//                         </button>
//                     </div>
//                     <div className="legend">
//                         <div className="legend-item">
//                             <div className="legend-dot completed"></div>
//                             <span>Completed</span>
//                         </div>
//                         <div className="legend-item">
//                             <div className="legend-dot partially"></div>
//                             <span>Partially Completed</span>
//                         </div>
//                         <div className="legend-item">
//                             <div className="legend-dot pending"></div>
//                             <span>Pending</span>
//                         </div>
//                     </div>
//                 </div>

//                 {currentPage === 'trading' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Trading Information</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">1.1</span> Has this entity traded in the financial year? (includes owning rental property or running any business)
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`trading-${option.toLowerCase()}`}
//                                                 name="trading"
//                                                 value={option}
//                                                 checked={tradingAnswer === option}
//                                                 onChange={(e) => setTradingAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`trading-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <div className="edit-link">
//                                         <button>Edit</button>
//                                     </div>
//                                     <label className="response-label">Response:</label>
//                                     <div style={{ position: 'relative' }}>
//                                         <textarea
//                                             className="response-textarea"
//                                             placeholder="Enter your response here..."
//                                         ></textarea>
//                                         <button
//                                             className="view-answer-btn"
//                                             onClick={() => setShowLastYearResponse(true)}
//                                         >
//                                             👁 View Last Year's Answer
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="section">
//                             <h3 className="section-title">Rental Property</h3>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">1.2</span> Does this entity hold rental property?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`rental-${option.toLowerCase()}`}
//                                                 name="rental"
//                                                 value={option}
//                                                 checked={rentalAnswer === option}
//                                                 onChange={(e) => setRentalAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`rental-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <div className="edit-link">
//                                         <button>Edit</button>
//                                     </div>
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder=""
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                                         {/* Navigation Buttons */}
//                         <div className="form-navigation-separated">
//                             <button 
//                                 className="nav-btn prev-btn left-positioned" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn right-positioned" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'accounting' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Accounting Information</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">2.1</span> Do you have any accounting-related information or queries?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`accounting-${option.toLowerCase()}`}
//                                                 name="accounting"
//                                                 value={option}
//                                                 checked={accountingAnswer === option}
//                                                 onChange={(e) => setAccountingAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`accounting-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details about any accounting information or questions you have."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation-separated">
//                             <button 
//                                 className="nav-btn prev-btn left-positioned" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn right-positioned" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'accruals' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Accruals</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">3.1</span> Do you have any information about accruals or prepayments?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`accruals-${option.toLowerCase()}`}
//                                                 name="accruals"
//                                                 value={option}
//                                                 checked={accrualsAnswer === option}
//                                                 onChange={(e) => setAccrualsAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`accruals-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details about any accruals or prepayments."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation-separated">
//                             <button 
//                                 className="nav-btn prev-btn left-positioned" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn right-positioned" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'hire' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Hire Purchase</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">4.1</span> Do you have any hire purchase agreements?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`hire-${option.toLowerCase()}`}
//                                                 name="hire"
//                                                 value={option}
//                                                 checked={hireAnswer === option}
//                                                 onChange={(e) => setHireAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`hire-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any hire purchase agreements."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation-separated">
//                             <button 
//                                 className="nav-btn prev-btn left-positioned" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn right-positioned" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'asset' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Asset and Investments</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">5.1</span> Have you acquired or disposed of any assets or investments?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`asset-${option.toLowerCase()}`}
//                                                 name="asset"
//                                                 value={option}
//                                                 checked={assetAnswer === option}
//                                                 onChange={(e) => setAssetAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`asset-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any assets or investments."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation-separated">
//                             <button 
//                                 className="nav-btn prev-btn left-positioned" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn right-positioned" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'income' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Other Income</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">6.1</span> Have you received any other types of income (e.g., dividends, interest)?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`income-${option.toLowerCase()}`}
//                                                 name="income"
//                                                 value={option}
//                                                 checked={incomeAnswer === option}
//                                                 onChange={(e) => setIncomeAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`income-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any other income received."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation">
//                             <button 
//                                 className="nav-btn prev-btn" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'vehicle' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Vehicle Expenses</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">7.1</span> Do you have any business vehicle expenses to declare?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`vehicle-${option.toLowerCase()}`}
//                                                 name="vehicle"
//                                                 value={option}
//                                                 checked={vehicleAnswer === option}
//                                                 onChange={(e) => setVehicleAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`vehicle-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any vehicle expenses."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="terms-section">
//                             <h2 className="terms-title">TERMS & CONDITIONS</h2>
//                             <p className="terms-text">
//                                 By proceeding, you agree to provide accurate and complete financial information. All data shared will be handled confidentially and used strictly for professional accounting, tax, and compliance purposes. You consent to receiving communications electronically and accept that digital documents are valid for official use.
//                                 <a href="#" className="policy-link"> Read Full Policy </a>
//                             </p>
//                             <div className="checkbox-container">
//                                 <div className="checkbox-wrapper">
//                                     <input
//                                         type="checkbox"
//                                         id="terms-agree"
//                                         className="checkbox-input"
//                                         checked={termsChecked}
//                                         onChange={(e) => setTermsChecked(e.target.checked)}
//                                     />
//                                     <label htmlFor="terms-agree" className="checkbox-label">
//                                         I agree to the Terms & Conditions stated above.
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className="checkbox-container">
//                                 <div className="checkbox-wrapper">
//                                     <input
//                                         type="checkbox"
//                                         id="confirm-info"
//                                         className="checkbox-input"
//                                         checked={confirmChecked}
//                                         onChange={(e) => setConfirmChecked(e.target.checked)}
//                                     />
//                                     <label htmlFor="confirm-info" className="checkbox-label">
//                                         I confirm that the information I have provided is true and complete.
//                                     </label>
//                                 </div>
//                             </div>
//                             <hr />
//                             <div className="form-section">
//                                 <div className="form-row">
//                                     <div className="form-group">
//                                         <label htmlFor="full-name" className="form-label">Full Name</label>
//                                         <input
//                                             type="text"
//                                             id="full-name"
//                                             className="form-input"
//                                             value={fullName}
//                                             onChange={(e) => setFullName(e.target.value)}
//                                         />
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="signature" className="form-label">Signature</label>
//                                         <input
//                                             type="text"
//                                             id="signature"
//                                             className="form-input signature-input"
//                                             value={signature}
//                                             onChange={(e) => setSignature(e.target.value)}
//                                         />
//                                     </div>
//                                     <button
//                                         className="submit-button"
//                                         onClick={handleSubmit}
//                                         disabled={!termsChecked || !confirmChecked}
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                                 <div className="signature-info">
//                                     <span className="signature-detail">Signature: {signature || '_______'}</span>
//                                     <span className="signature-detail">Date: {new Date().toLocaleDateString('en-US', {
//                                         year: 'numeric',
//                                         month: 'long',
//                                         day: 'numeric'
//                                     })}</span>
//                                 </div>
//                                 <p className="security-text">
//                                     Your signed acknowledgment will be encrypted and stored securely.<br />
//                                     A copy will be emailed to you for your records.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons - Special case for last step */}
//                         <div className="form-navigation-separated">
//                             <button 
//                                 className="nav-btn prev-btn left-positioned" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             {/* No Next button on the last step since it has Submit */}
//                         </div>
//                     </div>
//                 )}
//                 {showLastYearResponse && (
//                     <div className="last-year-modal">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h4 className="modal-title">Response (Last Year)</h4>
//                                 <button className="modal-close-btn" onClick={() => setShowLastYearResponse(false)}>×</button>
//                             </div>
//                             <div className="modal-body">
//                                 <p className="modal-text">
//                                     Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.
//                                 </p>
//                             </div>
//                             <div className="modal-footer">
//                                 <button className="modal-copy-btn" onClick={handleCopyPaste}>Copy Paste</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Clientquestionnaire;



// 7:50 am


// import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
// import '../css/clientquestion.css';
// import React, { useState } from 'react';
// import Headmain from '../components/mainhead'
// import { useNavigate } from 'react-router-dom';

// const Clientquestionnaire = () => {
//     const [currentPage, setCurrentPage] = useState('trading');

//     const steps = [
//         { id: 'all', number: '✓', label: 'All', status: 'completed' },
//         { id: 'trading', number: '1', label: 'Trading Information', status: 'pending' },
//         { id: 'accounting', number: '2', label: 'Accounting Information', status: 'pending' },
//         { id: 'accruals', number: '3', label: 'Accruals', status: 'pending' },
//         { id: 'hire', number: '4', label: 'Hire Purchase', status: 'pending' },
//         { id: 'asset', number: '5', label: 'Asset and Investments', status: 'pending' },
//         { id: 'income', number: '6', label: 'Other Income', status: 'pending' },
//         { id: 'vehicle', number: '7', label: 'Vehicle Expenses', status: 'pending' }
//     ];

//     const [tradingAnswer, setTradingAnswer] = useState('Yes');
//     const [rentalAnswer, setRentalAnswer] = useState('');
//     const [accountingAnswer, setAccountingAnswer] = useState('');
//     const [accrualsAnswer, setAccrualsAnswer] = useState('');
//     const [hireAnswer, setHireAnswer] = useState('');
//     const [assetAnswer, setAssetAnswer] = useState('');
//     const [incomeAnswer, setIncomeAnswer] = useState('');
//     const [vehicleAnswer, setVehicleAnswer] = useState('');

//     const [showLastYearResponse, setShowLastYearResponse] = useState(false);
//     const [termsChecked, setTermsChecked] = useState(false);
//     const [confirmChecked, setConfirmChecked] = useState(false);
//     const [fullName, setFullName] = useState('');
//     const [signature, setSignature] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = () => {
//         if (termsChecked && confirmChecked) {
//             console.log('Form data:', {
//                 tradingAnswer,
//                 rentalAnswer,
//                 accountingAnswer,
//                 accrualsAnswer,
//                 hireAnswer,
//                 assetAnswer,
//                 incomeAnswer,
//                 vehicleAnswer,
//                 fullName,
//                 signature,
//                 termsChecked,
//                 confirmChecked,
//             });
//             navigate('/queryresolver');
//         } else {
//             alert('Please check both checkboxes before submitting.');
//         }
//     };

//     const handleCopyPaste = () => {
//         const textToCopy = "Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.";
//         navigator.clipboard.writeText(textToCopy)
//             .then(() => {
//                 alert(`Last year's response copied!`);
//                 setShowLastYearResponse(false);
//             })
//             .catch(err => {
//                 console.error('Failed to copy text: ', err);
//                 alert('Failed to copy text.');
//             });
//     };

//     const handleStepClick = (stepId) => {
//         setCurrentPage(stepId);
//     };

//     // Navigation helper functions
//     const getCurrentStepIndex = () => {
//         return steps.findIndex(step => step.id === currentPage);
//     };

//     const handlePrevious = () => {
//         const currentIndex = getCurrentStepIndex();
//         if (currentIndex > 1) { // Skip 'all' step (index 0)
//             setCurrentPage(steps[currentIndex - 1].id);
//         }
//     };

//     const handleNext = () => {
//         const currentIndex = getCurrentStepIndex();
//         if (currentIndex < steps.length - 1) {
//             setCurrentPage(steps[currentIndex + 1].id);
//         }
//     };

//     const isPreviousDisabled = () => {
//         const currentIndex = getCurrentStepIndex();
//         return currentIndex <= 1; // Disable if at first step (trading) or 'all' step
//     };

//     const isNextDisabled = () => {
//         const currentIndex = getCurrentStepIndex();
//         return currentIndex >= steps.length - 1; // Disable if at last step
//     };

//     return (
//         <>
//             <Headmain />
//             <div className="progress-container">
//                 <div className="progress-wrapper">
//                     <div className="progress-bar">
//                         <button className="nav-arrow" onClick={handlePrevious} disabled={isPreviousDisabled()}>
//                             <ChevronLeft size={16} />
//                         </button>
//                         <div className="steps-container">
//                             <div className="progress-line"></div>
//                             {steps.map((step, index) => {
//                                 let status = 'pending';
//                                 const currentPageIndex = steps.findIndex(s => s.id === currentPage);
//                                 if (index < currentPageIndex) {
//                                     status = 'completed';
//                                 } else if (step.id === currentPage) {
//                                     status = 'current';
//                                 }
//                                 if (step.id === 'all') {
//                                     status = 'completed';
//                                 }
//                                 if (step.id === 'trading' && currentPage === 'trading') {
//                                     status = 'trading-current';
//                                 }

//                                 return (
//                                     <React.Fragment key={step.id}>
//                                         <button
//                                             className="step-item"
//                                             onClick={() => handleStepClick(step.id)}
//                                         >
//                                             <div className={`step-circle ${status}`}>
//                                                 {status === 'completed' && step.id !== 'all' ? (
//                                                     <Check size={20} />
//                                                 ) : (
//                                                     step.number
//                                                 )}
//                                             </div>
//                                             <div className="step-label">
//                                                 {step.label}
//                                             </div>
//                                         </button>
//                                         {/* {index < steps.length - 1 && (
//                                             <div className={`connector ${index < currentPageIndex ? 'completed' : 'pending'}`} />
//                                         )} */}
//                                     </React.Fragment>
//                                 );
//                             })}
//                         </div>
//                         <button className="nav-arrow" onClick={handleNext} disabled={isNextDisabled()}>
//                             <ChevronRight size={16} />
//                         </button>
//                     </div>
//                     <div className="legend">
//                         <div className="legend-item">
//                             <div className="legend-dot completed"></div>
//                             <span>Completed</span>
//                         </div>
//                         <div className="legend-item">
//                             <div className="legend-dot partially"></div>
//                             <span>Partially Completed</span>
//                         </div>
//                         <div className="legend-item">
//                             <div className="legend-dot pending"></div>
//                             <span>Pending</span>
//                         </div>
//                     </div>
//                 </div>
                


//                 {currentPage === 'trading' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Trading Information</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">1.1</span> Has this entity traded in the financial year? (includes owning rental property or running any business)
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`trading-${option.toLowerCase()}`}
//                                                 name="trading"
//                                                 value={option}
//                                                 checked={tradingAnswer === option}
//                                                 onChange={(e) => setTradingAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`trading-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <div className="edit-link">
//                                         <button>Edit</button>
//                                     </div>
//                                     <label className="response-label">Response:</label>
//                                     <div style={{ position: 'relative' }}>
//                                         <textarea
//                                             className="response-textarea"
//                                             placeholder="Enter your response here..."
//                                         ></textarea>
//                                         <button
//                                             className="view-answer-btn"
//                                             onClick={() => setShowLastYearResponse(true)}
//                                         >
//                                             👁 View Last Year's Answer
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="section">
//                             <h3 className="section-title">Rental Property</h3>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">1.2</span> Does this entity hold rental property?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`rental-${option.toLowerCase()}`}
//                                                 name="rental"
//                                                 value={option}
//                                                 checked={rentalAnswer === option}
//                                                 onChange={(e) => setRentalAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`rental-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <div className="edit-link">
//                                         <button>Edit</button>
//                                     </div>
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder=""
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                                         {/* Navigation Buttons */}
//                         <div className="form-navigation-separated">
//                             <button 
//                                 className="nav-btn prev-btn left-positioned" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn right-positioned" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'accounting' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Accounting Information</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">2.1</span> Do you have any accounting-related information or queries?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`accounting-${option.toLowerCase()}`}
//                                                 name="accounting"
//                                                 value={option}
//                                                 checked={accountingAnswer === option}
//                                                 onChange={(e) => setAccountingAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`accounting-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details about any accounting information or questions you have."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'accruals' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Accruals</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">3.1</span> Do you have any information about accruals or prepayments?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`accruals-${option.toLowerCase()}`}
//                                                 name="accruals"
//                                                 value={option}
//                                                 checked={accrualsAnswer === option}
//                                                 onChange={(e) => setAccrualsAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`accruals-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details about any accruals or prepayments."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'hire' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Hire Purchase</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">4.1</span> Do you have any hire purchase agreements?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`hire-${option.toLowerCase()}`}
//                                                 name="hire"
//                                                 value={option}
//                                                 checked={hireAnswer === option}
//                                                 onChange={(e) => setHireAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`hire-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any hire purchase agreements."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'asset' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Asset and Investments</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">5.1</span> Have you acquired or disposed of any assets or investments?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`asset-${option.toLowerCase()}`}
//                                                 name="asset"
//                                                 value={option}
//                                                 checked={assetAnswer === option}
//                                                 onChange={(e) => setAssetAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`asset-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any assets or investments."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'income' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Other Income</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">6.1</span> Have you received any other types of income (e.g., dividends, interest)?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`income-${option.toLowerCase()}`}
//                                                 name="income"
//                                                 value={option}
//                                                 checked={incomeAnswer === option}
//                                                 onChange={(e) => setIncomeAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`income-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any other income received."
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="form-navigation">
//                             <button 
//                                 className="nav-btn prev-btn" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             <button 
//                                 className="nav-btn next-btn" 
//                                 onClick={handleNext}
//                                 disabled={isNextDisabled()}
//                             >
//                                 Next
//                                 <ChevronRight size={16} />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {currentPage === 'vehicle' && (
//                     <div className="form-container">
//                         <div className="section">
//                             <h2 className="section-title">Vehicle Expenses</h2>
//                             <div className="question-container">
//                                 <div className="question">
//                                     <span className="question-number">7.1</span> Do you have any business vehicle expenses to declare?
//                                 </div>
//                                 <div className="radio-group">
//                                     {['No', 'Yes', 'Unsure'].map((option) => (
//                                         <div className="radio-option" key={option}>
//                                             <input
//                                                 type="radio"
//                                                 id={`vehicle-${option.toLowerCase()}`}
//                                                 name="vehicle"
//                                                 value={option}
//                                                 checked={vehicleAnswer === option}
//                                                 onChange={(e) => setVehicleAnswer(e.target.value)}
//                                             />
//                                             <label htmlFor={`vehicle-${option.toLowerCase()}`}>{option}</label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="response-section">
//                                     <label className="response-label">Response:</label>
//                                     <textarea
//                                         className="response-textarea"
//                                         placeholder="Please provide details on any vehicle expenses."
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="terms-section">
//                             <h2 className="terms-title">TERMS & CONDITIONS</h2>
//                             <p className="terms-text">
//                                 By proceeding, you agree to provide accurate and complete financial information. All data shared will be handled confidentially and used strictly for professional accounting, tax, and compliance purposes. You consent to receiving communications electronically and accept that digital documents are valid for official use.
//                                 <a href="#" className="policy-link"> Read Full Policy </a>
//                             </p>
//                             <div className="checkbox-container">
//                                 <div className="checkbox-wrapper">
//                                     <input
//                                         type="checkbox"
//                                         id="terms-agree"
//                                         className="checkbox-input"
//                                         checked={termsChecked}
//                                         onChange={(e) => setTermsChecked(e.target.checked)}
//                                     />
//                                     <label htmlFor="terms-agree" className="checkbox-label">
//                                         I agree to the Terms & Conditions stated above.
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className="checkbox-container">
//                                 <div className="checkbox-wrapper">
//                                     <input
//                                         type="checkbox"
//                                         id="confirm-info"
//                                         className="checkbox-input"
//                                         checked={confirmChecked}
//                                         onChange={(e) => setConfirmChecked(e.target.checked)}
//                                     />
//                                     <label htmlFor="confirm-info" className="checkbox-label">
//                                         I confirm that the information I have provided is true and complete.
//                                     </label>
//                                 </div>
//                             </div>
//                             <hr />
//                             <div className="form-section">
//                                 <div className="form-row">
//                                     <div className="form-group">
//                                         <label htmlFor="full-name" className="form-label">Full Name</label>
//                                         <input
//                                             type="text"
//                                             id="full-name"
//                                             className="form-input"
//                                             value={fullName}
//                                             onChange={(e) => setFullName(e.target.value)}
//                                         />
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="signature" className="form-label">Signature</label>
//                                         <input
//                                             type="text"
//                                             id="signature"
//                                             className="form-input signature-input"
//                                             value={signature}
//                                             onChange={(e) => setSignature(e.target.value)}
//                                         />
//                                     </div>
//                                     <button
//                                         className="submit-button"
//                                         onClick={handleSubmit}
//                                         disabled={!termsChecked || !confirmChecked}
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                                 <div className="signature-info">
//                                     <span className="signature-detail">Signature: {signature || '_______'}</span>
//                                     <span className="signature-detail">Date: {new Date().toLocaleDateString('en-US', {
//                                         year: 'numeric',
//                                         month: 'long',
//                                         day: 'numeric'
//                                     })}</span>
//                                 </div>
//                                 <p className="security-text">
//                                     Your signed acknowledgment will be encrypted and stored securely.<br />
//                                     A copy will be emailed to you for your records.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons - Special case for last step */}
//                         <div className="form-navigation-separated">
//                             <button 
//                                 className="nav-btn prev-btn left-positioned" 
//                                 onClick={handlePrevious}
//                                 disabled={isPreviousDisabled()}
//                             >
//                                 <ChevronLeft size={16} />
//                                 Previous
//                             </button>
//                             {/* No Next button on the last step since it has Submit */}
//                         </div>
//                     </div>
//                 )}
//                 {showLastYearResponse && (
//                     <div className="last-year-modal">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h4 className="modal-title">Response (Last Year)</h4>
//                                 <button className="modal-close-btn" onClick={() => setShowLastYearResponse(false)}>×</button>
//                             </div>
//                             <div className="modal-body">
//                                 <p className="modal-text">
//                                     Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.
//                                 </p>
//                             </div>
//                             <div className="modal-footer">
//                                 <button className="modal-copy-btn" onClick={handleCopyPaste}>Copy Paste</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
            
//             {/* Floating Navigation Buttons */}
//             <button 
//                 className="floating-nav-btn floating-prev-btn" 
//                 onClick={handlePrevious}
//                 disabled={isPreviousDisabled()}
//                 title="Previous Step"
//             >
//                 <ChevronLeft size={20} />
//             </button>
            
//             <button 
//                 className="floating-nav-btn floating-next-btn" 
//                 onClick={handleNext}
//                 disabled={isNextDisabled()}
//                 title="Next Step"
//             >
//                 <ChevronRight size={20} />
//             </button>
//         </>
//     );
// };

// export default Clientquestionnaire;






//7:55 am


import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import '../css/clientquestion.css';
import React, { useState } from 'react';
import Headmain from '../components/mainhead'
import { useNavigate } from 'react-router-dom';

const Clientquestionnaire = () => {
    const [currentPage, setCurrentPage] = useState('trading');

    const steps = [
        { id: 'all', number: '✓', label: 'All', status: 'completed' },
        { id: 'trading', number: '1', label: 'Trading Information', status: 'pending' },
        { id: 'accounting', number: '2', label: 'Accounting Information', status: 'pending' },
        { id: 'accruals', number: '3', label: 'Accruals', status: 'pending' },
        { id: 'hire', number: '4', label: 'Hire Purchase', status: 'pending' },
        { id: 'asset', number: '5', label: 'Asset and Investments', status: 'pending' },
        { id: 'income', number: '6', label: 'Other Income', status: 'pending' },
        { id: 'vehicle', number: '7', label: 'Vehicle Expenses', status: 'pending' }
    ];

    const [tradingAnswer, setTradingAnswer] = useState('Yes');
    const [rentalAnswer, setRentalAnswer] = useState('');
    const [accountingAnswer, setAccountingAnswer] = useState('');
    const [accrualsAnswer, setAccrualsAnswer] = useState('');
    const [hireAnswer, setHireAnswer] = useState('');
    const [assetAnswer, setAssetAnswer] = useState('');
    const [incomeAnswer, setIncomeAnswer] = useState('');
    const [vehicleAnswer, setVehicleAnswer] = useState('');

    const [showLastYearResponse, setShowLastYearResponse] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const [confirmChecked, setConfirmChecked] = useState(false);
    const [fullName, setFullName] = useState('');
    const [signature, setSignature] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (termsChecked && confirmChecked) {
            console.log('Form data:', {
                tradingAnswer,
                rentalAnswer,
                accountingAnswer,
                accrualsAnswer,
                hireAnswer,
                assetAnswer,
                incomeAnswer,
                vehicleAnswer,
                fullName,
                signature,
                termsChecked,
                confirmChecked,
            });
            navigate('/queryresolver');
        } else {
            alert('Please check both checkboxes before submitting.');
        }
    };

    const handleCopyPaste = () => {
        const textToCopy = "Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.";
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert(`Last year's response copied!`);
                setShowLastYearResponse(false);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy text.');
            });
    };

    const handleStepClick = (stepId) => {
        setCurrentPage(stepId);
    };

    // Navigation helper functions
    const getCurrentStepIndex = () => {
        return steps.findIndex(step => step.id === currentPage);
    };

    const handlePrevious = () => {
        const currentIndex = getCurrentStepIndex();
        if (currentIndex > 1) { // Skip 'all' step (index 0)
            setCurrentPage(steps[currentIndex - 1].id);
        }
    };

    const handleNext = () => {
        const currentIndex = getCurrentStepIndex();
        if (currentIndex < steps.length - 1) {
            setCurrentPage(steps[currentIndex + 1].id);
        }
    };

    const isPreviousDisabled = () => {
        const currentIndex = getCurrentStepIndex();
        return currentIndex <= 1; // Disable if at first step (trading) or 'all' step
    };

    const isNextDisabled = () => {
        const currentIndex = getCurrentStepIndex();
        return currentIndex >= steps.length - 1; // Disable if at last step
    };

    return (
        <>
            <Headmain />
            <div className="progress-container">
                <div className="progress-wrapper">
                    <div className="progress-bar">
                        <button className="nav-arrow" onClick={handlePrevious} disabled={isPreviousDisabled()}>
                            <ChevronLeft size={16} />
                        </button>
                        <div className="steps-container">
                            <div className="progress-line"></div>
                            {steps.map((step, index) => {
                                let status = 'pending';
                                const currentPageIndex = steps.findIndex(s => s.id === currentPage);
                                if (index < currentPageIndex) {
                                    status = 'completed';
                                } else if (step.id === currentPage) {
                                    status = 'current';
                                }
                                if (step.id === 'all') {
                                    status = 'completed';
                                }
                                if (step.id === 'trading' && currentPage === 'trading') {
                                    status = 'trading-current';
                                }

                                return (
                                    <React.Fragment key={step.id}>
                                        <button
                                            className="step-item"
                                            onClick={() => handleStepClick(step.id)}
                                        >
                                            <div className={`step-circle ${status}`}>
                                                {status === 'completed' && step.id !== 'all' ? (
                                                    <Check size={20} />
                                                ) : (
                                                    step.number
                                                )}
                                            </div>
                                            <div className="step-label">
                                                {step.label}
                                            </div>
                                        </button>
                                        {/* {index < steps.length - 1 && (
                                            <div className={`connector ${index < currentPageIndex ? 'completed' : 'pending'}`} />
                                        )} */}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                        <button className="nav-arrow" onClick={handleNext} disabled={isNextDisabled()}>
                            <ChevronRight size={16} />
                        </button>
                    </div>
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
                


                {currentPage === 'trading' && (
                    <div className="form-container">
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
                                        ></textarea>
                                        <button
                                            className="view-answer-btn"
                                            onClick={() => setShowLastYearResponse(true)}
                                        >
                                            👁 View Last Year's Answer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <h3 className="section-title">Rental Property</h3>
                            <div className="question-container">
                                <div className="question">
                                    <span className="question-number">1.2</span> Does this entity hold rental property?
                                </div>
                                <div className="radio-group">
                                    {['No', 'Yes', 'Unsure'].map((option) => (
                                        <div className="radio-option" key={option}>
                                            <input
                                                type="radio"
                                                id={`rental-${option.toLowerCase()}`}
                                                name="rental"
                                                value={option}
                                                checked={rentalAnswer === option}
                                                onChange={(e) => setRentalAnswer(e.target.value)}
                                            />
                                            <label htmlFor={`rental-${option.toLowerCase()}`}>{option}</label>
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
                                    />
                                </div>
                            </div>
                        </div>

                                        {/* Navigation Buttons */}
                        {/* <div className="form-navigation-separated">
                            <button 
                                className="nav-btn prev-btn left-positioned" 
                                onClick={handlePrevious}
                                disabled={isPreviousDisabled()}
                            >
                                <ChevronLeft size={16} />
                                Previous
                            </button>
                            <button 
                                className="nav-btn next-btn right-positioned" 
                                onClick={handleNext}
                                disabled={isNextDisabled()}
                            >
                                Next
                                <ChevronRight size={16} />
                            </button>
                        </div> */}
                    </div>
                )}

                {currentPage === 'accounting' && (
                    <div className="form-container">
                        <div className="section">
                            <h2 className="section-title">Accounting Information</h2>
                            <div className="question-container">
                                <div className="question">
                                    <span className="question-number">2.1</span> Do you have any accounting-related information or queries?
                                </div>
                                <div className="radio-group">
                                    {['No', 'Yes', 'Unsure'].map((option) => (
                                        <div className="radio-option" key={option}>
                                            <input
                                                type="radio"
                                                id={`accounting-${option.toLowerCase()}`}
                                                name="accounting"
                                                value={option}
                                                checked={accountingAnswer === option}
                                                onChange={(e) => setAccountingAnswer(e.target.value)}
                                            />
                                            <label htmlFor={`accounting-${option.toLowerCase()}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <div className="response-section">
                                    <label className="response-label">Response:</label>
                                    <textarea
                                        className="response-textarea"
                                        placeholder="Please provide details about any accounting information or questions you have."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'accruals' && (
                    <div className="form-container">
                        <div className="section">
                            <h2 className="section-title">Accruals</h2>
                            <div className="question-container">
                                <div className="question">
                                    <span className="question-number">3.1</span> Do you have any information about accruals or prepayments?
                                </div>
                                <div className="radio-group">
                                    {['No', 'Yes', 'Unsure'].map((option) => (
                                        <div className="radio-option" key={option}>
                                            <input
                                                type="radio"
                                                id={`accruals-${option.toLowerCase()}`}
                                                name="accruals"
                                                value={option}
                                                checked={accrualsAnswer === option}
                                                onChange={(e) => setAccrualsAnswer(e.target.value)}
                                            />
                                            <label htmlFor={`accruals-${option.toLowerCase()}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <div className="response-section">
                                    <label className="response-label">Response:</label>
                                    <textarea
                                        className="response-textarea"
                                        placeholder="Please provide details about any accruals or prepayments."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'hire' && (
                    <div className="form-container">
                        <div className="section">
                            <h2 className="section-title">Hire Purchase</h2>
                            <div className="question-container">
                                <div className="question">
                                    <span className="question-number">4.1</span> Do you have any hire purchase agreements?
                                </div>
                                <div className="radio-group">
                                    {['No', 'Yes', 'Unsure'].map((option) => (
                                        <div className="radio-option" key={option}>
                                            <input
                                                type="radio"
                                                id={`hire-${option.toLowerCase()}`}
                                                name="hire"
                                                value={option}
                                                checked={hireAnswer === option}
                                                onChange={(e) => setHireAnswer(e.target.value)}
                                            />
                                            <label htmlFor={`hire-${option.toLowerCase()}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <div className="response-section">
                                    <label className="response-label">Response:</label>
                                    <textarea
                                        className="response-textarea"
                                        placeholder="Please provide details on any hire purchase agreements."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'asset' && (
                    <div className="form-container">
                        <div className="section">
                            <h2 className="section-title">Asset and Investments</h2>
                            <div className="question-container">
                                <div className="question">
                                    <span className="question-number">5.1</span> Have you acquired or disposed of any assets or investments?
                                </div>
                                <div className="radio-group">
                                    {['No', 'Yes', 'Unsure'].map((option) => (
                                        <div className="radio-option" key={option}>
                                            <input
                                                type="radio"
                                                id={`asset-${option.toLowerCase()}`}
                                                name="asset"
                                                value={option}
                                                checked={assetAnswer === option}
                                                onChange={(e) => setAssetAnswer(e.target.value)}
                                            />
                                            <label htmlFor={`asset-${option.toLowerCase()}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <div className="response-section">
                                    <label className="response-label">Response:</label>
                                    <textarea
                                        className="response-textarea"
                                        placeholder="Please provide details on any assets or investments."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'income' && (
                    <div className="form-container">
                        <div className="section">
                            <h2 className="section-title">Other Income</h2>
                            <div className="question-container">
                                <div className="question">
                                    <span className="question-number">6.1</span> Have you received any other types of income (e.g., dividends, interest)?
                                </div>
                                <div className="radio-group">
                                    {['No', 'Yes', 'Unsure'].map((option) => (
                                        <div className="radio-option" key={option}>
                                            <input
                                                type="radio"
                                                id={`income-${option.toLowerCase()}`}
                                                name="income"
                                                value={option}
                                                checked={incomeAnswer === option}
                                                onChange={(e) => setIncomeAnswer(e.target.value)}
                                            />
                                            <label htmlFor={`income-${option.toLowerCase()}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <div className="response-section">
                                    <label className="response-label">Response:</label>
                                    <textarea
                                        className="response-textarea"
                                        placeholder="Please provide details on any other income received."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons
                        <div className="form-navigation">
                            <button 
                                className="nav-btn prev-btn" 
                                onClick={handlePrevious}
                                disabled={isPreviousDisabled()}
                            >
                                <ChevronLeft size={16} />
                                Previous
                            </button>
                            <button 
                                className="nav-btn next-btn" 
                                onClick={handleNext}
                                disabled={isNextDisabled()}
                            >
                                Next
                                <ChevronRight size={16} />
                            </button>
                        </div> */}
                    </div>
                )}

                {currentPage === 'vehicle' && (
                    <div className="form-container">
                        <div className="section">
                            <h2 className="section-title">Vehicle Expenses</h2>
                            <div className="question-container">
                                <div className="question">
                                    <span className="question-number">7.1</span> Do you have any business vehicle expenses to declare?
                                </div>
                                <div className="radio-group">
                                    {['No', 'Yes', 'Unsure'].map((option) => (
                                        <div className="radio-option" key={option}>
                                            <input
                                                type="radio"
                                                id={`vehicle-${option.toLowerCase()}`}
                                                name="vehicle"
                                                value={option}
                                                checked={vehicleAnswer === option}
                                                onChange={(e) => setVehicleAnswer(e.target.value)}
                                            />
                                            <label htmlFor={`vehicle-${option.toLowerCase()}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <div className="response-section">
                                    <label className="response-label">Response:</label>
                                    <textarea
                                        className="response-textarea"
                                        placeholder="Please provide details on any vehicle expenses."
                                    />
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
                                    <span className="signature-detail">Signature: {signature || '_______'}</span>
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
                    </div>
                )}
                {showLastYearResponse && (
                    <div className="last-year-modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Response (Last Year)</h4>
                                <button className="modal-close-btn" onClick={() => setShowLastYearResponse(false)}>×</button>
                            </div>
                            <div className="modal-body">
                                <p className="modal-text">
                                    Yes, the entity has traded during the financial year. We operated our business and generated income from those activities.
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button className="modal-copy-btn" onClick={handleCopyPaste}>Copy Paste</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Floating Navigation Buttons */}
            <button 
                className="floating-nav-btn floating-prev-btn" 
                onClick={handlePrevious}
                disabled={isPreviousDisabled()}
                title="Previous Step"
            >
                <ChevronLeft size={25} /> Previous
            </button>
            
            <button 
                className="floating-nav-btn floating-next-btn" 
                onClick={handleNext}
                disabled={isNextDisabled()}
                title="Next Step"
            >
               Next <ChevronRight size={25} />
            </button>
        </>
    );
};

export default Clientquestionnaire;