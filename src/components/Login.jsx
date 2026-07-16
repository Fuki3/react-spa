import { createContext, useContext } from "react";

export const LoginContext = createContext(false);

export function useLogin() {
  return useContext(LoginContext);
}
