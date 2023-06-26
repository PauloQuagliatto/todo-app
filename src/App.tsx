import { AuthProvider } from "./contexts/AuthContext";
import { Routes } from "./routes";

import { globalCss } from "./styles";
import { Container } from "./styles/defaults/main-container";

const css = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    backgroundColor: "$background",
    color: "white",
  },
  "input, button, span, li": {
    fontFamily: "Roboto",
  },
  button: {
    cursor: "pointer",
  },
});

export function App() {
  css();
  return (
    <Container>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Container>
  );
}
