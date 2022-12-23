import * as api from "./api.js";
import { toast } from "react-toastify";

const addPurchaseRecord = async (transactionData, thunkAPI) => {
  try {
    const { response } = await api.addPurchaseRecord(transactionData);

    if (!response.data) {
      console.log("No data returned from addPurchaseRecord API call.");

      toast.error("Something went wrong. Please try again later.");

      return;
    }

    toast.success("Purchase record added successfully.");

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addPurchaseRecordError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const addRefundRecord = async (transactionData, thunkAPI) => {
  try {
    const { response } = await api.addRefundRecord(transactionData);

    if (!response.data) {
      console.log("No data returned from addRefundRecord API call.");

      toast.error("Something went wrong. Please try again later.");

      return;
    }

    toast.success("Refund record added successfully.");

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addRefundRecordError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const transactionService = {
  addPurchaseRecord,
  addRefundRecord,
};

export default transactionService;
