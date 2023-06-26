import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { Header } from "../components/Header";

export function PrivateRoute(props: any) {
  const { user } = useAuth();

  if (user) {
    return (
      <>
        <Header />
        <>{props.children}</>
      </>
    );
  }

  return <Navigate to="/" />;
}
