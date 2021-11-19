import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { windowWidth } from "../../utils/windowDimensions";

export const Container = styled.View`
  width: ${windowWidth};
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const QrWrapper = styled.View`
  width: 300px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const QrImage = styled.Image`
  width: 300px;
  height: 300px;
  border-width: 1px;
  border-color: #1c1d21;
`;

export const QrNameContainer = styled.View`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: row;
`;

export const QrName = styled.Text`
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  font-family: OpenSans_700Bold;
`;

export const MoreIcon = styled.Image`
  height: 32px;
  width: 32px;
`;

export const DescriptionContainer = styled.View`
  padding-left: 15px;
  padding-right: 60px;
  padding-bottom: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 85px;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  color: #fff;
  opacity: 0.5;
  height: 70px;
  font-family: OpenSans_400Regular;
  letter-spacing: 1px;
`;

export const ButtonContainer = styled.View`
  flex-direction: column;
  height: 73px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  margin-bottom: 13px;
`;

export const LinkButton = styled.Pressable``;


export const ShareButton = styled.Pressable``;
