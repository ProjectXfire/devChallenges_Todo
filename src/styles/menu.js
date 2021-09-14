import styled from "styled-components";
import { colors } from "../utils/colors";

export const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: 2px solid ${colors.primary};
`;

export const MenuOption = styled.div`
  width: 80px;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  padding-bottom: 10px;
  border-bottom: ${(props) => `4px solid ${props.color}`};
  border-radius: 2px;
`;
