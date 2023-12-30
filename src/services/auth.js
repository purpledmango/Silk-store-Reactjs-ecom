import api from "./api";

export const login = async (credentials) => {
  try {
    const loggedInUser = api.post("/auth/login", credentials);
    return loggedInUser.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
