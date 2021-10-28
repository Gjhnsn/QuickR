import { Pressable, Modal, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUrlToFolder } from "../../redux/folderSlice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import {
  ModalContainer,
  AddUrlText,
  AddUrlTitleContainer,
  Input,
  FromWrapper,
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

function UrlModal() {
  const dispatch = useDispatch();
  const folderData = useSelector((state) => state.folder.allFolder);
  const isAddUrlModalOpen = useSelector(
    (state) => state.modal.isAddUrlModalOpen
  );

  const [inputName, setInputName] = useState(``);
  const [inputUrl, setInputUrl] = useState(``);
  const [inputDescription, setInputDescription] = useState(``);
  const [whichFolder, setWhichFolder] = useState(``);

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
        folderName: `${whichFolder}`,
      })
    );
  };

  //---------------Commented out for later use
  //-----(folder names to be added to choose folder section)

  // const foldersInInput = () => {
  //   const folderKeys = Object.keys(folderData);
  //   return folderKeys.map((folder) => (
  //     <Pressable onPress={() => setWhichFolder(folder)} key={folder}>
  //       <Text
  //         style={{
  //           color: "white",
  //           margin: 10,
  //           backgroundColor: "black",
  //           padding: 10,
  //         }}
  //       >
  //         {folder}
  //       </Text>
  //     </Pressable>
  //   ));
  // };

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
                  <FromWrapper>
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
                  </FromWrapper>
                  <FolderSection>
                    <ChooseFolderLabel>Choose Folder</ChooseFolderLabel>
                    {/* placeholder content for scroll picker to go */}
                    <SelectFolder>
                      <FolderItemText>Personal</FolderItemText>
                    </SelectFolder>
                    {/* end placeholder */}
                  </FolderSection>
                  <BtnFooter>
                    <SaveBtnWrapper onPress={() => {}}>
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
