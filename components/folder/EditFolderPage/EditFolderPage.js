import {
  ScrollView,
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
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
  AddedLinksLabel,
  BackArrowContainer,
  ColorGridLabelContainer,
  CurrentFolderColor,
  EditChange,
  InputContainer,
  InputLimitWrapper,
  VersionText,
} from "./styles";
import {
  toggleAddUrlModal,
  toggleEditUrlModal,
  setLinkToEdit,
} from "../../../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import ColorPicker from "../../ColorPicker/ColorPicker";
import UrlModal from "../../UrlModal/UrlModal";
import {
  editFolder,
  deleteFolder,
  setBlobColor,
} from "../../../redux/folderSlice";
import { deleteFolderToast } from "../../../utils/toastNote";
import { approvedColors } from "../../../utils/approvedColors";
import EditUrlModal from "../../EditUrlModal/EditUrlModal";
import BarcodeScanner from "../../BarcodeScanner/BarcodeScanner";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { setScannedLink } from "../../../redux/modalSlice";
import { resetQr } from "../../../redux/qrSlice";
import { InputLimitIndicator } from "../AddFolderPage/styles";

function EditFolderPage({ navigation }) {
  const scannedLink = useSelector((state) => state.modal.scannedLink);

  const setStartCamera = useSelector((state) => state.camera.setStartCamera);
  const currentLinks = useSelector((state) => state.folder.allFolder);
  const folderKeys = useSelector((state) =>
    Object.keys(state.folder.allFolder)
  );
  const blobColor = useSelector((state) => state.folder.blobColor);
  const folderToEdit = useSelector((state) => {
    return state.modal.folderToEdit;
  });

  const currentFolder = useSelector(
    (state) => state.folder.allFolder[folderToEdit]
  );

  const dispatch = useDispatch();

  // ----------------------------------------------------------------------------------------- INPUT EDIT LOGIC

  const [folderName, setFolderName] = useState(``);
  const [description, setDescription] = useState(``);
  const [folderColor, setFolderColor] = useState(
    `${currentFolder ? currentFolder.folderColor : "#FF453A"}`
  );

  const [editNameInput, setEditNameInput] = useState(false);
  const [editDescriptionInput, setEditDescriptionInput] = useState(false);
  const maxFolderNameLength = 30;
  const maxDescriptionLength = 75;

  useEffect(() => {
    setFolderName(currentFolder.name);
    setDescription(currentFolder.description);
  }, []);

  // ---------------------------------------------------------INPUT VALIDATION ALGORITHM

  const validateFolderDetails = () => {
    const checkFolderValue = folderName.trim() === "";

    if (checkFolderValue) {
      configureAlert("Folder Name");
      return false;
    }
    if (folderKeys.includes(folderName) && currentFolder.name !== folderName) {
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

  // ---------------------------------------------------------ON PRESS FUNCTION FOR DELETE BUTTON

  const deleteFolderHandler = () => {
    const deleteAction = () => {
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

    // if active link is in folder currently being deleted, reset active QR
    if (currentFolder.folderColor === blobColor) {
      deleteAction();
      dispatch(resetQr());
      // update blob color
      dispatch(setBlobColor("#5E5CE6"));
      // update folder color to default
      setFolderColor("#FF453A");
    } else {
      deleteAction();
    }
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
      clearInput();
      navigation.goBack();
    } else {
      return;
    }
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
          <Pressable onPress={() => editButtonAction(link)} hitslop={10}>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={20}
              color="white"
            />
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

  // --------------------------------------------------------------------------------------SCANNER VIEW

  const scannerView = () => {
    return <BarcodeScanner toggleModal={false} />;
  };

  // --------------------------------------------------------------------------------------JSX START

  const editFolderView = (navigation) => {
    return (
      <SafeAreaView style={{ backgroundColor: "#1c1d21" }}>
        <StatusBar backgroundColor="#1c1d21" />
        <ScrollView>
          <Container>
            <BackArrowContainer
              onPress={() => navigation.goBack()}
              hitslop={10}
            >
              <Ionicons name="chevron-back" size={40} color="white" />
            </BackArrowContainer>
            <FolderTitleContainer>
              <FolderTitle>Edit Folder</FolderTitle>
            </FolderTitleContainer>

            {/*   // --------------------------------------------------------------------------------------FOLDER NAME INPUT */}

            <FolderInputSection>
              <FolderNameLabel>Folder Name</FolderNameLabel>

              <InputContainer>
                <FolderInput
                  placeholderTextColor="#c1c1c1"
                  onChangeText={setFolderName}
                  value={folderName}
                  editable={editNameInput}
                  editMode={editNameInput}
                />
                {/* ----------------------- Charcter counter for input -----------------------*/}
                {editNameInput ? (
                  <InputLimitWrapper editMode={editNameInput}>
                    <InputLimitIndicator>
                      {`${folderName.length}/${maxFolderNameLength}`}
                    </InputLimitIndicator>
                  </InputLimitWrapper>
                ) : null}
                <EditChange
                  onPress={() => setEditNameInput(!editNameInput)}
                  hitslop={10}
                >
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={20}
                    color="white"
                  />
                </EditChange>
              </InputContainer>
            </FolderInputSection>

            {/*   // --------------------------------------------------------------------------------------FOLDER DESCRIPTION INPUT */}

            <DescriptionSection>
              <DescriptionLabel>Description</DescriptionLabel>
              <InputContainer>
                <DescriptionInput
                  placeholderTextColor="#c1c1c1"
                  maxLength={85}
                  multiline={true}
                  onChangeText={setDescription}
                  value={description}
                  editable={editDescriptionInput}
                  editMode={editDescriptionInput}
                />
                {/*---------------- description character counter ----------------*/}
                {editDescriptionInput ? (
                  <InputLimitWrapper editMode={editDescriptionInput}>
                    <InputLimitIndicator>
                      {`${description.length}/${maxDescriptionLength}`}
                    </InputLimitIndicator>
                  </InputLimitWrapper>
                ) : null}
                <EditChange
                  onPress={() => setEditDescriptionInput(!editDescriptionInput)}
                  hitslop={10}
                >
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={20}
                    color="white"
                  />
                </EditChange>
              </InputContainer>
            </DescriptionSection>

            {/*   // --------------------------------------------------------------------------------------COLOR PICKER */}

            <ColorGridSection>
              <ColorGridLabelContainer>
                <ColorGridLabel>Folder Color:</ColorGridLabel>
                <CurrentFolderColor folderColor={folderColor} />
              </ColorGridLabelContainer>

              <ColorGrid>{pickFolderColor()}</ColorGrid>
            </ColorGridSection>

            {/*   // --------------------------------------------------------------------------------------LINK CONTAINER */}

            <LinkWrapper>
              <AddedLinksLabel>Links</AddedLinksLabel>
              <NewLinks>
                {renderLinks(currentLinks[folderToEdit]?.items)}
              </NewLinks>
              <AddLinkBtn
                onPress={() => {
                  dispatch(toggleAddUrlModal());
                }}
              >
                <AddLinkText>Add Link</AddLinkText>
              </AddLinkBtn>
            </LinkWrapper>

            {/*   // --------------------------------------------------------------------------------------DELETE AND SAVE BUTTONS */}

            <CreateCancelContainer>
              <CancelBtn onPress={() => deleteFolderHandler()}>
                <CancelText>Delete</CancelText>
              </CancelBtn>
              <CreateFolderBtn onPress={() => editSubmit()}>
                <CreateText>Save</CreateText>
              </CreateFolderBtn>
            </CreateCancelContainer>
            <VersionText>V.0.2.0</VersionText>

            {/*   // --------------------------------------------------------------------------------------MODALS */}
            <UrlModal picker={false} />
            <EditUrlModal editPage={true} />
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  };

  return <>{setStartCamera ? scannerView() : editFolderView(navigation)}</>;
}

export default EditFolderPage;
