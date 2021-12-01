import styled from "styled-components/native";
import { windowHeight, windowWidth } from "../../utils/windowDimensions";


export const Screen = styled.View`
  flex: 1;
  width: ${windowWidth};
  background-color: #1c1d21;
  align-items: center;
  justify-content: center;
`;

export const PlaceHolderBlob = styled.View`
height: 500px;
width: 500px;
top: 0;
background-color: #5E5CE6;
position: absolute;
margin-top: -175px;
border-radius: 250px;
`;

export const PlaceHolderWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PlaceHolderText = styled.Text`
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  padding: 0 70px;
  text-align: center;
`;

export const BackButton = styled.Pressable`
  margin-top: 50px;
  top: 0;
  align-self: flex-start;
  position: absolute;
`;

export const EnableCameraButton = styled.Pressable`
    background-color: #5E5CE6;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 180px;
    borderRadius: 10px;
    margin-top: 20px;
`;

export const AllowAccessButton = styled.Pressable`
    background-color: transparent;
    border: 2px solid #5E5CE6;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 180px;
    borderRadius: 10px;
    margin-top: 10px;
`;

export const ButtonText = styled.Text`
    color: white;
    fontSize: 18;
    font-weight: 600;
`;