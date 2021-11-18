import { Pressable, Modal, Image, Alert } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUrlToFolder } from "../../redux/folderSlice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { LinearGradient } from "expo-linear-gradient";
import CloseIcon from "../../assets/closeIcon.png";
import linkIcon from "../../assets/link.png";
import qrCodeIcon from "../../assets/qrCodeIcon.png";
import {
  toggleAddUrlModal,
  setFolderToEdit,
  setScannedLink,
} from "../../redux/modalSlice";
import { Picker } from "@react-native-picker/picker";
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
  ChooseFolderLabel,
  FolderSection,
  SaveBtnWrapper,
  BtnFooter,
  SaveText,
  PickerContainer,
  CloserOverlay,
  ModalOverlay,
  GradientBackground,
  CloseContainer,
} from "./styles";
import { selectValidFolderToast } from "../../utils/toastNote";
import { openCamera } from "../../redux/startCameraSlice";

function UrlModal({ picker, setNewLinks, newLinks }) {
  const dispatch = useDispatch();
  const folderData = useSelector((state) => state.folder.allFolder);
  const isAddUrlModalOpen = useSelector(
    (state) => state.modal.isAddUrlModalOpen
  );
  const currentEditFolder = useSelector((state) => {
    return state.modal.folderToEdit;
  });

  let scannedLink = useSelector((state) => state.modal.scannedLink);

  // ------------------------------------------------------------------------FINAL SUBMISSION REDUX

  const [inputName, setInputName] = useState(``);
  const [inputUrl, setInputUrl] = useState(scannedLink);
  const [inputDescription, setInputDescription] = useState(``);

  const folderNamesArray = Object.keys(folderData);

  const finalSubmissionRedux = () => {
    // fields should clear upon save
    setInputName("");
    setInputUrl("");
    setInputDescription("");

    dispatch(
      addUrlToFolder({
        addedLink: {
          name: inputName,
          id: uuidv4(),
          url: inputUrl,
          description: inputDescription,
          isSelected: false,
        },
        folderName: `${
          currentEditFolder ? currentEditFolder : folderNamesArray[0]
        }`,
      })
    );
    dispatch(toggleAddUrlModal());
    dispatch(setScannedLink(""));
  };

  // ------------------------------------------------------------------------FINAL SUBMISSION LOCAL

  const finalSubmissionLocal = () => {
    setNewLinks([
      ...newLinks,
      {
        name: inputName,
        id: uuidv4(),
        url: inputUrl,
        description: inputDescription,
        isSelected: false,
      },
    ]);
    dispatch(toggleAddUrlModal());
    dispatch(setScannedLink(""));
    // fields should clear upon sav
    setInputName("");
    setInputUrl("");
    setInputDescription("");
  };

  // ------------------------------------------------------------------------RENDERED FOLDERS IN PICKER

  const displayFolders = () => {
    return folderNamesArray.map((folderName) => {
      return (
        <Picker.Item key={folderName} label={folderName} value={folderName} />
      );
    });
  };

  // ------------------------------------------------------------------------PICKER SUBCOMPONENT, RENDERED ONLY IN HOMESCREEN VIEW

  const showFolderPicker = () => {
    return (
      <FolderSection>
        <ChooseFolderLabel>Choose Folder</ChooseFolderLabel>

        <PickerContainer>
          <Picker
            selectedValue={currentEditFolder}
            onValueChange={(itemValue) => {
              dispatch(setFolderToEdit(itemValue));
            }}
            itemStyle={{
              color: "white",
              fontSize: 14,
              height: 100,
            }}
          >
            <Picker.Item key={0} label="Select a folder..." value={null} />
            {displayFolders()}
          </Picker>
        </PickerContainer>
      </FolderSection>
    );
  };

  const validateFolderSelection = () => {
    if (currentEditFolder || !picker) {
      currentEditFolder ? finalSubmissionRedux() : finalSubmissionLocal();
    } else {
      selectValidFolderToast();
    }
  };

  const closeAndClearInput = () => {
    // fields should clear upon exit
    setInputName("");
    setInputUrl("");
    setInputDescription("");

    dispatch(toggleAddUrlModal());
    dispatch(setScannedLink(""));
  };

  const handleQrScan = () => {};

  const renderModal = () => {
    if (isAddUrlModalOpen) {
      return (
        <ModalOverlay>
          <Modal
            transparent={true}
            visible={isAddUrlModalOpen}
            animationType="slide"
          >
            <CloserOverlay onPress={() => closeAndClearInput()} />
            <ModalContainer>
              <GradientBackground>
                <LinearGradient
                  style={{ height: `130%` }}
                  colors={["rgba(54,54,54, 0.1)", "rgba(0,0,0, 1)"]}
                >
                  <CloseContainer>
                    <Pressable onPress={() => closeAndClearInput()} hitslop={10}>
                      <Image source={CloseIcon} />
                    </Pressable>
                  </CloseContainer>
                  <AddUrlTitleContainer>
                    <Image source={linkIcon} />
                    <AddUrlText>Add Url</AddUrlText>
                  </AddUrlTitleContainer>
                  <FormWrapper>
                    <UrlInputContainer>
                      <UrlInput
                        placeholder="URL"
                        placeholderTextColor="#C1C1C1"
                        onChangeText={setInputUrl}
                        value={inputUrl}
                      />
                      <QrIconButton onPress={() => dispatch(openCamera())} hitslop={10}>
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
                      maxLength={130}
                      multiline={true}
                    />
                  </FormWrapper>

                  {picker ? showFolderPicker() : null}

                  <BtnFooter>
                    <SaveBtnWrapper onPress={() => validateFolderSelection()} hitslop={10}>
                      <SaveText>Save</SaveText>
                    </SaveBtnWrapper>
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
}

export default UrlModal;
