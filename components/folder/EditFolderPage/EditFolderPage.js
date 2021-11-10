import { ScrollView, Alert, Pressable } from "react-native";
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
} from "./styles";
import editIcon from "../../../assets/editIcon.png";
import backArrowIcon from "../../../assets/backArrowIcon.png";
import {
  toggleAddOrScanModal,
  toggleEditUrlModal,
  setLinkToEdit
} from "../../../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import AddOrScanModal from "../../AddOrScanModal/AddOrScanModal";
import ColorPicker from "../../ColorPicker/ColorPicker";
import UrlModal from "../../UrlModal/UrlModal";
import {
  addNewFolder,
  editFolder,
  deleteFolder,
} from "../../../redux/folderSlice";
import { deleteFolderToast } from "../../../utils/toastNote";
import { approvedColors } from "../../../utils/approvedColors";
import EditUrlModal from "../../EditUrlModal/EditUrlModal";
import BarcodeScanner from "../../BarcodeScanner/BarcodeScanner";

function EditFolderPage({ navigation, route }) {
  const [folderName, setFolderName] = useState(``);
  const [description, setDescription] = useState(``);
  const [folderColor, setFolderColor] = useState(`red`);

  const folderToEdit = useSelector((state) => {
    return state.modal.folderToEdit;
  });
  const folderKeys = useSelector((state) =>
    Object.keys(state.folder.allFolder)
  );

  const setStartCamera = useSelector((state) => state.camera.setStartCamera);

  const allFolders = useSelector((state) => state.folder.allFolder);

  const currentLinks = useSelector((state) => state.folder.allFolder);

  const currentFolder = useSelector(
    (state) => state.folder.allFolder[folderToEdit]
  );

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
          items: [],
        })
      ),
        navigation.goBack();
      clearInput();
    }
  };

  // ---------------------------------------------------------ON PRESS FUNCTION FOR DELETE BUTTON

  const deleteFolderHandler = () => {
    Alert.alert(
      `Delete ${currentFolder.name}?`,
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
            dispatch(deleteFolder({ folderToDelete: currentFolder }));
            navigation.goBack();
            deleteFolderToast(currentFolder.name);
          },
          style: "default",
        },
      ]
    );
  };

  // ---------------------------------------------------------ON PRESS FUNCTION FOR SAVE BUTTON

  const editSubmit = () => {
    if (validateFolderDetails()) {
      const updatedValues = {
        name: folderName,
        description,
        folderColor,
      };
      dispatch(editFolder({ updatedValues, folder: currentFolder }));
    }
    clearInput();
    navigation.goBack();
  };

  // ---------------------------------------------------------DELETE/SAVE BUTTONS

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

  // ---------------------------------------------------------NEWLY ADDED LINKS OR REDUX LINKS

  const editButtonAction = (linkID) => {
    dispatch(toggleEditUrlModal());
    dispatch(setLinkToEdit(linkID));
  };

  const renderLinks = (linksToRender) => {
    return linksToRender?.map((link) => {
      return (
        <AddedLinkWrapper key={link.id}>
          <AddedLinks>{link.name}</AddedLinks>
          <Pressable onPress={() => editButtonAction(link)}>
            <EditIcon source={editIcon} />
          </Pressable>
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

  const scannerView = () => {
    return <BarcodeScanner toggleModal={false} />;
  };

  const editFolderView = (navigation) => {
    return (
      <ScrollView>
        <Container>
          <BackArrowContainer onPress={() => navigation.goBack()}>
            <BackArrowIcon source={backArrowIcon} />
          </BackArrowContainer>
          <FolderTitleContainer>
            <FolderTitle>Edit Folder</FolderTitle>
          </FolderTitleContainer>

          <FolderInputSection>
            <FolderNameLabel>Folder Name</FolderNameLabel>
            <FolderInput
              // placeholder={route.params.folder.name}
              placeholderTextColor="#c1c1c1"
              onChangeText={setFolderName}
              value={folderName}
            />
          </FolderInputSection>

          <DescriptionSection>
            <DescriptionLabel>Description</DescriptionLabel>
            <DescriptionInput
              // placeholder={route.params.folder.description}
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
              {renderLinks(currentLinks[folderToEdit]?.items)}
            </NewLinks>
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
          {renderEditFolderButtons()}

          <AddOrScanModal />
          <UrlModal picker={false} />
          <EditUrlModal editPage={true}/>
        </Container>
      </ScrollView>
    );
  };

  return <>{setStartCamera ? scannerView() : editFolderView(navigation)}</>;
}

export default EditFolderPage;
