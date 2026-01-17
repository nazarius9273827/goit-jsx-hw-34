import { Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/contacts/contactsSlice";
import { selectFilter } from "../redux/contacts/contactsSelectors";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Input
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Find contact..."
    />
  );
}
