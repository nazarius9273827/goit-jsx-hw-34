import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";
import { selectUser } from "../redux/auth/authSelectors";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10
    }}>
      <p>{user?.email || "Unknown"}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}