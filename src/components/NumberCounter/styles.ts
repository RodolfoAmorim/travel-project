import styled from "styled-components";

export const NumberValueContainer = styled.div`
  width: 100%;
  max-width: 18.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.875rem;
  position: relative;

  &::after {
    content: "";
    width: 2px;
    height: 2rem;
    position: absolute;
    right: -1.5rem;
    background-color: ${(props) => props.theme["gray-400"]};
  }

  h3 {
    font-size: 4rem;
    line-height: 1.2;
    letter-spacing: -0.15px;
    font-weight: 700;
  }

  p {
    display: block;
    flex: 1;
    padding: 0.5rem 3rem 0.5rem 0.5rem;
    font-size: 1.25rem;
    line-height: 1.5;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: ${(props) => props.theme["gray-400"]};
  }
`;
