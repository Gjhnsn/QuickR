import { Modal, ScrollView, Alert, Pressable, Button } from "react-native";
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
  toggleFolderActionModal,
  toggleAddUrlModal,
  toggleConfirmDeleteModal,
} from "../../../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import AddOrScanModal from "../../AddOrScanModal/AddOrScanModal";
import UrlModal from "../../UrlModal/UrlModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import {
  addNewFolder,
  editFolder,
  deleteFolder,
} from "../../../redux/folderSlice";
import { runToaster } from "../../../utils/toastNote";

function FolderActionModal({navigation}) {
  const [folderName, setFolderName] = useState(``);
  const [description, setDescription] = useState(``);
  const [folderColor, setFolderColor] = useState(``);
  const [error, setError] = useState(``);
  const [showToast, setShowToast] = useState(false);

  const isFolderActionModalOpen = useSelector(
    (state) => state.modal.isFolderActionModalOpen
  );

  const isConfirmDeleteModalOpen = useSelector(
    (state) => state.modal.isConfirmDeleteModalOpen
  );
  console.log(isConfirmDeleteModalOpen);

  const isAddOrScanModelOpen = useSelector(
    (state) => state.modal.isAddOrScanModelOpen
  );
  const isAddUrlModalOpen = useSelector(
    (state) => state.modal.isAddUrlModalOpen
  );

  const editMode = useSelector((state) => state.modal.editMode);
  const folderToEdit = useSelector((state) => state.modal.folderToEdit);
  const folderKeys = useSelector((state) =>
    Object.keys(state.folder.allFolder)
  );

  const dispatch = useDispatch();

  const openAddOrScan = () => {
    dispatch(toggleAddOrScanModal());
  };

  // if (openAddOrScan) {
  //   console.log('true : ', openAddOrScan)
  // } else {
  //   console.log("false")
  // }

  const openAddUrlModal = () => {
    dispatch(toggleAddUrlModal());
  };

  const openConfirmDeleteModal = () => {
    dispatch(toggleConfirmDeleteModal);
  };

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
      // TODO: need to show error on screen
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
        dispatch(toggleFolderActionModal());
      clearInput();
    }
  };

  // const showDeleteConfirmation = () => {
  //   if(isConfirmDeleteModalOpen) {
  //     return <ConfirmDeleteModal/>
  //   } else {
  //     return <></>
  //   }
  // };

  const deleteFolderHandler = () => {
    // Alert.alert('Delete', 'All of this folders contents will be lost', [
    //   {
    //     text: 'Cancel', onPress: () => { return },
    //     style: 'cancel',
    //   },
    //   // If 'OK' then proceed with deleting folder
    //   { text: 'OK', onPress: () => {
    //     dispatch(deleteFolder({folderToDelete: folderToEdit}));
    //     dispatch(toggleFolderActionModal());
    //     runToaster(folderToEdit.name);
    //   }
    //   },
    // ]);
  };

  const editSubmit = () => {
    if (validateFolderDetails()) {
      const updatedValues = {
        name: folderName,
        description,
        folderColor,
      };
      dispatch(editFolder({ updatedValues, folder: folderToEdit }));
      dispatch(toggleFolderActionModal());
    }
    clearInput();
  };

  const renderAddFolderButtons = () => {
    return (
      <CreateCancelContainer>
        <CreateFolderBtn onPress={() => createNewFolder()}>
          <CreateText>Create</CreateText>
        </CreateFolderBtn>
        <CancelBtn
          onPress={() => {
            dispatch(toggleFolderActionModal());
          }}
        >
          <CancelText>Cancel</CancelText>
        </CancelBtn>
      </CreateCancelContainer>
    );
  };

  const renderEditFolderButtons = () => {
    return (
      <CreateCancelContainer>
        <CreateFolderBtn onPress={() => editSubmit()}>
          <CreateText>Save</CreateText>
        </CreateFolderBtn>
        <CancelBtn
          onPress={() => {
            dispatch(toggleFolderActionModal());
          }}
        >
          <CancelText onPress={() => dispatch(toggleConfirmDeleteModal())}>
            Delete
          </CancelText>
        </CancelBtn>
      </CreateCancelContainer>
    );
  };

  // const renderModal = () => {
  // if (isFolderActionModalOpen) {
  // return (
  // <Modal
  //   transparent={false}
  //   visible={isFolderActionModalOpen}
  //   animationType="slide"
  // >
  // <ScrollView>
  //   <Container>

  //     <BackArrowContainer
  //       onPress={() => {
  //         dispatch(toggleFolderActionModal());
  //       }}
  //     >
  //       <BackArrowIcon source={backArrowIcon} />
  //     </BackArrowContainer>
  //     <FolderTitleContainer>
  //       <FolderTitle>{editMode ? `Edit` : `Add`} Folder</FolderTitle>
  //     </FolderTitleContainer>

  //     <FolderInputSection>
  //       <FolderNameLabel>Folder Name</FolderNameLabel>
  //       <FolderInput
  //         placeholder={
  //           editMode ? folderToEdit.name : "Name Your Folder..."
  //         }
  //         placeholderTextColor="#c1c1c1"
  //         onChangeText={setFolderName}
  //         value={folderName}
  //       />
  //     </FolderInputSection>

  //     <DescriptionSection>
  //       <DescriptionLabel>Description</DescriptionLabel>
  //       <DescriptionInput
  //         placeholder="Add Description..."
  //         placeholderTextColor="#c1c1c1"
  //         maxLength={85}
  //         multiline={true}
  //         onChangeText={setDescription}
  //         value={description}
  //       />
  //     </DescriptionSection>

  //     <ColorGridSection>
  //       <ColorGridLabel>Color Grid</ColorGridLabel>
  //       <ColorGrid>
  //         <Color1 onPress={() => setFolderColor(`red`)} />
  //         <Color2 onPress={() => setFolderColor(`blue`)} />
  //       </ColorGrid>
  //     </ColorGridSection>

  //     <LinkWrapper>
  //       <AddedLinksLabel>Links</AddedLinksLabel>
  //       <NewLinks>
  //         <AddedLinkWrapper>
  //           <AddedLinks>Teryaki Don</AddedLinks>
  //           <EditIcon source={editIcon} />
  //         </AddedLinkWrapper>
  //       </NewLinks>

  //       <AddLinkBtn
  //         onPress={() => {
  //           dispatch(toggleAddOrScanModal());
  //         }}
  //       >
  //         <AddLinkText>Add Link</AddLinkText>
  //       </AddLinkBtn>
  //     </LinkWrapper>

  //     {/* render buttons based on which folder user is in */}
  //     {editMode ? renderEditFolderButtons() : renderAddFolderButtons()}

  //     {/* {openAddOrScan ? <AddOrScanModal /> : null}
  //     {openAddUrlModal ? <UrlModal /> : null} */}
  //     {isAddOrScanModelOpen ? <AddOrScanModal /> : null}
  //     {isAddUrlModalOpen ? <UrlModal /> : null}
  //     {isConfirmDeleteModalOpen ? <ConfirmDeleteModal folderToEdit={folderToEdit}/> : null}
  //   </Container>
  // </ScrollView>

  //     );

  //   }
  // };

  return (
    <ScrollView>
      <Container>
        <BackArrowContainer
          onPress={() => navigation.goBack()}
        >
          <BackArrowIcon source={backArrowIcon} />
        </BackArrowContainer>
        <FolderTitleContainer>
          <FolderTitle>{editMode ? `Edit` : `Add`} Folder</FolderTitle>
        </FolderTitleContainer>

        <FolderInputSection>
          <FolderNameLabel>Folder Name</FolderNameLabel>
          <FolderInput
            placeholder={editMode ? folderToEdit.name : "Name Your Folder..."}
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
              dispatch(toggleAddOrScanModal());
            }}
          >
            <AddLinkText>Add Link</AddLinkText>
          </AddLinkBtn>
        </LinkWrapper>

        {/* render buttons based on which folder user is in */}
        {editMode ? renderEditFolderButtons() : renderAddFolderButtons()}

        {isAddOrScanModelOpen ? <AddOrScanModal /> : null}
        {isAddUrlModalOpen ? <UrlModal /> : null}
        {isConfirmDeleteModalOpen ? (
          <ConfirmDeleteModal folderToEdit={folderToEdit} />
        ) : null}
      </Container>
    </ScrollView>
  );
}

export default FolderActionModal;
