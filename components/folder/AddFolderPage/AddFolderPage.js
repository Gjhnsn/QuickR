import { ScrollView, Alert } from "react-native";
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
  ColorGridLabelContainer,
  CurrentFolderColor,
} from "../EditFolderPage/styles";
import editIcon from "../../../assets/editIcon.png";
import backArrowIcon from "../../../assets/backArrowIcon.png";
import { toggleAddOrScanModal } from "../../../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import AddOrScanModal from "../../AddOrScanModal/AddOrScanModal";
import ColorPicker from "../../ColorPicker/ColorPicker";
import UrlModal from "../../UrlModal/UrlModal";
import {
  addNewFolder,
} from "../../../redux/folderSlice";
import { approvedColors } from "../../../utils/approvedColors";

function AddFolderPage({ navigation }) {
  const [folderName, setFolderName] = useState(``);
  const [description, setDescription] = useState(``);
  const [folderColor, setFolderColor] = useState(`red`);

  const folderKeys = useSelector((state) =>
    Object.keys(state.folder.allFolder)
  );


  const [newLinks, setNewLinks] = useState([]);
  const dispatch = useDispatch();

  // ---------------------------------------------------------INPUT VALIDATION ALGORITHM

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

  // ---------------------------------------------------------ON PRESS FUNCTION FOR ADD BUTTON

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
          items: newLinks,
        })
      ),
        navigation.goBack();
      clearInput();
    }
  };

  // ---------------------------------------------------------NEWLY ADDED LINKS OR REDUX LINKS

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

  // ---------------------------------------------------------COLOR PICKER STUFF

  const pickFolderColor = () => {
    return approvedColors.map((color) => {
      return (
        <ColorPicker
          setFolderColor={setFolderColor}
          key={color}
          color={color}
        />
      ); 
    });
  };

  // ---------------------------------------------------------JSX START

  return (
    <ScrollView>
      <Container>
        <BackArrowContainer onPress={() => navigation.goBack()}>
          <BackArrowIcon source={backArrowIcon} />
        </BackArrowContainer>
        <FolderTitleContainer>
          <FolderTitle>Add Folder</FolderTitle>
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
        {/* ********** Color Picker ********** */}
        <ColorGridSection>
          <ColorGridLabelContainer>
            <ColorGridLabel>Folder Color:</ColorGridLabel>
            <CurrentFolderColor folderColor={folderColor} />
          </ColorGridLabelContainer>
            
          <ColorGrid>{pickFolderColor()}</ColorGrid>
        </ColorGridSection>
        {/* ************ Color Picker ************ */}
        {/* ******************** Link Section *********************** */}

        <LinkWrapper>
          <AddedLinksLabel>Links</AddedLinksLabel>
          <NewLinks>
            {renderLinks(newLinks)}
          </NewLinks>
          <AddLinkBtn
            onPress={() => {
              dispatch(toggleAddOrScanModal());
            }}
          >
            <AddLinkText>Add Link</AddLinkText>
          </AddLinkBtn>
        </LinkWrapper>

        {/* ------------------ End Link Section  --------------------- */}

        {/* ------------------Save / Cancel Buttons------------------- */}
        <CreateCancelContainer>
        <CancelBtn onPress={() => navigation.goBack()}>
          <CancelText>Cancel</CancelText>
        </CancelBtn>
        <CreateFolderBtn onPress={() => createNewFolder()}>
          <CreateText>Create</CreateText>
        </CreateFolderBtn>
      </CreateCancelContainer>

        <AddOrScanModal />
        <UrlModal setNewLinks={setNewLinks} newLinks={newLinks} picker={false} />
      </Container>
    </ScrollView>
  );
}

export default AddFolderPage;