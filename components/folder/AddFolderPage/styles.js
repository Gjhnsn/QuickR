import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  background-color: #1c1d21;
  width: 100%;
  height: 120%;
  padding-top: 100px;
  padding-bottom: 50px;
  margin-top: ${Platform.OS === 'ios' ? 0 : -40}px;
`;

export const BackArrowContainer = styled.Pressable`
  position: absolute;
  padding-left: 20px;
  margin-top: 40px;
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
  font-family: OpenSans_700Bold;
`;

export const FolderInputSection = styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 25px;
`;

export const FolderNameLabel = styled.Text`
  color: #fff;
  margin-bottom: 20px;
  font-family: OpenSans_600SemiBold;
  font-size: 18px;
`;

export const FolderInput = styled.TextInput`
  height: 50px;
  background-color: #3b3b3d;
  padding: 10px;
  color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  font-family: OpenSans_600SemiBold;
  font-size: 18px;
`;
export const DescriptionInput = styled.TextInput`
  background-color: #3b3b3d;
  padding: 10px;
  height: 100px;
  border-bottom-width: 1px;
  border-bottom-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #fff;
  text-align: left;
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
  font-family: OpenSans_600SemiBold;
  font-size: 18px;
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
  font-family: OpenSans_600SemiBold;
  font-size: 18px;
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

export const AddLinkBtn = styled.Pressable`
  background-color: #3b3b3d;
  border-radius: 10px;
`;

export const AddLinkText = styled.Text`
  color: white;
  padding: 10px;
  text-align: center;
  font-family: OpenSans_700Bold;
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
  font-family: OpenSans_700Bold;
`;

export const SaveText = styled.Text`
  color: white;
  text-align: center;
  font-family: OpenSans_700Bold;
`;

export const CancelBtn = styled.Pressable`
  width: 48%;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background-color: #df4c46;
  font-family: OpenSans_700Bold;
`;

export const CancelText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
  font-family: OpenSans_700Bold;
`;

export const InputLimitWrapper = styled.View`
  align-items: flex-end;
  margin-top: 5px;
`;

export const InputLimitIndicator = styled.Text`
  color: white;
`;

export const VersionText = styled.Text`
  color: white;
  font-size: 12px;
  text-align: center;
  margin-top: 40px;
`;
