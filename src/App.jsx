import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/contactsSlice";
import { Container, Title, SectionTitle } from "./styles/AppStyles";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Книга контактів</Title>

      <SectionTitle>Додати контакт</SectionTitle>
      <ContactForm />

      <SectionTitle>Пошук</SectionTitle>
      <Filter />

      <SectionTitle>Контакти</SectionTitle>
      <ContactList />
    </Container>
  );
}
