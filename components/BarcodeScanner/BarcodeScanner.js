import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { closeCamera } from '../../redux/startCameraSlice';
import { Screen, CameraScreen, CameraContainer } from './styles';
import { qrCodeScanned } from '../../utils/toastNote';
import { toggleAddUrlModal, setScannedLink } from '../../redux/modalSlice';
import PlaceHolder from '../Placeholder/PlaceHolder';

const BarcodeScanner = ({ toggleModal, navigation }) => {
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const dispatch = useDispatch();

  const requestCameraAppPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleQRCodeScan = ({ type, data }) => {
    setScanned(true);

    // alert toast that url has been scanned
    qrCodeScanned();

    // dispatch qr code data to redux
    dispatch(setScannedLink(data));

    // close camera after toast disappears(@ 1000ms)
    setTimeout(() => {
      dispatch(closeCamera());

      // toggle add url modal
      toggleModal ? dispatch(toggleAddUrlModal()) : null;
    }, 1200);
    // pass data to add link modal
  };

  const renderScanner = () => {
    return (
      <Screen>
        <BarCodeScanner
          style={CameraScreen}
          onBarCodeScanned={scanned ? undefined : handleQRCodeScan}
        >
          <CameraContainer>
            <Pressable onPress={() => dispatch(closeCamera())} hitSlop={15}>
              <Ionicons name="md-close" size={40} color="white" />
            </Pressable>
          </CameraContainer>
        </BarCodeScanner>
      </Screen>
    );
  };

  return (
    <>
      {hasPermission ? (
        renderScanner()
      ) : (
        <PlaceHolder requestCameraAppPermission={requestCameraAppPermission} />
      )}
    </>
  );
};

export default BarcodeScanner;
