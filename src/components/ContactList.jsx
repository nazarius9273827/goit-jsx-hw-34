import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import { List, ListItem, DeleteButton } from "../styles/ListStyles";

export default function ContactList() {
  const { items, isLoading, error } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const filtered = items.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <p>Завантаження...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <List>
        {filtered.map(({ id, name, number }) => (
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
