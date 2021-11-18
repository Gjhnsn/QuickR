import styled from "styled-components";
import { windowWidth } from "../../../utils/windowDimensions";

export const FolderContainer = styled.TouchableOpacity`
  width: ${windowWidth};
  background-color: #363636;
  display: flex;
  flex-direction: column;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
`;

export const FolderTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-right: 16px;
`;

export const FolderColorBubble = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${(props) => props.folderColor || "pink"};
  margin-right: 15px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FolderInitialElements = styled.View`
  width: ${windowWidth};
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const FolderOpenedElements = styled.View`
  width: ${windowWidth};
`;
