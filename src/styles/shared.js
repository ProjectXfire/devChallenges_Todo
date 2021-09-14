import styled from "styled-components";
import { colors } from "../utils/colors";

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background-color: ${colors.secundary};
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid ${colors.primary};
  outline: none;
  &::placeholder {
    color: ${colors.primary};
  }
`;
