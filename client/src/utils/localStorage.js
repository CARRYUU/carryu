export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  console.log("add user to local storage: ", user);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");

  console.log("remove user from local storage");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;

  console.log("get user from local storage: ", user);

  return user;
};
