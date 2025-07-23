import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userEmail: null,
  name: 'John',
  masterEntityName: 'x x x x',
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
       // You could add reducers here to update the state,
    // e.g., for when a user logs in.
    setUserName: (state, action) => {
       state.name = action.payload;
     },
    setMasterEntityName: (state, action) => {
      state.masterEntityName = action.payload;
     }
  },
});

export const { setUserName, setMasterEntityName } = userSlice.actions;
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;