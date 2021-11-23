import styled from "styled-components/native";
import { SafeAreaView, Platform, StatusBar } from "react-native";

import { windowWidth } from "../../utils/windowDimensions";

export const GlobalContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  background-color: #1c1d21;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
   margin-top: ${Platform.OS === "ios" ? 0 : -20}px; 
  margin-bottom: 0;
  padding: 10px;
  align-items: center;
  width: ${windowWidth};
  z-index: 20;
`;

export const PlaceHolderContainer = styled.View`
  border: 1px solid white;
  width: 300px;
  height: 225px;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const PlaceHolderTextWrapper = styled.View`
  align-items: center;
  border: 1px solid pink;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const TextHeader = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 5px;
`;

export const TextSubHeader = styled.Text`
  color: white;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const AddFolderButton = styled.Pressable`
  background-color: #5e5ce6;
  width: 125px;
  height: 35px;
  border-radius: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  align-self: center;
`;
