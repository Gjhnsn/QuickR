import React from "react";
import QrContainer from "../QrContainer/QrContainer";
import UrlModal from "../UrlModal/UrlModal";
import FolderContainer from "../folder/FolderContainer/FolderContainer";
import { Container } from "./styles";
import TopBar from "../TopBar/TopBar";
import { ScrollView } from "react-native";
import ColorBlob from "../ColorBlob/ColorBlob";
import AddNewItemMenu from "../AddNewItemMenu/AddNewItemMenu";
import AddOrScanModal from "../AddOrScanModal/AddOrScanModal";
import { GlobalContainer } from "./styles";

const Dashboard = ({ navigation }) => {
  return (
    <GlobalContainer>
      <ColorBlob />
      <ScrollView>
        <AddNewItemMenu navigation={navigation} />
        <AddOrScanModal />
        <UrlModal />
        {/* Homescreen View */}
        <Container>
          <TopBar />
          <QrContainer />
          <FolderContainer navigation={navigation} />
        </Container>
        {/* Homescreen View */}
      </ScrollView>
    </GlobalContainer>
  );
};

export default Dashboard;
