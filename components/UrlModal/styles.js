import styled from "styled-components/native";
import { windowWidth } from "../../utils/windowDimensions";
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
  align-items: flex-end;
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

export const ModalContainer = styled.View`
  width: 100%;
  height: 500px;
  background-color: rgb(54, 54, 54);
  align-self: center;
  margin-top: ${Dimensions.get("window").height / 8}px;
  border-radius: 10px;
`;

export const AddUrlTitleContainer = styled.View`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 15px;
`;

export const AddUrlText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
`;

export const FormWrapper = styled.View`
  padding: 0 15px;
  flex-direction: column;
`;

export const UrlInputContainer = styled.View`
  width: 100%;
  height: 35px;
  background-color: #3b3b3d;
  margin-top: 20px;
  border: 1px solid white;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UrlInput = styled.TextInput`
  padding-left: 15px;
  padding-right: 35px;
  color: #fff;
  width: 100%;
`;

export const QrIconButton = styled.Pressable`
  position: absolute;
  right: 0;
  padding-right: 5px;
`;

export const Input = styled.TextInput`
  padding: 0 15px;
  width: 100%;
  height: 35px;
  background-color: #3b3b3d;
  margin-top: 15px;
  border: 1px solid white;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  color: #fff;
`;

export const DescriptionInput = styled.TextInput`
  padding: 0 15px;
  width: 100%;
  height: 100px;
  background-color: #3b3b3d;
  margin-top: 15px;
  border: 1px solid white;
  border-radius: 5px;
  padding-top: 10px;
  color: #fff;
`;

export const FolderSection = styled.View`
  padding: 0 15px 15px 15px;
  border: 1px solid white;
  margin: 15px;
  border-radius: 5px;
  color: white;
`;

export const ChooseFolderLabel = styled.Text`
  color: #c1c1c1;
  margin: 25px 0 0 0;
`;

export const SelectFolder = styled.View`
  padding: 0 15px;
  width: 100%;
  border: 1px solid white;
  height: 45px;
  justify-content: center;
  background-color: #3b3b3d;
  border-radius: 5px;
`;

export const PickerContainer = styled.View``;

export const FolderItemText = styled.Text`
  color: #fff;
`;

export const BtnFooter = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const SaveBtnWrapper = styled.Pressable`
  width: 40%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const SaveText = styled.Text`
  color: #fff;
`;
