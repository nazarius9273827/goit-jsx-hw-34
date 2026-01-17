import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/contactsOperations";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>{c.name}: {c.number}</li>
      ))}
    </ul>
  );
}
