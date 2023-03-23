import { NavLink } from "react-router-dom";
import { Button } from "../Button/styles";
import { Navbar } from "../Navbar";
import { HeaderAccessButtons, HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" id="logo">
          Turf
        </NavLink>

        <Navbar />

        <HeaderAccessButtons>
          <Button variant="default">Login</Button>

          <NavLink to="/">
            <Button variant="primary">Register</Button>
          </NavLink>
        </HeaderAccessButtons>
      </HeaderContent>
    </HeaderContainer>
  );
}
