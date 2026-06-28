import { useState } from "react";
import { LoginContext } from "../contexts/LoginContext.jsx";

export function LoginProvider({ children }) {
  const [login, setLogin] = useState(false);
  return <LoginContext value={{ login, setLogin }}>{children}</LoginContext>;
}
