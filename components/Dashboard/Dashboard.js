import React from 'react';
import QrContainer from '../QrContainer/QrContainer';
import UrlModal from '../UrlModal/UrlModal';
import FolderContainer from '../folder/FolderContainer/FolderContainer';
import { Container } from './styles';
import TopBar from '../TopBar/TopBar';
import { ScrollView, SafeAreaView, StatusBar } from 'react-native';
import ColorBlob from '../ColorBlob/ColorBlob';
import AddNewItemMenu from '../AddNewItemMenu/AddNewItemMenu';
import { GlobalContainer } from './styles';
import BarcodeScanner from '../BarcodeScanner/BarcodeScanner';
import { useSelector } from 'react-redux';

const Dashboard = ({ navigation }) => {
  const setStartCamera = useSelector((state) => state.camera.setStartCamera);
  const folderData = useSelector((state) => state.folder.allFolder);
  const colorForBlob = useSelector((state) => state.folder.blobColor);

  const scannerView = (navigation) => {
    return <BarcodeScanner toggleModal={false} />;
  };

  const homeScreenView = (navigation) => {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={colorForBlob} barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
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
        <StatusBar style="light" />
      </SafeAreaView>
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
