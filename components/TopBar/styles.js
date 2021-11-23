import styled from "styled-components/native";
import { windowWidth } from "../../utils/windowDimensions";
import { Platform, StatusBar } from "react-native";

export const NavigationContainer = styled.View`
  width: ${windowWidth};
  height: 80px;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 25px;
  padding-left: 20px;
  margin-top: ${Platform.OS === "ios" ? "0px" : StatusBar.currentHeight};
  /* margin-top: 100px; */
`;

export const LogoPlaceholder = styled.View`
  width: 40px;
  height: 40px;
  background-color: #fff;
`;
