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
  height: 45px;
  background-color: #363636;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const QrImage = styled.Image`
  width: 300px;
  height: 300px;
  border-width: 1px;
  border-color: #363636;
`;

export const QrInfo = styled.View`
  background-color: #363636;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
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
`;

export const MoreIcon = styled.Image`
  height: 32px;
  width: 32px;
`;

export const DescriptionContainer = styled.View`
  background-color: #363636;
  padding-left: 15px;
  padding-right: 70px;
  padding-bottom: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  color: #fff;
  opacity: 0.5;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 60px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const LinkButton = styled.Pressable``;

export const Link = styled.Image`
  height: 19px;
`;
export const ShareButton = styled.Pressable``;
