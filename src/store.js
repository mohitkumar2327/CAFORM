import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/usersclice.js'; // Import the user reducer
import otpReducer from '../src/redux/otpslice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    otp: otpReducer, // Add the user reducer here
  },
});