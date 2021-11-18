import {
  ScrollView,
  Alert,
  Pressable,
  SafeAreaView,
  Animated,
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
  EditIcon,
  AddedLinksLabel,
  BackArrowContainer,
  BackArrowIcon,
  ColorGridLabelContainer,
  CurrentFolderColor,
  EditChange,
  InputContainer,
} from "./styles";
import editIcon from "../../../assets/editIcon.png";
import backArrowIcon from "../../../assets/backArrowIcon.png";
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
import { resetQr } from "../../../redux/qrSlice";

function EditFolderPage({ navigation }) {
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
  const [folderColor, setFolderColor] = useState(`red`);

  const [editNameInput, setEditNameInput] = useState(false);
  const [editDescriptionInput, setEditDescriptionInput] = useState(false);

  useEffect(() => {
    setFolderName(currentFolder.name);
    setDescription(currentFolder.description);
  }, []);

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
      //update blob color
      dispatch(setBlobColor("#5E5CE6"));
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

  // --------------------------------------------------------------------------------------SCANNER VIEW

  const scannerView = () => {
    return <BarcodeScanner toggleModal={false} />;
  };

  // --------------------------------------------------------------------------------------JSX START

  const editFolderView = (navigation) => {
    return (
      <SafeAreaView style={{ backgroundColor: "#1c1d21" }}>
        <ScrollView>
          <Container>
            <BackArrowContainer onPress={() => navigation.goBack()} hitslop={10}>
              <BackArrowIcon source={backArrowIcon} />
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
                <EditChange onPress={() => setEditNameInput(!editNameInput)} hitslop={10}>
                  <EditIcon source={editIcon} />
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

                <EditChange
                  onPress={() => setEditDescriptionInput(!editDescriptionInput)}
                  hitslop={10}
                >
                  <EditIcon source={editIcon} />
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
              <CancelBtn onPress={() => navigation.goBack()}>
                <CancelText onPress={() => deleteFolderHandler()}>
                  Delete
                </CancelText>
              </CancelBtn>
              <CreateFolderBtn onPress={() => editSubmit()}>
                <CreateText>Save</CreateText>
              </CreateFolderBtn>
            </CreateCancelContainer>

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
