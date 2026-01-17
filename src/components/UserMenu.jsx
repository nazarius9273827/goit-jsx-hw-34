import { useDispatch, useSelector } from "react-redux";
import { Button, HStack, Text } from "@chakra-ui/react";
import { logout } from "../redux/auth/authOperations";
import { selectUser } from "../redux/auth/authSelectors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <HStack>
      <Text>{user?.email}</Text>
      <Button size="sm" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </HStack>
  );
}
