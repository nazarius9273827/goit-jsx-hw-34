import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { useState } from "react";

import { Form, Input, Button } from "../styles/FormStyles";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));

    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Input
        type="tel"
        placeholder="Телефон"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />

      <Button type="submit">Додати</Button>
    </Form>
  );
}
