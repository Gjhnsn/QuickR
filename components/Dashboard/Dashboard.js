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
import FolderActionModal from "../folder/FolderActionModal/FolderActionModal";
// import Toast from "react-native-root-toast";
// import ToastNote from "../../utils/ToastNote";
// import { runToaster } from "../../utils/ToastNote";

const Dashboard = () => {
  // let toast = Toast.show("Folder Has Been Deleted", {
  //   duration: 1000,
  //   position: 100,
  //   shadow: true,
  //   backgroundColor: "black",
  //   textColor: "white",
  //   animation: true,
  //   hideOnPress: true,
  //   delay: 0,
  // });

  // // setTimeout(function hideToast() {
  // //   Toast.hide(toast);
  // // }, 500)


  return (
    <>
      <ColorBlob />
      <ScrollView>
        <AddOrScanModal />
        <AddNewItemMenu />
        <FolderActionModal />
        <UrlModal />
        {/* Homescreen View */}
        <Container>
          {/* <ToastNote /> */}
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
