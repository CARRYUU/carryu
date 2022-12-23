import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transactionService from "./transactionService";

export const addPurchaseRecord = createAsyncThunk(
  "/transaction/purchase",
  async (transactionData, thunkAPI) => {
    return await transactionService.addPurchaseRecord(
      transactionData,
      thunkAPI
    );
  }
);

export const addRefundRecord = createAsyncThunk(
  "/transaction/refund",
  async (transactionData, thunkAPI) => {
    return await transactionService.addRefundRecord(transactionData, thunkAPI);
  }
);

const initialState = {
  transactions: [],
  status: "idle",
  error: null,
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: {
    [addPurchaseRecord.pending]: (state, action) => {
      state.status = "loading";
    },
    [addPurchaseRecord.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.transactions.push(action.payload);
    },
    [addPurchaseRecord.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addRefundRecord.pending]: (state, action) => {
      state.status = "loading";
    },
    [addRefundRecord.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.transactions.push(action.payload);
    },
    [addRefundRecord.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
