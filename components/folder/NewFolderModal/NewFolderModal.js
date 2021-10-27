import { View, Modal, Pressable, Text, TextInput, Button, ScrollView } from "react-native";
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
} from "./styles";
import editIcon from '../../../assets/editIcon.png';

function NewFolderPage() {
  return (
    <>
      <Modal transparent={false} visible={true}>
          <ScrollView>
        <Container>
          <FolderTitleContainer>
            <FolderTitle>New Folder</FolderTitle>
          </FolderTitleContainer>

          <FolderInputSection>
            <FolderNameLabel>Folder Name</FolderNameLabel>
            <FolderInput
              placeholder="Folder Name Placeholder"
              placeholderTextColor="white"
            />
          </FolderInputSection>

          <DescriptionSection>
            <DescriptionLabel>Description</DescriptionLabel>
            <DescriptionInput
              placeholder="Add Description Placeholder"
              placeholderTextColor="white"
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


            <AddLinkBtn>
              <AddLinkText>Add Link</AddLinkText>
            </AddLinkBtn>
          </LinkWrapper>

          <CreateCancelContainer>
            <CreateFolderBtn>
              <CreateText>Create</CreateText>
            </CreateFolderBtn>
            <CancelBtn>
              <CancelText>Cancel</CancelText>
            </CancelBtn>
          </CreateCancelContainer>
        </Container>
        </ScrollView>
      </Modal>
    </>
  );
}

export default NewFolderPage;
