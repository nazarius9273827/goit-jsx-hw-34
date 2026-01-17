import { Button, Input, VStack, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authOperations";

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(login({
      email: form.email.value,
      password: form.password.value,
    }));
  };

  return (
    <VStack mt={10}>
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </form>
    </VStack>
  );
}
