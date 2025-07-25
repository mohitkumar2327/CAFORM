import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  welcomeSubtitle: "You have 3 tasks pending across 1 entities. Let's get started.",
  activeActionButton: 'getStarted',
  documentCount: 2,
  generalQuestionnaireStatus: 'Not Started',
  queryResolutionStatus: 'Not Started'
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setGetStarted: (state) => {
      state.welcomeSubtitle = "You have 3 tasks pending in 1 entity: Let's get started.";
      state.activeActionButton = 'getStarted';
      state.generalQuestionnaireStatus = 'Completed';
    },
    setViewRespond: (state) => {
      state.welcomeSubtitle = "You have 3 tasks pending in 1 entity: Let's get started.";
      state.activeActionButton = 'viewRespond';
      state.queryResolutionStatus = 'Completed';
    },
    setViewSign: (state) => {
      state.welcomeSubtitle = "You have 2 tasks pending across 2 entities: Let's get started.";
      state.activeActionButton = 'viewSign';
    },
    signDocument: (state) => {
      state.documentCount = Math.max(0, state.documentCount - 1);
    }
  }
});

export const { setGetStarted, setViewRespond, setViewSign, signDocument } = dashboardSlice.actions;
export default dashboardSlice.reducer;