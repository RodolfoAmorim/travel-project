import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  min-height: 85vh;
`;

export const HomeHeader = styled.header`
  background-image: url(images/baloons_2.png);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeShadowCover = styled.div`
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  background: linear-gradient(
    180deg,
    rgba(22, 22, 22, 0.5) 0%,
    rgba(22, 22, 22, 0.1) 32%,
    rgba(22, 22, 22, 0.2) 70%,
    #161616 100%
  );
  color: ${(props) => props.theme.white};
  text-align: center;

  h1 {
    font-size: 5rem;
    line-height: 1.2;
    letter-spacing: -0.25px;
    display: block;
    max-width: 68rem;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 400;
    display: block;
    max-width: 32rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
      svg {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
        border-radius: 100px;
        color: ${(props) => props.theme["orange-200"]};
        background-color: ${(props) => props.theme["gray-100"]};
      }
    }
  }
`;

export const HomeNumberCounter = styled.section`
  width: 100%;
  height: 12.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: ${(props) => props.theme["gray-600"]};
  color: ${(props) => props.theme["gray-100"]};

  #counterContainer {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    gap: 3rem;

    div {
      &:last-child::after {
        display: none;
      }
    }
  }
`;

export const HomeSearchDestination = styled.section`
  #searchDestinationContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 7rem;
  }

  h4 {
    font-size: 1.125rem;
    line-height: 1.5;
    letter-spacing: 1.25px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${(props) => props.theme["orange-200"]};
  }

  h2 {
    font-size: 4rem;
    line-height: 1.6;
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.5;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme["gray-400"]};
  }

  form {
    width: 100%;
    max-width: 56rem;
  }
`;
