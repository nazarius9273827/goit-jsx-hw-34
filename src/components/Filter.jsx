import { useDispatch } from "react-redux";
import { setFilter } from "../redux/filter/filterSlice";
import { FilterInput } from "../styles/FilterStyles";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterInput
      type="text"
      placeholder="Пошук контактів..."
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
}
