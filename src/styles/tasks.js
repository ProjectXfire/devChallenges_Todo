import styled from "styled-components";

export const Tasks = styled.ul`
  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    & div {
      display: flex;
    }
    & input {
      margin-right: 10px;
    }
    & svg {
      cursor: pointer;
      &:active {
        transform: scale(0.9);
      }
    }
    & p {
      text-decoration: ${(props) =>
        props.activeTag === "Completed" ? "line-through" : ""};
    }
  }
`;
