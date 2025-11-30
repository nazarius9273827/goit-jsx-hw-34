import { createSelector } from "reselect";
import { selectContacts } from "../contacts/contactsSelectors";
import { selectFilter } from "../filter/filterSelectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
