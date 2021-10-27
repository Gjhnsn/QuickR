import React, { useState } from "react";
import QrContainer from "../QrContainer/QrContainer";
import UrlModal from "../UrlModal/UrlModal";
import FolderContainer from "../folder/FolderContainer/FolderContainer";
import { Container } from "./styles";
import TopBar from "../TopBar/TopBar";
import { ScrollView } from "react-native";
import ColorBlob from "../ColorBlob/ColorBlob";
import AddNewItemMenu from "../AddNewItemMenu/AddNewItemMenu";
import AddOrScanModal from "../AddOrScanModal/AddOrScanModal";
import NewFolderPage from "../folder/NewFolderModal/NewFolderModal";

const Dashboard = () => {
  return (
    <>
      <ColorBlob />
      <ScrollView>

        <AddOrScanModal />
        <AddNewItemMenu />
        <NewFolderPage />
        {/* Homescreen View */}
        <Container>
          <TopBar />
          <QrContainer />
          <FolderContainer />
        </Container>
        {/* Homescreen View */}

      </ScrollView>
    </>
  );
};

export default Dashboard;
