import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/usersclice.js'; // Import the user reducer
import otpReducer from '../src/redux/otpslice.js';
import dashboardReducer from '../src/redux/dashboardSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    otp: otpReducer,
    dashboard: dashboardReducer,
  },
});