import styled from "styled-components";
import { WHITE_NEUTRAL } from "../../constants/color";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 48px 0;
  padding: 64px;
  height: 100%;
  min-height: 100vh;
  gap: 16px;
  flex-wrap: wrap;
`;

export const HomeImageBackground = styled.img`
  width: 100%;
  padding: 0;
  height: auto;
  max-height: 800px;
`;

export const HomeText = styled.h1`
color:${WHITE_NEUTRAL};
@media screen and (max-width: 820px) {
    text-align:center;
  }
`;