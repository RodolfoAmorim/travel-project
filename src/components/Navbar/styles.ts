import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  font-size: 1.125rem;
  line-height: 1.5;
  letter-spacing: 0.75px;
  font-weight: 300;

  a {
    display: block;
    position: relative;
    opacity: 0.7;
    transition: all .3s;

    &:hover{
      opacity: 1;
      transition: all .3s;
    }

    &.active {
      opacity: 1;

      &::after {
        content: "";
        width: 2.5rem;
        height: 2px;
        background-color: ${(props) => props.theme["gray-100"]};
        border-radius: 10px;
        position: absolute;
        bottom: -0.75rem;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
`;
