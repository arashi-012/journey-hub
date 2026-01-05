import { Navigate } from "react-router-dom";
import { useLoginContext } from "../contexts/login/useLoginContext";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  const { userInfo } = useLoginContext();

  const isAuthenticated = userInfo.email !== "";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
