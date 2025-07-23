import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/usersclice.js'; // Import the user reducer

export const store = configureStore({
  reducer: {
    user: userReducer, // Add the user reducer here
  },
});