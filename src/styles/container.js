import styled from "styled-components";
import { device } from "../utils/screens";

export const Container = styled.main`
  @media ${device.desktop} {
    width: 900px;
    margin: 0 auto;
    padding: 20px 0;
  }
  @media ${device.tablet} {
    padding: 10px 0;
    margin-left: 40px;
    margin-right: 40px;
  }
  @media ${device.mobileL} {
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px 0;
  }
  @media ${device.mobileS} {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px 0;
  }
`;
