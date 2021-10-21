import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import {windowWidth} from '../../utils/windowDimensions';

export const Container = styled.View`
  width: ${windowWidth};
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  
`;

export const QrWrapper = styled.View`

`;

export const QrImage = styled.Image`
  width: 300px;
  height: 300px;
  border: 1px solid #363636;
`;


export const QrInfo = styled.View`
  width: 300px;
  height: 45px;
  background-color: #363636;
`;