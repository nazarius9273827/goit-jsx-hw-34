// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import UserMenu from "./UserMenu";
// import { selectToken } from "../redux/auth/authSelectors";

// export default function Navigation() {
//   const token = useSelector(selectToken); // безпечний доступ через селектор

//   return (
//     <nav style={{
//       display: "flex",
//       gap: 20,
//       padding: 15,
//       borderBottom: "1px solid #ccc",
//       alignItems: "center"
//     }}>
//       {!token && (
//         <>
//           <Link to="/register">Register</Link>
//           <Link to="/login">Login</Link>
//         </>
//       )}

//       {token && <Link to="/contacts">Contacts</Link>}
//       {token && <UserMenu />}
//     </nav>
//   );
// }

const Navigation = () => {
  return (
    <nav>
      <a href="/login">Login</a> |{" "}
      <a href="/register">Register</a> |{" "}
      <a href="/contacts">Contacts</a>
    </nav>
  );
};

export default Navigation;