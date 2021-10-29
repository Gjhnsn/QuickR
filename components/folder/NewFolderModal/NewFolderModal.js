import { Modal, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  FolderTitle,
  FolderNameLabel,
  DescriptionLabel,
  ColorGrid,
  AddLinkBtn,
  CreateFolderBtn,
  CancelBtn,
  FolderTitleContainer,
  FolderInputSection,
  FolderInput,
  DescriptionSection,
  DescriptionInput,
  ColorGridLabel,
  ColorGridSection,
  AddLinkText,
  LinkWrapper,
  CreateCancelContainer,
  CreateText,
  CancelText,
  NewLinks,
  AddedLinks,
  AddedLinkWrapper,
  EditIcon,
  AddedLinksLabel,
  BackArrowContainer,
  BackArrowIcon,
  Color1,
  Color2,
} from "./styles";
import editIcon from "../../../assets/editIcon.png";
import backArrowIcon from "../../../assets/backArrowIcon.png";
import {
  toggleAddOrScanModal,
  toggleNewFolderModal,
  toggleAddUrlModal,
} from "../../../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import AddOrScanModal from "../../AddOrScanModal/AddOrScanModal";
import UrlModal from "../../UrlModal/UrlModal";
import { addNewFolder } from "../../../redux/folderSlice";

function NewFolderPage() {
  const [folderName, setFolderName] = useState(``);
  const [description, setDescription] = useState(``);
  const [folderColor, setFolderColor] = useState(``);

  const isNewFolderModalOpen = useSelector(
    (state) => state.modal.isNewFolderModalOpen
  );
  const dispatch = useDispatch();

  const openAddOrScan = () => {
    dispatch(toggleAddOrScanModal());
  };

  const openAddUrlModal = () => {
    dispatch(toggleAddUrlModal());
  };

  const configureAlert = (missingFieldValue) => {
    Alert.alert("Error", `Please enter values for ${missingFieldValue}`);
  };

  const clearInput = () => {
    setFolderName("");
    setDescription("");
  };

  const createNewFolder = () => {
    const checkFolderValue = folderName.trim() === "";
    const checkDescriptionValue = description.trim() === "";

    if (checkFolderValue && checkDescriptionValue)
      return configureAlert("Folder Name and Description ");
    if (checkFolderValue) return configureAlert("Folder Name");
    if (checkDescriptionValue) return configureAlert("Description");
    else {
      dispatch(
        addNewFolder({
          folderName: folderName,
          orderNumber: 5,
          id: uuidv4(),
          folderColor: folderColor,
          description: description,
          isLastActive: false,
          isAccordionOpen: false,
          items: [],
        })
      ),
        dispatch(toggleNewFolderModal());
      // clear input fields once user clicks "create" button
      clearInput();
    }
  };

  const renderModal = () => {
    if (isNewFolderModalOpen) {
      return (
        <Modal
          transparent={false}
          visible={isNewFolderModalOpen}
          animationType="slide"
        >
          <ScrollView>
            <Container>
              <BackArrowContainer
                onPress={() => {
                  dispatch(toggleNewFolderModal());
                }}
              >
                <BackArrowIcon source={backArrowIcon} />
              </BackArrowContainer>
              <FolderTitleContainer>
                <FolderTitle>New Folder</FolderTitle>
              </FolderTitleContainer>

              <FolderInputSection>
                <FolderNameLabel>Folder Name</FolderNameLabel>
                <FolderInput
                  placeholder="Name Your Folder..."
                  placeholderTextColor="#c1c1c1"
                  onChangeText={setFolderName}
                  value={folderName}
                />
              </FolderInputSection>

              <DescriptionSection>
                <DescriptionLabel>Description</DescriptionLabel>
                <DescriptionInput
                  placeholder="Add Description..."
                  placeholderTextColor="#c1c1c1"
                  maxLength={85}
                  multiline={true}
                  onChangeText={setDescription}
                  value={description}
                />
              </DescriptionSection>

              <ColorGridSection>
                <ColorGridLabel>Color Grid</ColorGridLabel>
                <ColorGrid>
                  <Color1 onPress={() => setFolderColor(`red`)} />
                  <Color2 onPress={() => setFolderColor(`blue`)} />
                </ColorGrid>
              </ColorGridSection>

              <LinkWrapper>
                <AddedLinksLabel>Links</AddedLinksLabel>
                <NewLinks>
                  <AddedLinkWrapper>
                    <AddedLinks>Teryaki Don</AddedLinks>
                    <EditIcon source={editIcon} />
                  </AddedLinkWrapper>
                </NewLinks>

                <AddLinkBtn
                  onPress={() => {
                    openAddOrScan();
                  }}
                >
                  <AddLinkText>Add Link</AddLinkText>
                </AddLinkBtn>
              </LinkWrapper>

              <CreateCancelContainer>
                <CreateFolderBtn onPress={() => createNewFolder()}>
                  <CreateText>Create</CreateText>
                </CreateFolderBtn>
                <CancelBtn
                  onPress={() => {
                    dispatch(toggleNewFolderModal());
                  }}
                >
                  <CancelText>Cancel</CancelText>
                </CancelBtn>
              </CreateCancelContainer>
              {openAddOrScan ? <AddOrScanModal /> : null}
              {openAddUrlModal ? <UrlModal /> : null}
            </Container>
          </ScrollView>
        </Modal>
      );
    } else {
      return <></>;
    }
  };

  return <>{renderModal()}</>;
}

export default NewFolderPage;
