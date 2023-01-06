import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import challengeService from "./challengeService";

export const addChallengeRecord = createAsyncThunk(
  "/challenge/add",
  async (challengeData, thunkAPI) => {
    return await challengeService.addChallengeRecord(challengeData, thunkAPI);
  }
);

export const getChallengeHistory = createAsyncThunk(
  "/challenge",
  async (thunkAPI) => {
    return await challengeService.getChallengeHistory(thunkAPI);
  }
);

export const setChallengeToSuccess = createAsyncThunk(
  "/challenge/set-to-success",
  async (challengeId, thunkAPI) => {
    return await challengeService.setChallengeToSuccess(challengeId, thunkAPI);
  }
);

export const setChallengeToFailed = createAsyncThunk(
  "/challenge/set-to-failed",
  async (challengeId, thunkAPI) => {
    return await challengeService.setChallengeToFailed(challengeId, thunkAPI);
  }
);

const initialState = {
  challengeHistory: [],
  hasChallenge: false,
  status: "idle",
  isError: null,
  isLoading: false,
};

export const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    setHasChallenge: (state, action) => {
      state.hasChallenge = action.payload;
    },
  },
  extraReducers: {
    [addChallengeRecord.fulfilled]: (state, action) => {
      state.challengeHistory = action.payload;
      state.isLoading = false;
    },
    [addChallengeRecord.pending]: (state) => {
      state.isLoading = true;
    },
    [addChallengeRecord.rejected]: (state) => {
      state.isLoading = false;
      state.challengeHistory = null;
      state.isError = true;
    },
    [getChallengeHistory.fulfilled]: (state, action) => {
      state.challengeHistory = action.payload;
      state.isLoading = false;
    },
    [getChallengeHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [getChallengeHistory.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [setChallengeToSuccess.fulfilled]: (state, action) => {
      state.challengeHistory = action.payload;
      state.isLoading = false;
    },
    [setChallengeToSuccess.pending]: (state) => {
      state.isLoading = true;
    },
    [setChallengeToSuccess.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [setChallengeToFailed.fulfilled]: (state, action) => {
      state.challengeHistory = action.payload;
      state.isLoading = false;
    },
    [setChallengeToFailed.pending]: (state) => {
      state.isLoading = true;
    },
    [setChallengeToFailed.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getChallengeHistory.fulfilled]: (state, action) => {
      state.challengeHistory = action.payload;
      state.isLoading = false;
    },
    [getChallengeHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [getChallengeHistory.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { setHasChallenge } = challengeSlice.actions;

export default challengeSlice.reducer;
