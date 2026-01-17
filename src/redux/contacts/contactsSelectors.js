import { createSelector } from "reselect";

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    )
);
