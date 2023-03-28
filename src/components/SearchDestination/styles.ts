import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme["gray-300"]};
  padding: 1rem;
  border-radius: 100px;
  margin-top: 2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: calc((100% / 3) - 4rem);

  label {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1.75rem;
    line-height: 1;
  }

  input,
  select {
    flex: 1;
    height: 3rem;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`

