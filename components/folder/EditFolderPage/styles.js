import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #1c1d21;
  width: 100%;
  height: 120%;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const BackArrowContainer = styled.Pressable`
  position: absolute;
  padding-left: 30px;
  margin-top: 60px;
`;

export const BackArrowIcon = styled.Image`
  height: 20px;
  width: 15px;
`;

export const FolderTitleContainer = styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 40px;
`;

export const FolderTitle = styled.Text`
  color: #fff;
  font-size: 32px;
`;

export const EditChange = styled.Pressable`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-right: 5px;
`;

export const InputContainer = styled.View``;

export const FolderInputSection = styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 25px;
`;

export const FolderNameLabel = styled.Text`
  color: #fff;
  margin-bottom: 20px;
`;

export const FolderInput = styled.TextInput`
  height: 50px;
  background-color: ${(props) => (props.editMode ? `#3b3b3d` : `transparent`)};
  padding: ${(props) => (props.editMode ? `10px` : `0px`)};
  border-bottom-width: ${(props) => (props.editMode ? `1px` : `0px`)};
  border-bottom-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #fff;
  z-index: 10;
`;

export const DescriptionSection = styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 25px;
`;

export const DescriptionLabel = styled.Text`
  color: #fff;
  margin-bottom: 20px;
`;
export const DescriptionInput = styled.TextInput`
  background-color: ${(props) => (props.editMode ? `#3b3b3d` : `transparent`)};
  padding: ${(props) => (props.editMode ? `10px` : `0px`)};
  border-bottom-width: ${(props) => (props.editMode ? `1px` : `0px`)};
  border-bottom-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #fff;
  z-index: 10;
`;

export const ColorGridSection = styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 25px;
`;

export const ColorGridLabelContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const CurrentFolderColor = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${(props) => props.folderColor};
  margin-left: 10px;
`;

export const ColorGridLabel = styled.Text`
  color: #fff;
`;

// Entire color picker container
export const ColorGrid = styled.View`
  width: 100%;
  background-color: #3b3b3d;
  height: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const LinkWrapper = styled.View`
  padding: 0 30px;
`;

export const NewLinks = styled.View`
  width: 100%;
  background-color: #3b3b3d;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const AddedLinksLabel = styled.Text`
  color: #fff;
  margin-bottom: 20px;
`;

export const AddedLinkWrapper = styled.View`
  height: 35px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const AddedLinks = styled.Text`
  color: #fff;
`;

export const EditIcon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const AddLinkBtn = styled.Pressable`
  background-color: #3b3b3d;
  border-radius: 10px;
`;

export const AddLinkText = styled.Text`
  color: white;
  padding: 10px;
  text-align: center;
`;

export const CreateCancelContainer = styled.View`
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

export const CancelText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;
