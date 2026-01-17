import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async () => {
    const res = await api.get("/contacts");
    return res.data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (contact) => {
    const res = await api.post("/contacts", contact);
    return res.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id) => {
    await api.delete(`/contacts/${id}`);
    return id;
  }
);
