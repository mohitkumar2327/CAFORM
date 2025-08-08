

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* whith redux */



// import React from 'react';
// import { useSelector } from 'react-redux'; // Import useSelector hook
// import userImage from '../assets/profile.jpg';
// import '../css/header.css';
// import homeIcon from '../assets/home.png';

// const Header = () => {
//   // Use useSelector to grab the state from the Redux store
//   const userName = useSelector((state) => state.user.name);
//   const masterEntityName = useSelector((state) => state.user.masterEntityName);

//   return (
//     <div className='header'>
//       <div className="header-top">
//         <div className="user-info">
//           <h3>User Name: {userName}</h3>
//           <div className="profile">
//             <img src={userImage} alt="profile" />
//           </div>
//         </div>
//       </div>
//       <div className="header-bottom">
//         <div className="breadcrumb">
//           <img src={homeIcon} alt="Home" className="home-icon" />
//           <b><a href="/client-portal">Client Portal <b>&gt;</b> Dashboard</a></b>
//         </div>
//         <p>Master Entity name: {masterEntityName}</p>
//       </div>
//     </div>
//   );
// };

// export default Header; 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import userImage from '../assets/profile.jpg';
import '../css/header.css';
import homeIcon from '../assets/home.png';
import AddImageModal from './addimagemodel.jsx';
import { useNavigate } from 'react-router-dom';

// Change Password Modal Component
const ChangePasswordModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        reenterPassword: ''
    });
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        reenter: false
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.currentPassword) {
            newErrors.currentPassword = 'Current password is required';
        }

        if (!formData.newPassword) {
            newErrors.newPassword = 'New password is required';
        } else if (formData.newPassword.length < 8) {
            newErrors.newPassword = 'Password must be at least 8 characters long';
        }

        if (!formData.reenterPassword) {
            newErrors.reenterPassword = 'Please re-enter your password';
        } else if (formData.newPassword !== formData.reenterPassword) {
            newErrors.reenterPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validateForm()) {
            // Handle password change logic here
            console.log('Password change data:', formData);
            // You can add API call here to change password
            onClose();
        }
    };

    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        },
        modal: {
            background: 'white',
            borderRadius: '12px',
            width: '480px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'hidden',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px',
            borderBottom: '1px solid #e5e7eb'
        },
        title: {
            margin: 0,
            fontSize: '24px',
            fontWeight: 600,
            color: '#111827'
        },
        closeButton: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: '#6b7280'
        },
        body: {
            padding: '24px'
        },
        formGroup: {
            marginBottom: '24px'
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#6b7280'
        },
        inputWrapper: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
        },
        input: {
            width: '100%',
            padding: '12px 48px 12px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '16px',
            backgroundColor: '#f9fafb',
            boxSizing: 'border-box'
        },
        inputFocus: {
            outline: 'none',
            borderColor: '#6366f1',
            boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)',
            backgroundColor: 'white'
        },
        inputError: {
            borderColor: '#ef4444',
            backgroundColor: '#fef2f2'
        },
        passwordToggle: {
            position: 'absolute',
            right: '12px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: '#6b7280',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        errorMessage: {
            display: 'block',
            marginTop: '6px',
            fontSize: '12px',
            color: '#ef4444'
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '12px',
            padding: '24px',
            borderTop: '1px solid #e5e7eb',
            backgroundColor: '#f9fafb'
        },
        cancelButton: {
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            backgroundColor: 'white',
            color: '#6b7280',
            border: '1px solid #d1d5db'
        },
        saveButton: {
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            backgroundColor: '#6366f1',
            color: 'white',
            border: '1px solid #6366f1'
        }
    };

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.modal}>
                <div style={modalStyles.header}>
                    <h2 style={modalStyles.title}>Change Password</h2>
                    <button style={modalStyles.closeButton} onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div style={modalStyles.body}>
                    <div style={modalStyles.formGroup}>
                        <label style={modalStyles.label} htmlFor="currentPassword">Current Password</label>
                        <div style={modalStyles.inputWrapper}>
                            <input
                                type={showPasswords.current ? "text" : "password"}
                                id="currentPassword"
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleInputChange}
                                placeholder="********"
                                style={{
                                    ...modalStyles.input,
                                    ...(errors.currentPassword ? modalStyles.inputError : {})
                                }}
                            />
                            <button
                                type="button"
                                style={modalStyles.passwordToggle}
                                onClick={() => togglePasswordVisibility('current')}
                            >
                                {showPasswords.current ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.currentPassword && <span style={modalStyles.errorMessage}>{errors.currentPassword}</span>}
                    </div>

                    <div style={modalStyles.formGroup}>
                        <label style={modalStyles.label} htmlFor="newPassword">New Password</label>
                        <div style={modalStyles.inputWrapper}>
                            <input
                                type={showPasswords.new ? "text" : "password"}
                                id="newPassword"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleInputChange}
                                placeholder="*******"
                                style={{
                                    ...modalStyles.input,
                                    ...(errors.newPassword ? modalStyles.inputError : {})
                                }}
                            />
                            <button
                                type="button"
                                style={modalStyles.passwordToggle}
                                onClick={() => togglePasswordVisibility('new')}
                            >
                                {showPasswords.new ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.newPassword && <span style={modalStyles.errorMessage}>{errors.newPassword}</span>}
                    </div>

                    <div style={modalStyles.formGroup}>
                        <label style={modalStyles.label} htmlFor="reenterPassword">Re-enter Password</label>
                        <div style={modalStyles.inputWrapper}>
                            <input
                                type={showPasswords.reenter ? "text" : "password"}
                                id="reenterPassword"
                                name="reenterPassword"
                                value={formData.reenterPassword}
                                onChange={handleInputChange}
                                placeholder="*******"
                                style={{
                                    ...modalStyles.input,
                                    ...(errors.reenterPassword ? modalStyles.inputError : {})
                                }}
                            />
                            <button
                                type="button"
                                style={modalStyles.passwordToggle}
                                onClick={() => togglePasswordVisibility('reenter')}
                            >
                                {showPasswords.reenter ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.reenterPassword && <span style={modalStyles.errorMessage}>{errors.reenterPassword}</span>}
                    </div>
                </div>

                <div style={modalStyles.footer}>
                    <button style={modalStyles.cancelButton} onClick={onClose}>
                        Cancel
                    </button>
                    <button style={modalStyles.saveButton} onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main Headmain Component
