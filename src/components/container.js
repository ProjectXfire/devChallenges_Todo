import React from "react";
// Styles
import { Container as ContainerStyled } from "../styles/container";

export const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
