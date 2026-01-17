import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navigation from "./components/Navigation";
import UserMenu from "./components/UserMenu";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactsPage from "./pages/ContactsPage";
import PrivateRoute from "./components/PrivateRoute";

import { refreshUser } from "./redux/auth/authOperations";
import { selectIsLoggedIn } from "./redux/auth/authSelectors";

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      {isLoggedIn && <UserMenu />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
