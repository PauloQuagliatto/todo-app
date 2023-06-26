import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export function PublicRoute(props: any) {
  const { user } = useAuth();

  if (!user) {
    return <>{props.children}</>;
  }

  return <Navigate to="/todos" />;
}
