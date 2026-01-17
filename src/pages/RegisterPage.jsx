import React, { useState } from "react";
import {
  Heading,
  VStack,
  Field,
  FieldLabel,
  FieldErrorText,
  Input,
  Button,
  Alert,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Будь ласка, заповніть всі поля");
    } else {
      setError(null);
      console.log("Register data:", { email, password });
    }
  };

  return (
    <VStack spacing={6} align="stretch" maxW="400px" mx="auto" mt="10">
      <Heading textAlign="center">Реєстрація</Heading>

      {error && (
        <Alert status="error">
          <AlertTitle>Помилка</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FieldErrorText>{!email && "Email обов'язковий"}</FieldErrorText>
          </Field>

          <Field>
            <FieldLabel>Пароль</FieldLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FieldErrorText>{!password && "Пароль обов'язковий"}</FieldErrorText>
          </Field>

          <Button type="submit" colorScheme="green">
            Зареєструватися
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};

export default RegisterPage;
