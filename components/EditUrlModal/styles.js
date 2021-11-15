import styled from "styled-components";
import { windowHeight, windowWidth } from "../../utils/windowDimensions";
import { Dimensions } from "react-native";

export const ModalOverlay = styled.Pressable`
  display: flex;
  z-index: 100;
  background-color: #000;
  opacity: 0.75;
  height: ${Dimensions.get("window").height * 2}px;
  width: ${windowWidth};
  position: absolute;
  justify-content: center;
`;

export const CloserOverlay = styled.Pressable`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const GradientBackground = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow: hidden;
`;

export const CloseContainer = styled.View`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  margin-top: 15px;
`;

export const BtnFooter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 40px;
  justify-content: space-between;
`;

export const CreateFolderBtn = styled.Pressable`
  background-color: #3e8637;
  width: 48%;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
`;

export const CreateText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

export const SaveText = styled.Text`
  color: white;
  text-align: center;
`;

export const CancelBtn = styled.Pressable`
  width: 48%;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background-color: #df4c46;
`;

export const DeleteText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;