const Headmain = () => {
    const userName = useSelector((state) => state.user.name);
    const masterEntityName = useSelector((state) => state.user.masterEntityName);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showAddImageModal, setShowAddImageModal] = useState(false);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close dropdown if click is outside AND dropdown is open
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isDropdownOpen) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]); // Dependency array includes isDropdownOpen

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleAddImageClick = () => {
        setShowAddImageModal(true); // Open the modal
        setIsDropdownOpen(false); // Close the profile dropdown
    };

    const handleCloseAddImageModal = () => {
        setShowAddImageModal(false); // Close the modal
    };

    const handleChangePasswordClick = () => {
        setShowChangePasswordModal(true); // Open the change password modal
        setIsDropdownOpen(false); // Close the profile dropdown
    };

    const handleCloseChangePasswordModal = () => {
        setShowChangePasswordModal(false); // Close the change password modal
    };

    const handleSignOut = () => {
        setIsDropdownOpen(false); // Close the profile dropdown
        // You can add any sign out logic here (like clearing localStorage, Redux state, etc.)
        // For example:
        // localStorage.removeItem('authToken');
        // dispatch(clearUserData());
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        // Navigate to client login page (root path)
        navigate('/', { replace: true });
    };

    return (
        <div className='header'>
            <div className="header-top">
                {/* <div className="dropdown-filters-container">
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
                </div> */}
                <h3>User Name: {userName}</h3>
                <div className="profile-container" ref={dropdownRef}>
                    <button className="profile-button" onClick={toggleDropdown}>
                        <img src={userImage} alt="profile" />
                    </button>
                    {isDropdownOpen && (
                        <div className="profile-dropdown">
                            <ul>
                                <li>
                                    <button className="dropdown-item" onClick={handleAddImageClick}>
                                        <span>Add Image</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item">
                                        <span>Add New User</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={handleChangePasswordClick}>
                                        <span>Change Password</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={handleSignOut}>
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
                    <b><a href="/client-portal">Client Portal <b>&gt;</b> General Questionnaire</a></b>
                </div>
                <p>Master Entity name: {masterEntityName}</p>
            </div>

            {/* Render the AddImageModal component */}
            {showAddImageModal && (
                <AddImageModal onClose={handleCloseAddImageModal} />
            )}

            {/* Render the ChangePasswordModal component */}
            {showChangePasswordModal && (
                <ChangePasswordModal onClose={handleCloseChangePasswordModal} />
            )}
        </div>
    );
};

export default Headmain;