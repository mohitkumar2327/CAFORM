import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVerifying: false,
  verificationSuccess: false,
  error: null,
};

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    startVerification: (state) => {
      state.isVerifying = true;
      state.verificationSuccess = false;
      state.error = null;
    },
    verificationSucceeded: (state) => {
      state.isVerifying = false;
      state.verificationSuccess = true;
      state.error = null;
    },
    verificationFailed: (state, action) => {
      state.isVerifying = false;
      state.verificationSuccess = false;
      state.error = action.payload; // Payload would be the error message
    },
  },
});

export const { startVerification, verificationSucceeded, verificationFailed } = otpSlice.actions;

export default otpSlice.reducer;