import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/contactsSlice";
import { selectFilteredContacts, selectIsLoading, selectError } from "../redux/selectors/filteredContactsSelector";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} boxShadow="md" borderRadius="md">
      <Heading mb={4} textAlign="center">My Contacts</Heading>

      <ContactForm />

      <Heading size="md" mt={6} mb={2}>Search Contacts</Heading>
      <Filter />

      {isLoading && <Spinner mt={4} />}
      {error && <Text color="red.500">{error}</Text>}

      <ContactList contacts={contacts} />
    </Box>
  );
}