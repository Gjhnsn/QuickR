import { ScrollView, Alert, Text } from "react-native";
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
import { toggleAddOrScanModal } from "../../../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import AddOrScanModal from "../../AddOrScanModal/AddOrScanModal";
import UrlModal from "../../UrlModal/UrlModal";
import {
  addNewFolder,
  editFolder,
  deleteFolder,
} from "../../../redux/folderSlice";
import { runToaster } from "../../../utils/toastNote";

function FolderActionPage({ navigation, route }) {
  const [folderName, setFolderName] = useState(``);
  const [description, setDescription] = useState(``);
  const [folderColor, setFolderColor] = useState(``);

  const editMode = route.params.editMode;
  const folderToEdit = route.params.folder;
  const folderKeys = useSelector((state) =>
    Object.keys(state.folder.allFolder)
  );

  const dispatch = useDispatch();

  const validateFolderDetails = () => {
    const checkFolderValue = folderName.trim() === "";
    const checkDescriptionValue = description.trim() === "";

    if (checkFolderValue && checkDescriptionValue) {
      configureAlert("Folder Name and Description ");
      return false;
    }
    if (checkFolderValue) {
      configureAlert("Folder Name");
      return false;
    }
    if (checkDescriptionValue) {
      configureAlert("Description");
      return false;
    }
    if (folderKeys.includes(folderName)) {
      Alert.alert("Folder Name Already Exists");
      return false;
    }
    return true;
  };

  const configureAlert = (missingFieldValue) => {
    Alert.alert("Error", `Please enter values for ${missingFieldValue}`);
  };

  const clearInput = () => {
    setFolderName("");
    setDescription("");
  };

  const createNewFolder = () => {
    if (validateFolderDetails()) {
      dispatch(
        addNewFolder({
          name: folderName,
          orderNumber: 5,
          id: uuidv4(),
          folderColor: folderColor,
          description: description,
          isLastActive: false,
          isAccordionOpen: false,
          items: [],
        })
      ),
        navigation.goBack();
      clearInput();
    }
  };

  const deleteFolderHandler = () => {
    Alert.alert(
      `Delete ${route.params.folder.name}?`,
      "All of this folders contents will be lost",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "default",
        },
        // If 'OK' then proceed with deleting folder
        {
          text: "OK",
          onPress: () => {
            dispatch(deleteFolder({ folderToDelete: folderToEdit }));
            navigation.goBack();
            runToaster(folderToEdit.name);
          },
          style: "default",
        },
      ]
    );
  };

  const editSubmit = () => {
    if (validateFolderDetails()) {
      const updatedValues = {
        name: folderName,
        description,
        folderColor,
      };
      dispatch(editFolder({ updatedValues, folder: folderToEdit }));
    }
    clearInput();
    navigation.goBack();
  };

  const renderAddFolderButtons = () => {
    return (
      <CreateCancelContainer>
        <CancelBtn onPress={() => navigation.goBack()}>
          <CancelText>Cancel</CancelText>
        </CancelBtn>
        <CreateFolderBtn onPress={() => createNewFolder()}>
          <CreateText>Create</CreateText>
        </CreateFolderBtn>
      </CreateCancelContainer>
    );
  };

  const renderEditFolderButtons = () => {
    return (
      <CreateCancelContainer>
        <CancelBtn onPress={() => navigation.goBack()}>
          <CancelText onPress={() => deleteFolderHandler()}>Delete</CancelText>
        </CancelBtn>
        <CreateFolderBtn onPress={() => editSubmit()}>
          <CreateText>Save</CreateText>
        </CreateFolderBtn>
      </CreateCancelContainer>
    );
  };

  const renderLinks = (linksToRender) => {
    return linksToRender?.map((link) => {
      return (
        <AddedLinkWrapper key={link.name}>
          <AddedLinks>{link.name}</AddedLinks>
          <EditIcon source={editIcon} />
        </AddedLinkWrapper>
      );
    });
  };

  return (
    <ScrollView>
      <Container>
        <BackArrowContainer onPress={() => navigation.goBack()}>
          <BackArrowIcon source={backArrowIcon} />
        </BackArrowContainer>
        <FolderTitleContainer>
          <FolderTitle>{editMode ? `Edit` : `Add`} Folder</FolderTitle>
        </FolderTitleContainer>

        <FolderInputSection>
          <FolderNameLabel>Folder Name</FolderNameLabel>
          <FolderInput
            placeholder={
              editMode ? route.params.folder.name : "Name Your Folder..."
            }
            placeholderTextColor="#c1c1c1"
            onChangeText={setFolderName}
            value={folderName}
          />
        </FolderInputSection>

        <DescriptionSection>
          <DescriptionLabel>Description</DescriptionLabel>
          <DescriptionInput
            placeholder={
              editMode ? route.params.folder.description : "Add Description..."
            }
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

        {/* ******************** Link Section *********************** */}

        <LinkWrapper>
          <AddedLinksLabel>Links</AddedLinksLabel>
          {/* <NewLinks></NewLinks> */}
          <AddLinkBtn
            onPress={() => {
              dispatch(toggleAddOrScanModal());
            }}
          >
            <AddLinkText>Add Link</AddLinkText>
          </AddLinkBtn>
        </LinkWrapper>

        {/* ****************** End Link Section  ******************* */}

        {/* render buttons based on which folder user is in */}
        {editMode ? renderEditFolderButtons() : renderAddFolderButtons()}

        <AddOrScanModal />
        <UrlModal />
      </Container>
    </ScrollView>
  );
}

export default FolderActionPage;
