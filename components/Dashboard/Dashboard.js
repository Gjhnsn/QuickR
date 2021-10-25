import React from "react";
import QrContainer from "../QrContainer/QrContainer";
import UrlModal from "../UrlModal/UrlModal";
import FolderContainer from "../folder/FolderContainer/FolderContainer";
import { Container } from "./styles";
import TopBar from "../TopBar/TopBar";
import { ScrollView } from "react-native";
import ColorBlob from "../ColorBlob/ColorBlob";


const Dashboard = () => {
  return (
    <>
    <ColorBlob/>
    <ScrollView>
    <Container>
      <TopBar/>
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