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
  background-color: #3b3b3d;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
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
  background-color: #3b3b3d;
  padding: 10px;
  height: 100px;
  border-radius: 10px;
  color: #fff;
`;

export const ColorGridSection = styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 25px;
`;

export const ColorGridLabel = styled.Text`
  color: #fff;
  margin-bottom: 20px;
`;

// export const ColorGrid = styled.View`
//   width: 100%;
//   background-color: #3b3b3d;
//   height: 100px;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: row;
// `;

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

// ............................................ DUMMY COLOR SELECTOR

// export const Color1 = styled.Pressable`
//   background-color: red;
//   width: 50%;
//   height: 100%;
// `;

// export const Color2 = styled.Pressable`
//   background-color: blue;
//   width: 50%;
//   height: 100%;
// `;
