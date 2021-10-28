import { Modal, ScrollView } from "react-native";
import React from "react";
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

function NewFolderPage() {
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
                />
              </FolderInputSection>

              <DescriptionSection>
                <DescriptionLabel>Description</DescriptionLabel>
                <DescriptionInput
                  placeholder="Add Description..."
                  placeholderTextColor="#c1c1c1"
                  maxLength={100}
                  multiline={true}
                />
              </DescriptionSection>

              <ColorGridSection>
                <ColorGridLabel>Color Grid</ColorGridLabel>
                <ColorGrid></ColorGrid>
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
                <CreateFolderBtn>
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
