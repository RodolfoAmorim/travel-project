import styled, { css } from "styled-components";

interface ButtonProps {
  variant: "default" | "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  width: auto;
  min-width: 8rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 0.75px;
  padding: 0 1.5rem;
  border: 2px solid transparent;
  border-radius: 100px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
  }

  ${({ variant }) =>
    variant === "default" &&
    css`
      color: ${(props) => props.theme["gray-100"]};
      background-color: transparent;

      &:hover {
        border-color: ${(props) => props.theme["gray-100"]};
      }
    `}

  ${({ variant }) =>
    variant === "primary" &&
    css`
      color: ${(props) => props.theme["gray-500"]};
      background-color: ${(props) => props.theme.white};

      &:hover {
        border-color: ${(props) => props.theme["gray-500"]};
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme["orange-200"]};

      &:hover {
        border-color: ${(props) => props.theme.white};
      }
    `}
`;
