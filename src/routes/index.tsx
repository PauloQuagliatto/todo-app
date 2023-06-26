import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { TodosPage } from "../pages/TodosPage";
import { LoginPage } from "../pages/LoginPage";
import { PublicRoute } from "./PublicRoute";

export function Routes() {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/todos"
          element={
            <PrivateRoute>
              <TodosPage />
            </PrivateRoute>
          }
        />
      </BrowserRoutes>
    </BrowserRouter>
  );
}
