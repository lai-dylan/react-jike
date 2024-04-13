import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

export function AuthRoute({ children }) {
  const token = getToken();
  return token == null ? <Navigate to={"/login"} /> : <>{children}</>;
}
