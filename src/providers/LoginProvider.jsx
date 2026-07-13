import { useContext, useState } from "react";
import { createContext } from "react";

const LoginContext = createContext(false);

export function LoginProvider({ children }) {
  const [isLogin, setLogin] = useState(false);

  const login = () => setLogin(true);
  const logout = () => setLogin(false);

  return (
    <LoginContext value={{ isLogin, login, logout }}>{children}</LoginContext>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
