import { useState } from "react";
import { LoginContext } from "../components/Login.jsx";

export function LoginProvider({ children }) {
  const [isLogin, setLogin] = useState(false);

  const login = () => setLogin(true);
  const logout = () => setLogin(false);

  return (
    <LoginContext value={{ isLogin, login, logout }}>{children}</LoginContext>
  );
}
