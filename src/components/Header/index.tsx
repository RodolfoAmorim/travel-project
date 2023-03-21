import { HeaderContainer } from "./styles";

export function Header () {
  return(
    <HeaderContainer>
      <span>Login</span>

      <nav>
        <ul>
          <li>Home</li>
          <li>Destination</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </nav>

      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    </HeaderContainer>
  )
}