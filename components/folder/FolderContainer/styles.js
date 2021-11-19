import styled from "styled-components/native";
import { windowWidth } from "../../../utils/windowDimensions";


export const Container = styled.View`
  width: ${windowWidth};
  margin-top: 85px;
`;

export const PlaceHolderContainer = styled.View`
  width: 100%;
  height: 225px;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const PlaceHolderTextWrapper = styled.View`
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const TextHeader = styled.Text`
  color: white;
  font-size: 20px;
  font-family: OpenSans_700Bold;
  margin: 5px;
`;

export const TextSubHeader = styled.Text`
  color: white;
  font-size: 16px;
  font-family: OpenSans_400Regular;
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
  font-family: OpenSans_700Bold;
  align-self: center;
`;
