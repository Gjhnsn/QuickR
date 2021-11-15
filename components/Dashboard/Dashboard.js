import React from "react";
import QrContainer from "../QrContainer/QrContainer";
import UrlModal from "../UrlModal/UrlModal";
import FolderContainer from "../folder/FolderContainer/FolderContainer";
import { Container } from "./styles";
import TopBar from "../TopBar/TopBar";
import { ScrollView } from "react-native";
import ColorBlob from "../ColorBlob/ColorBlob";
import AddNewItemMenu from "../AddNewItemMenu/AddNewItemMenu";
import { GlobalContainer } from "./styles";
import BarcodeScanner from "../BarcodeScanner/BarcodeScanner";
import { useSelector } from "react-redux";

const Dashboard = ({ navigation }) => {
  const setStartCamera = useSelector((state) => state.camera.setStartCamera);

  const scannerView = () => {
    return <BarcodeScanner toggleModal={false} />;
  };

  const homeScreenView = (navigation) => {
    return (
      <ScrollView>
        <AddNewItemMenu navigation={navigation} />
        <UrlModal picker={true} />
        {/* Homescreen View */}
        <Container>
          <TopBar />
          <QrContainer />
          <FolderContainer navigation={navigation} />
        </Container>
        {/* Homescreen View */}
      </ScrollView>
    );
  };

  return (
    <GlobalContainer>
      <ColorBlob />

      {setStartCamera ? scannerView() : homeScreenView(navigation)}
    </GlobalContainer>
  );
};

export default Dashboard;
