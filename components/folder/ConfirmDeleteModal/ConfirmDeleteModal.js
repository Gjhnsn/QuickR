import React from "react";
import { View, Text, Pressable } from "react-native";
import { ButtonText, DeleteModalTitle, DeleteModalWrapper, TitleWrapper, ButtonAreaWrapper, ButtonContainer, SubText } from "./styles";
import { runToaster } from "../../../utils/toastNote";
import { useDispatch } from "react-redux";
import { deleteFolder } from "../../../redux/folderSlice";
import { toggleFolderActionModal } from "../../../redux/modalSlice";

const ConfirmDeleteModal = ({folderToEdit}) => {

    const dispatch = useDispatch()

    const deleteFolderHandler = () => {
        dispatch(deleteFolder({folderToDelete: folderToEdit}));
        dispatch(toggleFolderActionModal());    
        runToaster(folderToEdit.name);    
      }

  return (
    <DeleteModalWrapper>
      <TitleWrapper>
        <DeleteModalTitle>Delete Modal</DeleteModalTitle>
      </TitleWrapper>
      <View>
          <SubText>All all contents of the folder will be lost.</SubText>
      </View>
      <ButtonAreaWrapper>
          <ButtonContainer onPress={() => deleteFolderHandler()}><ButtonText>Delete</ButtonText></ButtonContainer>
          <ButtonContainer onPress={() => {}}><ButtonText>Ok</ButtonText></ButtonContainer>
      </ButtonAreaWrapper>
    </DeleteModalWrapper>
  );
};

export default ConfirmDeleteModal;
