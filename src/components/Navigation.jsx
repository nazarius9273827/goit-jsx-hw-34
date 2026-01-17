import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HStack, Button } from "@chakra-ui/react";
import { selectIsLoggedIn } from "../redux/auth/authSelectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HStack p={4} gap={4}>
      {isLoggedIn ? (
        <Link to="/contacts">Contacts</Link>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </HStack>
  );
}
