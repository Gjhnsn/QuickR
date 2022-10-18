import {
  SafeAreaView,
  ScrollView,
  Alert,
  Pressable,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
  InputLimitWrapper,
  InputLimitIndicator,
  VersionText,
} from '../AddFolderPage/styles';
import {
  toggleAddUrlModal,
  toggleEditUrlModal,
  setLinkToEdit,
} from '../../../redux/modalSlice';
import { useSelector, useDispatch } from 'react-redux';
import ColorPicker from '../../ColorPicker/ColorPicker';
import UrlModal from '../../UrlModal/UrlModal';
import { addNewFolder } from '../../../redux/folderSlice';
import { approvedColors } from '../../../utils/approvedColors';
import BarcodeScanner from '../../BarcodeScanner/BarcodeScanner';
import EditUrlModal from '../../EditUrlModal/EditUrlModal';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function AddFolderPage({ navigation }) {
  const [folderName, setFolderName] = useState(``);
  const [description, setDescription] = useState(``);
  const [folderColor, setFolderColor] = useState(`#FF453A`);
  const maxFolderNameLength = 30;
  const maxDescriptionLength = 75;

  const folderKeys = useSelector((state) =>
    Object.keys(state.folder.allFolder)
  );

  const setStartCamera = useSelector((state) => state.camera.setStartCamera);

  const [newLinks, setNewLinks] = useState([]);
  const dispatch = useDispatch();

  // ---------------------------------------------------------INPUT VALIDATION ALGORITHM

  const validateFolderDetails = () => {
    const checkFolderValue = folderName.trim() === '';

    if (checkFolderValue) {
      configureAlert('Folder Name');
      return false;
    }
    if (folderKeys.includes(folderName)) {
      Alert.alert('Folder Name Already Exists');
      return false;
    }
    return true;
  };

  const configureAlert = (missingFieldValue) => {
    Alert.alert('Error', `Please enter values for ${missingFieldValue}`);
  };

  const clearInput = () => {
    setFolderName('');
    setDescription('');
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

  // ---------------------------------------------------------JSX START

  const scannerView = () => {
    return <BarcodeScanner toggleModal={false} />;
  };

  const addFolderView = (navigation) => {
    return (
      <SafeAreaView style={{ backgroundColor: '#1c1d21' }}>
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
              <FolderTitle>Add Folder</FolderTitle>
            </FolderTitleContainer>

            <FolderInputSection>
              <FolderNameLabel>Folder Name</FolderNameLabel>
              <FolderInput
                placeholder="Name Your Folder..."
                placeholderTextColor="#c1c1c1"
                onChangeText={setFolderName}
                value={folderName}
                maxLength={maxFolderNameLength} // currently set to 50
              />
              {/* --------------- character counter --------------------- */}
              <InputLimitWrapper>
                <InputLimitIndicator>
                  {`${folderName.length}/${maxFolderNameLength}`}
                </InputLimitIndicator>
              </InputLimitWrapper>
            </FolderInputSection>

            <DescriptionSection>
              <DescriptionLabel>Description</DescriptionLabel>
              <DescriptionInput
                placeholder="Add Description..."
                placeholderTextColor="#c1c1c1"
                maxLength={maxDescriptionLength}
                multiline={true}
                onChangeText={setDescription} //
                value={description}
              />
              {/* ------------ character counter -------------------- */}
              <InputLimitWrapper>
                <InputLimitIndicator>
                  {`${description.length}/${maxDescriptionLength}`}
                </InputLimitIndicator>
              </InputLimitWrapper>
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
              <NewLinks>{renderLinks(newLinks)}</NewLinks>
              <AddLinkBtn
                onPress={() => {
                  dispatch(toggleAddUrlModal());
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
            <VersionText>V.0.2.0</VersionText>
            <UrlModal
              setNewLinks={setNewLinks}
              newLinks={newLinks}
              picker={false}
            />
            <EditUrlModal
              setNewLinks={setNewLinks}
              newLinks={newLinks}
              editPage={false}
            />
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  };

  return <>{setStartCamera ? scannerView() : addFolderView(navigation)}</>;
}

export default AddFolderPage;
