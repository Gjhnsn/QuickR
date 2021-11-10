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
import BarcodeScanner from "../BarcodeScanner/BarcodeScanner";
import { useSelector } from "react-redux";



const Dashboard = ({ navigation }) => {

  const setStartCamera = useSelector((state) => state.camera.setStartCamera)
  

  const scannerView = () => {
    return (<BarcodeScanner />)
  };
  
  const homeScreenView = (navigation) => {
    return (
      <ScrollView>
          <AddNewItemMenu navigation={navigation} />
          <AddOrScanModal />
          <UrlModal picker={true}/>
          {/* Homescreen View */}
          <Container>
            <TopBar />
            <QrContainer />
            <FolderContainer navigation={navigation} />
          </Container>
          {/* Homescreen View */}
        </ScrollView>
    )
  }


  return (
    <GlobalContainer>
      <ColorBlob />

      {/* Ternary goes here */}

      {setStartCamera ? scannerView() : homeScreenView(navigation)}

{/* 
      <ScrollView>
        <AddNewItemMenu navigation={navigation} />
        <AddOrScanModal />
        <UrlModal picker={true}/>

        <Container>
          <TopBar />
          <QrContainer />
          <FolderContainer navigation={navigation} />
        </Container>
      </ScrollView> */}
    </GlobalContainer>
  );
};

export default Dashboard;
