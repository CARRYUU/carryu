import * as api from "../api";
import { LOGIN, LOGOUT } from "./constants";

export const login = (formData) => async (dispatch) => {
  try {
    // Login the user...
    const { data } = await api.login(formData);

    dispatch({ type: LOGIN, data });

    // history.push("/");
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await api.logout();

    dispatch({ type: LOGOUT });

    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
};
