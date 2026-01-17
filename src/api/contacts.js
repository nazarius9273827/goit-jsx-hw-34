import axios from "axios";

axios.defaults.baseURL = "https://6921e7c2512fb4140be1b5ad.mockapi.io";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const fetchContacts = async () => {
  const response = await axios.get("/contacts");
  return response.data;
};

export const addContact = async (contact) => {
  const response = await axios.post("/contacts", contact);
  return response.data;
};

export const deleteContact = async (id) => {
  await axios.delete(`/contacts/${id}`);
  return id;
};
