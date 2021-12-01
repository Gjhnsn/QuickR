import styled from "styled-components";
import { windowHeight, windowWidth } from "../../utils/windowDimensions";
import { Dimensions, Platform } from "react-native";

export const ModalOverlay = styled.Pressable`
  display: flex;
  z-index: 100;
  opacity: 0.75;
  height: ${Dimensions.get("window").height * 2}px;
  width: ${windowWidth};
  position: absolute;
  flex-direction: row;
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
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding-bottom: ${Platform.OS === "ios" ? '30%' : '20px'};
  width: 100%;
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

export const InputLimitWrapper = styled.View`
  align-items: flex-end;
  margin-top: 5px;
`;

export const InputLimitIndicator = styled.Text`
  color: white;
`;