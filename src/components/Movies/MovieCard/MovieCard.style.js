import { Link } from "react-router-dom";
import { DARK_GREEN, WHITE_NEUTRAL } from "../../../constants/color";
import styled from "styled-components";

export const Card = styled(Link)`
  background: ${DARK_GREEN};
  color: ${WHITE_NEUTRAL};
  width: 340px;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  max-height:600px;
  border-radius:10px 10px 0 0;
`;

export const CardImgContainer = styled.div`
  height:300px;
  display: flex;
  justify-content: center;
`;

export const CardImg = styled.img`
  width: 100%;
  max-height: 300px;
  height: 100%;
  padding:0;
  border-radius:4px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(250, 250, 250, 0.1);
  padding: 8px;
  margin-top: 16px;
  height: 250px;
`;

export const Title = styled.h1`
  margin:16px 0;
  color: ${(props) => (props.isWhite ? WHITE_NEUTRAL : WHITE_NEUTRAL)};
`;

export const Text = styled.p`
  margin:0 0 4px;
`;

export const UperText = styled.span`
  text-transform: uppercase;
  text-decoration: solid;
`;