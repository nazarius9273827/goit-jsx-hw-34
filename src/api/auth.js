import axios from "axios";

axios.defaults.baseURL = "https://6921e7c2512fb4140be1b5ad.mockapi.io";

export const registerUser = async (userData) => {
  const response = await axios.post("/users/signup", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post("/users/login", userData);
  return response.data;
};

export const updateUser = async (token, userData) => {
  const response = await axios.patch("/users", userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
