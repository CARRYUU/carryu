const authHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().auth.token}`,
    },
  };
};

export default authHeader;
