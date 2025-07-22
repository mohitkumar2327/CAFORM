import React, { useState, useRef, useEffect } from 'react';
import '../css/otp.css'; // Ensure you have the correct path to your CSS file

const OTPVerification = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [timer, setTimer] = useState(59); // Starting with 59 seconds as shown in image
  const inputRefs = useRef([]);

  // Timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle input change
  const handleInputChange = (index, value) => {
    // Only allow numeric input
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '');
    const newOtp = [...otp];

    for (let i = 0; i < Math.min(pastedData.length, 6); i++) {
      newOtp[i] = pastedData[i];
    }

    setOtp(newOtp);

    // Focus the next empty input or last input
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      console.log('OTP:', otpValue);
      // Add verification logic here
    }
  };

  const handleResend = () => {
    if (timer > 0) return;

    setTimer(51);
    setOtp(Array(6).fill(''));
    inputRefs.current[0]?.focus();
    // Add resend logic here
  };

  const formatTime = (seconds) => {
    return `0.${seconds.toString().padStart(2, '0')}s`;
  };

  return (
    // The main container for centering the content and the resend section
    <div className="overall-otp-page-container">
      <div className="otp-verification-container">
        <div className="otp-card">
          <div className="otp-header">
            <h1 className="otp-title">OTP Verification</h1>
            <p className="otp-subtitle">An OTP has been sent to your email.</p>
          </div>

          <div className="otp-content">
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="otp-input"
                  placeholder="•"
                />
              ))}
            </div>

            <div className="timer-verify-section">
              <span className="timer">
                {formatTime(timer)}
              </span>
              <button
                onClick={handleVerify}
                disabled={otp.join('').length < 6}
                className="verify-button"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Moved resend-section outside of otp-verification-container */}
      <div className="resend-section">
        <span className="resend-text">Did not receive OTP? </span>
        <button
          onClick={handleResend}
          disabled={timer > 0}
          className={`resend-button ${timer > 0 ? 'disabled' : ''}`}
        >
          Resend
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;