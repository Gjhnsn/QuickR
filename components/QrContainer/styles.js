import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 30};
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const QrWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const QrImage = styled.Image`
  width: 300px;
  height: 300px;
`;
