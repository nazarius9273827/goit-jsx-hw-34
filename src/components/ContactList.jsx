import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../redux/selectors/filteredContactsSelector";
import { selectIsLoading, selectError } from "../redux/contacts/contactsSelectors";
import { deleteContact } from "../redux/contacts/contactsSlice";
import { List, ListItem, DeleteButton } from "../styles/ListStyles";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <>
      {isLoading && <p>Завантаження...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <DeleteButton onClick={() => dispatch(deleteContact(id))}>
              Видалити
            </DeleteButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
