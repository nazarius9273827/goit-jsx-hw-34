import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOperations";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(c => c.id !== action.payload);
      }),
});

export default contactsSlice.reducer;
