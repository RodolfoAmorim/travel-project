import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 100rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  color: ${props => props.theme["gray-100"]};

  #logo {
    font-size: 2rem;
    line-height: 1;
    font-weight: 600;
    letter-spacing: -0.15px;
  }
`;

export const HeaderAccessButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`