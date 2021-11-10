import React, { useState } from "react";
import { Modal, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CloseIcon from "../../assets/closeIcon.png";
import linkIcon from "../../assets/link.png";
import qrCodeIcon from "../../assets/qrCodeIcon.png";
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
} from "../UrlModal/styles";
import {
  BtnFooter,
  CancelBtn,
  DeleteText,
  CreateFolderBtn,
  CreateText,
} from "./styles";
import {
  CloserOverlay,
  ModalOverlay,
  GradientBackground,
  CloseContainer,
} from "../AddOrScanModal/styles";
import { toggleEditUrlModal } from "../../redux/modalSlice";
import { editLink, deleteLink } from "../../redux/folderSlice";
import { useSelector, useDispatch } from "react-redux";
import { deleteLinkToast } from "../../utils/toastNote";

const EditUrlModal = () => {
  const isEditUrlModalOpen = useSelector(
    (state) => state.modal.isEditUrlModalOpen
  );

  const scannedLink = useSelector((state) => state.modal.scannedLink)

  const linkToEdit = useSelector((state) => state.modal.linkToEdit);
  const folderToEdit = useSelector((state) => state.modal.folderToEdit);

  const dispatch = useDispatch();

  const [inputName, setInputName] = useState(``);
  const [inputUrl, setInputUrl] = useState(``);
  const [inputDescription, setInputDescription] = useState(``);

  const editSave = () => {
    const updatedValues = {
      name: inputName,
      id: linkToEdit,
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
  };

  const handleLinkDelete = () => {
    dispatch(deleteLink({ folderName: folderToEdit, linkID: linkToEdit.id }));
    dispatch(toggleEditUrlModal());
    deleteLinkToast(linkToEdit.name);
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
            <CloserOverlay
              onPress={() => {
                dispatch(toggleEditUrlModal());
              }}
            />
            <ModalContainer>
              <GradientBackground>
                <LinearGradient
                  style={{ height: `130%` }}
                  colors={["rgba(54,54,54, 0.1)", "rgba(0,0,0, 1)"]}
                >
                  <CloseContainer>
                    <Pressable
                      onPress={() => {
                        dispatch(toggleEditUrlModal());
                      }}
                    >
                      <Image source={CloseIcon} />
                    </Pressable>
                  </CloseContainer>
                  <AddUrlTitleContainer>
                    <Image source={linkIcon} />
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
                      <QrIconButton onPress={() => {}}>
                        <Image source={qrCodeIcon} />
                      </QrIconButton>
                    </UrlInputContainer>
                    <Input
                      placeholder="Name"
                      placeholderTextColor="#C1C1C1"
                      onChangeText={setInputName}
                      value={inputName}
                      maxLength={50}
                    />
                    <DescriptionInput
                      placeholder="Description"
                      placeholderTextColor="#C1C1C1"
                      onChangeText={setInputDescription}
                      value={inputDescription}
                      maxLength={100}
                      multiline={true}
                    />
                  </FormWrapper>

                  <BtnFooter>
                    <CancelBtn onPress={() => handleLinkDelete()}>
                      <DeleteText>Delete</DeleteText>
                    </CancelBtn>
                    <CreateFolderBtn onPress={() => editSave()}>
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
