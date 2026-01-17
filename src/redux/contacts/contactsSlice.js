import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsAPI from "../../api/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    return await contactsAPI.fetchContacts();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
  try {
    return await contactsAPI.addContact(contact);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    return await contactsAPI.deleteContact(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(fetchContacts.fulfilled, (state, action) => { state.isLoading = false; state.items = action.payload; })
      .addCase(fetchContacts.rejected, (state, action) => { state.isLoading = false; state.error = action.payload; })

      .addCase(addContact.pending, (state) => { state.isLoading = true; })
      .addCase(addContact.fulfilled, (state, action) => { state.isLoading = false; state.items.push(action.payload); })
      .addCase(addContact.rejected, (state, action) => { state.isLoading = false; state.error = action.payload; })

      .addCase(deleteContact.pending, (state) => { state.isLoading = true; })
      .addCase(deleteContact.fulfilled, (state, action) => { state.isLoading = false; state.items = state.items.filter((i) => i.id !== action.payload); })
      .addCase(deleteContact.rejected, (state, action) => { state.isLoading = false; state.error = action.payload; });
  },
});

export const contactsReducer = contactsSlice.reducer;
