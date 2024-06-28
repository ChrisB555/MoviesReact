import {Link} from "react-router-dom";
import styled from "styled-components";
import {
  DARK_GRAY,
  DARK_GREEN,
  RED_ORANGE,
  WHITE_NEUTRAL,
} from "../../../src/constants/color";

export const Title = styled.h1`
  color: ${WHITE_NEUTRAL};
  
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-top:10px;
  margin-left:20px;
  border-radius: 50%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  vertical-align: middle;
  background: ${RED_ORANGE};
  color: white;
  width: 100%;
  height: 60px;
  position: relative;

`;

export const LinkNavStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${WHITE_NEUTRAL};
  padding: 8px 16px;
  margin:10px 50px;
  border-radius:4px;
  &:hover {
    background: ${DARK_GRAY};
    color: ${WHITE_NEUTRAL};
    border-radius: 0;
  }
  @media screen and (max-width: 820px) {
    color: ${DARK_GREEN};
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${WHITE_NEUTRAL};
  color: ${DARK_GREEN};
  width: 200px;
  position: absolute;
  top: 60px;
  right: 0;
  display: none;
  border-radius:8px;

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  color: ${DARK_GRAY};
  width: 100%;
`;

export const LinkContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ButtonDropdown = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  color: ${WHITE_NEUTRAL};
  display: none;
  padding:0px;
  margin:10px;
  border:none;
  &:hover {
    background: ${DARK_GREEN};
  }
  @media screen and (max-width: 820px) {
    display: block;
  }
`;