import React, { useState } from "react";
import QrContainer from "../QrContainer/QrContainer";
import UrlModal from "../UrlModal/UrlModal";
import FolderContainer from "../folder/FolderContainer/FolderContainer";
import { Container } from "./styles";
import TopBar from "../TopBar/TopBar";
import { ScrollView } from "react-native";
import ColorBlob from "../ColorBlob/ColorBlob";
import AddNewItemMenu from "../AddNewItemMenu/AddNewItemMenu";
import { Text, View, Image } from "react-native";
import {
  AddFolderContainer,
  AddFolderText,
  AddQrContainer,
  AddQrText,
  CloseContainer,
  FolderImage,
  QrImage,
} from "../AddNewItemMenu/styles";
import folderIcon from "../../assets/folderIcon.png";
import qrCodeIcon from "../../assets/qrCodeIcon.png";
import CloseIcon from "../../assets/closeIcon.png";

const Dashboard = () => {

  // Set the addnewitemmenu visibility state or whatever to open modal 

  // Add the trigger to the plus button in top bar
  // might have to make it a pressable also

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <ColorBlob />
      <ScrollView>
        <AddNewItemMenu openModal={openModal}>
          <CloseContainer>
            <Image source={CloseIcon} />
          </CloseContainer>
          <AddFolderContainer>
            <FolderImage source={folderIcon} />
            <AddFolderText Text style={{ color: "white", fontSize: 18 }}>
              Add Folder
            </AddFolderText>
          </AddFolderContainer>
          <AddQrContainer>
            <QrImage source={qrCodeIcon} />
            <AddQrText style={{ color: "white" }}>Add QR Code</AddQrText>
          </AddQrContainer>
        </AddNewItemMenu>
        <Container>
          <TopBar setOpenModal={setOpenModal} />
          <QrContainer />
          {/* URL Modal needs a toggle function */}
          {/* <UrlModal/> */}
          <FolderContainer />
        </Container>
      </ScrollView>
    </>
  );
};

export default Dashboard;
