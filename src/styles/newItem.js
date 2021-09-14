import styled from "styled-components";

export const NewItem = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  column-gap: 20px;
  display: grid;
  grid-template-columns: 5fr 1fr;
  & input {
    font-size: 1rem;
    font-family: "Courgette", cursive;
  }
`;
