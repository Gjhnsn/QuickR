import { Pressable, Modal, Image, Alert, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUrlToFolder } from "../../redux/folderSlice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { LinearGradient } from "expo-linear-gradient";
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
  CancelBtnWrapper,
  CancelText,
  PickerBackground,
} from "./styles";
import {
  selectValidFolderToast,
  urlInputValidationToaster,
} from "../../utils/toastNote";
import { openCamera } from "../../redux/startCameraSlice";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";

function UrlModal({ picker, setNewLinks, newLinks, navigation }) {
  const dispatch = useDispatch();
  const folderData = useSelector((state) => state.folder.allFolder);
  const isAddUrlModalOpen = useSelector(
    (state) => state.modal.isAddUrlModalOpen
  );
  const currentEditFolder = useSelector((state) => {
    return state.modal.folderToEdit;
  });

  const [inputName, setInputName] = useState(``);
  const [inputUrl, setInputUrl] = useState(``);
  const [inputDescription, setInputDescription] = useState(``);

  const scannedLink = useSelector((state) => state.modal.scannedLink);

  useEffect(() => {
    scannedLink ? setInputUrl(scannedLink) : setInputUrl(``);
  }, [scannedLink])

  // ------------------------------------------------------------------------FINAL SUBMISSION REDUX

  const folderNamesArray = Object.keys(folderData);

  const finalSubmissionRedux = () => {
    if (inputValidationCheck()) {
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
      dispatch(setScannedLink(null));
    }
  };

  // ------------------------------------------------------------------------FINAL SUBMISSION LOCAL

  const finalSubmissionLocal = () => {
    if (inputValidationCheck()) {
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
      dispatch(setScannedLink(null));
      // fields should clear upon sav
      setInputName("");
      setInputUrl("");
      setInputDescription("");
    }
  };

  //-------------------------------------------------------------------------VALIDATION

  const inputValidationCheck = () => {
    if (
      inputName.trim() === "" &&
      inputUrl.trim() === "" &&
      inputDescription.trim() === ""
    ) {
      urlInputValidationToaster(`Form fields`);
      return false;
    }

    if (inputUrl.trim() === "") {
      urlInputValidationToaster(`Url`);
      return false;
    }

    if (inputName.trim() === "") {
      urlInputValidationToaster(`Name`);
      return false;
    }

    if (inputDescription.trim() === "") {
      urlInputValidationToaster(`Description`);
      return false;
    }

    return true;
  };

  // ------------------------------------------------------------------------RENDERED FOLDERS IN PICKER

  const displayFolders = () => {
    return folderNamesArray.map((folderName) => {
      return (
        <Picker.Item
          color={Platform.OS === "ios" ? "white" : "black"}
          key={folderName}
          label={folderName}
          value={folderName}
          style={{ backgroundColor: "blue" }}
        />
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
            dropdownIconColor="white"
            mode="dropdown" // android only
            style={{ color: "#c1c1c1", marginTop: 10 }}
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
    dispatch(setScannedLink(null));
  };

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
                    <Pressable
                      onPress={() => closeAndClearInput()}
                      hitslop={10}
                    >
                      <AntDesign name="closesquareo" size={35} color="white" />
                    </Pressable>
                  </CloseContainer>
                  <AddUrlTitleContainer>
                    <Feather name="link" size={25} color="white" />
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
                      <QrIconButton
                        onPress={() => dispatch(openCamera())}
                        hitslop={10}
                      >
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
                    <CancelBtnWrapper
                      onPress={() => dispatch(toggleAddUrlModal())}
                      hitslop={10}
                    >
                      <CancelText>Cancel</CancelText>
                    </CancelBtnWrapper>
                    <SaveBtnWrapper
                      onPress={() => validateFolderSelection()}
                      hitslop={10}
                    >
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
