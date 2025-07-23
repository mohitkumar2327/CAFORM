import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userEmail: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to handle a successful login
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userEmail = action.payload.email;
    },
    // Action to handle a logout
    logout: (state) => {
      state.isLoggedIn = false;
      state.userEmail = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;