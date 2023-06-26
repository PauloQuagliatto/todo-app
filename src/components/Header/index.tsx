import { SignOut } from "phosphor-react";

import { useAuth } from "../../hooks/useAuth";

import { Button } from "../../styles/defaults/base-button";
import { HeaderContainer } from "./styles";

export function Header() {
  const { logout } = useAuth();

  return (
    <HeaderContainer>
      <Button buttonType="signOutButton" onClick={logout}>
        <SignOut size={32} />
      </Button>
    </HeaderContainer>
  );
}
