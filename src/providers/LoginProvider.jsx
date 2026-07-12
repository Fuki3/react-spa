import { useContext, useState } from "react";
import { createContext } from "react";

const LoginContext = createContext(false);

export function LoginProvider({ children }) {
  const [login, setLogin] = useState(false);
  return <LoginContext value={{ login, setLogin }}>{children}</LoginContext>;
}

export function UseLogin() {
  return useContext(LoginContext);
}
