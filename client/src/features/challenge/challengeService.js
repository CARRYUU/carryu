import * as api from "../api";
import { toast } from "react-toastify";

const addChallengeRecord = async (data, thunkAPI) => {
  try {
    const response = await api.addChallengeRecord(data);

    if (!response.data) {
      console.log("No data returned from addChallengeRecord API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addChallengeRecordError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getChallengeHistory = async (thunkAPI) => {
  try {
    const response = await api.getChallengeHistory();

    if (!response.data) {
      console.log("No data returned from getChallengeHistory API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getChallengeHistoryError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const setChallengeToSuccess = async (data, thunkAPI) => {
  try {
    const response = await api.setChallengeToSuccess(data);

    if (!response.data) {
      console.log("No data returned from setChallengeToSuccess API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "setChallengeToSuccessError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const setChallengeToFailed = async (data, thunkAPI) => {
  try {
    const response = await api.setChallengeToFailed(data);

    if (!response.data) {
      console.log("No data returned from setChallengeToFailed API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "setChallengeToFailedError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const challengeService = {
  addChallengeRecord,
  getChallengeHistory,
  setChallengeToSuccess,
  setChallengeToFailed,
};

export default challengeService;
