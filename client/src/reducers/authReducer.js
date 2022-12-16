import { LOGIN, LOGOUT } from "../actions/constants";

const authReducer = (state = {authData: null}, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", JSON.stringify({...action?.data}));

      return { ...state, authData: action?.data};
    case LOGOUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authReducer;
