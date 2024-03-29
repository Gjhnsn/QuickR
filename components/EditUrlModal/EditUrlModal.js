import React, { useState, useEffect } from 'react';
import { Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ModalContainer,
  AddUrlText,
  AddUrlTitleContainer,
  Input,
  FormWrapper,
  UrlInputContainer,
  UrlInput,
  DescriptionInput,
  QrIconButton,
} from '../UrlModal/styles';
import {
  BtnFooter,
  CancelBtn,
  DeleteText,
  CreateFolderBtn,
  CreateText,
  InputLimitWrapper,
  InputLimitIndicator,
} from './styles';
import {
  CloserOverlay,
  ModalOverlay,
  GradientBackground,
  CloseContainer,
} from './styles';
import { toggleEditUrlModal, setScannedLink } from '../../redux/modalSlice';
import { editLink, deleteLink, setBlobColor } from '../../redux/folderSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteLinkToast,
  urlInputValidationToaster,
} from '../../utils/toastNote';
import { resetQr } from '../../redux/qrSlice';
import { openCamera } from '../../redux/startCameraSlice';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

const EditUrlModal = ({ editPage, newLinks, setNewLinks }) => {
  const isEditUrlModalOpen = useSelector(
    (state) => state.modal.isEditUrlModalOpen
  );

  const linkToEdit = useSelector((state) => state.modal.linkToEdit);
  const folderToEdit = useSelector((state) => state.modal.folderToEdit);
  let scannedLink = useSelector((state) => state.modal.scannedLink);

  const dispatch = useDispatch();

  const [inputName, setInputName] = useState(``);
  const [inputUrl, setInputUrl] = useState(``);
  const [inputDescription, setInputDescription] = useState(``);
  const maxFolderNameLength = 30;
  const maxDescriptionLength = 75;

  const editSave = () => {
    if (inputValidationCheck()) {
      const updatedValues = {
        name: inputName,
        id: linkToEdit.id,
        url: inputUrl,
        description: inputDescription,
        isSelected: false,
      };
      dispatch(
        editLink({
          linkID: linkToEdit.id,
          folderName: folderToEdit,
          updatedValues,
        })
      );
      dispatch(toggleEditUrlModal());
      dispatch(setScannedLink(null));
      setInputUrl('');
    }
  };

  // --------------------------------------------------------------------INPUT VALUES ON EDIT

  useEffect(() => {
    if (!linkToEdit) {
      return;
    } else {
      setInputName(linkToEdit.name);
      scannedLink ? setInputUrl(scannedLink) : setInputUrl(linkToEdit.url);
      setInputDescription(linkToEdit.description);
    }
  }, [linkToEdit]);

  // ------------------------------------------------------------------- VALIDATION

  const inputValidationCheck = () => {
    if (inputName.trim() === '' && inputUrl.trim() === '') {
      urlInputValidationToaster(`Form fields`);
      return false;
    }

    if (inputUrl.trim() === '') {
      urlInputValidationToaster(`Url`);
      return false;
    }

    if (inputName.trim() === '') {
      urlInputValidationToaster(`Name`);
      return false;
    }

    return true;
  };

  // ------------------------------------------------------------------- LOCAL VALUES

  const editSaveLocal = (linkId) => {
    if (inputValidationCheck()) {
      const editedLinkArr = newLinks.filter((link) => link.id !== linkId.id);
      const updatedValues = {
        name: inputName,
        id: linkToEdit,
        url: inputUrl,
        description: inputDescription,
        isSelected: false,
      };
      setNewLinks([...editedLinkArr, updatedValues]);
      dispatch(toggleEditUrlModal());
      dispatch(setScannedLink(null));
      setInputUrl('');
    }
  };

  const deleteLocal = (linkToDelete) => {
    // delete selected link: create new array with links that that do not match links ID
    const editedLinkArr = newLinks.filter(
      (link) => link.id !== linkToDelete.id
    );

    // update new links array in state
    setNewLinks(editedLinkArr);

    // close modal
    dispatch(toggleEditUrlModal());

    dispatch(setScannedLink(null));
  };

  const handleLinkDelete = () => {
    const deleteAction = () => {
      dispatch(deleteLink({ folderName: folderToEdit, linkID: linkToEdit.id }));
      dispatch(toggleEditUrlModal());
      deleteLinkToast(linkToEdit.name);
      dispatch(setScannedLink(null));
    };

    if (linkToEdit.isSelected) {
      deleteAction();
      dispatch(resetQr());
      // reset blob color on dash
      dispatch(setBlobColor('#5E5CE6'));
    } else {
      deleteAction();
    }
  };

  const closeAndResetInput = () => {
    // fields should clear upon exit
    setInputName(linkToEdit.name);
    setInputUrl(linkToEdit.url);
    setInputDescription(linkToEdit.description);
    dispatch(setScannedLink(null));
    dispatch(toggleEditUrlModal());
  };

  const renderModal = () => {
    if (isEditUrlModalOpen) {
      return (
        <ModalOverlay>
          <Modal
            transparent={true}
            visible={isEditUrlModalOpen}
            animationType="slide"
          >
            <CloserOverlay onPress={() => closeAndResetInput()} />
            <ModalContainer>
              <GradientBackground>
                <LinearGradient
                  style={{ height: `100%` }}
                  colors={['rgba(54,54,54, 0.1)', 'rgba(12,12,12, 1)']}
                >
                  <CloseContainer>
                    <Pressable
                      onPress={() => closeAndResetInput()}
                      hitslop={10}
                    >
                      <AntDesign name="closesquareo" size={35} color="white" />
                    </Pressable>
                  </CloseContainer>

                  <AddUrlTitleContainer>
                    <Feather name="link" size={25} color="white" />
                    <AddUrlText>Edit Url</AddUrlText>
                  </AddUrlTitleContainer>
                  <FormWrapper>
                    <UrlInputContainer>
                      <UrlInput
                        placeholder="URL"
                        placeholderTextColor="#C1C1C1"
                        onChangeText={setInputUrl}
                        value={inputUrl}
                      />
                      <QrIconButton
                        onPress={() => dispatch(openCamera())}
                        hitslop={10}
                      >
                        {/* Need to hook up above onPress to scanner */}
                        <MaterialIcons
                          name="qr-code-scanner"
                          size={30}
                          color="white"
                        />
                      </QrIconButton>
                    </UrlInputContainer>
                    <Input
                      placeholder="Name"
                      placeholderTextColor="#C1C1C1"
                      onChangeText={setInputName}
                      value={inputName}
                      maxLength={maxFolderNameLength}
                    />
                    <InputLimitWrapper>
                      <InputLimitIndicator>{`${inputName.length}/${maxFolderNameLength}`}</InputLimitIndicator>
                    </InputLimitWrapper>
                    <DescriptionInput
                      placeholder="Description"
                      placeholderTextColor="#C1C1C1"
                      onChangeText={setInputDescription}
                      value={inputDescription}
                      maxLength={maxDescriptionLength}
                      multiline={true}
                    />
                    <InputLimitWrapper>
                      <InputLimitIndicator>{`${inputDescription.length}/${maxDescriptionLength}`}</InputLimitIndicator>
                    </InputLimitWrapper>
                  </FormWrapper>

                  <BtnFooter>
                    <CancelBtn
                      onPress={() => {
                        editPage ? handleLinkDelete() : deleteLocal(linkToEdit);
                      }}
                    >
                      <DeleteText>Delete</DeleteText>
                    </CancelBtn>
                    <CreateFolderBtn
                      onPress={() => {
                        editPage ? editSave() : editSaveLocal(linkToEdit);
                      }}
                    >
                      <CreateText>Save</CreateText>
                    </CreateFolderBtn>
                  </BtnFooter>
                </LinearGradient>
              </GradientBackground>
            </ModalContainer>
          </Modal>
        </ModalOverlay>
      );
    } else {
      return <></>;
    }
  };

  return <>{renderModal()}</>;
};

export default EditUrlModal;
