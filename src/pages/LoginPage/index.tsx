import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { NewUserForm } from "../../components/NewUserForm";
import { LoginForm } from "../../components/LoginForm";
import { LoginPageContainer } from "./styles";
import { Button } from "../../styles/defaults/base-button";

export function LoginPage() {
  const [isLogginIn, setIsLogginIn] = useState(true);
  const navigate = useNavigate();

  function changeForm() {
    setIsLogginIn(!isLogginIn);
  }

  function redirectToTodosPage() {
    navigate("/todos");
  }

  return (
    <LoginPageContainer>
      {isLogginIn ? (
        <LoginForm redirectToTodosPage={redirectToTodosPage} />
      ) : (
        <NewUserForm redirectToTodosPage={redirectToTodosPage} />
      )}
      <Button buttonType="link" type="button" onClick={changeForm}>
        {isLogginIn ? "Nao tenho conta" : "Logar"}
      </Button>
    </LoginPageContainer>
  );
}
