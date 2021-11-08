import { Pressable, Modal, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUrlToFolder } from "../../redux/folderSlice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
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
  SelectFolder,
  FolderSection,
  FolderItemText,
  SaveBtnWrapper,
  BtnFooter,
  SaveText,
  PickerContainer,
} from "./styles";
import {
  CloserOverlay,
  ModalOverlay,
  GradientBackground,
  CloseContainer,
} from "../AddOrScanModal/styles";
import { LinearGradient } from "expo-linear-gradient";
import CloseIcon from "../../assets/closeIcon.png";
import linkIcon from "../../assets/link.png";
import qrCodeIcon from "../../assets/qrCodeIcon.png";
import { toggleAddUrlModal } from "../../redux/modalSlice";
import { Picker } from "@react-native-picker/picker";

function UrlModal({ picker }) {
  const dispatch = useDispatch();
  const folderData = useSelector((state) => state.folder.allFolder);
  const isAddUrlModalOpen = useSelector(
    (state) => state.modal.isAddUrlModalOpen
  );

  const currentEditFolder = useSelector((state) => {
    return state.modal.folderToEdit;
  })

  console.log(currentEditFolder);

  const [inputName, setInputName] = useState(``);
  const [inputUrl, setInputUrl] = useState(``);
  const [inputDescription, setInputDescription] = useState(``);
  const [selectedFolder, setSelectedFolder] = useState();

  //used for final submission of new url data
  const finalSubmission = () => {
    dispatch(
      addUrlToFolder({
        addedLink: {
          name: inputName,
          id: uuidv4(),
          url: inputUrl,
          description: inputDescription,
          isSelected: false,
        },
        folderName: `${currentEditFolder}`,
      })
    );
    dispatch(toggleAddUrlModal());
  };

  const folderNamesArray = Object.keys(folderData);

  const displayFolders = () => {
    return folderNamesArray.map((folderName) => {
      return (
        <Picker.Item key={folderName} label={folderName} value={folderName} />
      );
    });
  };

  const showFolderPicker = () => {
    return (
      <FolderSection>
        <ChooseFolderLabel>Choose Folder</ChooseFolderLabel>

        <PickerContainer>
          <Picker
            selectedValue={selectedFolder}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedFolder(itemValue);
            }}
            itemStyle={{
              color: "white",
              fontSize: 14,
              height: 100,
            }}
          >
            {displayFolders()}
          </Picker>
        </PickerContainer>
      </FolderSection>
    );
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
            <CloserOverlay
              onPress={() => {
                dispatch(toggleAddUrlModal());
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
                        dispatch(toggleAddUrlModal());
                      }}
                    >
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
        
                  {picker ? showFolderPicker() : null}

                  <BtnFooter>
                    <SaveBtnWrapper onPress={() => finalSubmission()}>
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
