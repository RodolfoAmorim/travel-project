import { NavLink } from "react-router-dom";
import { NavbarContainer } from "./styles";

export function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/destination">Destination</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
    </NavbarContainer>
  );
}
