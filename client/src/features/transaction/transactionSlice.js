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
  oneCourseToPurchase: null,
  purchaseDirectly: false,
  status: "idle",
  transactionError: null,
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    switchBuyDirectly: (state, action) => {
      state.purchaseDirectly = action.payload;
    },
    setOneCourseToPurchase: (state, action) => {
      state.oneCourseToPurchase = action.payload;
    },
  },
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
      state.transactionError = action.error.message;
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
      state.transactionError = action.error.message;
    },
  },
});

export const { switchBuyDirectly, setOneCourseToPurchase } =
  transactionSlice.actions;

export default transactionSlice.reducer;
