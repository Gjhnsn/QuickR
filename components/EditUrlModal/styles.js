import styled from "styled-components";

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