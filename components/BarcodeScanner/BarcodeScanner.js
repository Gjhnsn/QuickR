import React, { useState } from "react";
import { Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { closeCamera } from "../../redux/startCameraSlice";
import { Screen, CameraScreen, CameraContainer, CloseIcon } from "./styles";
import { qrCodeScanned } from "../../utils/toastNote";
import { toggleAddUrlModal, setScannedLink } from "../../redux/modalSlice";

const BarcodeScanner = ({ toggleModal }) => {
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

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
      dispatch(setScannedLink(""));
    }, 1200);

    // pass data to add link modal
  };

  return (
    <Screen>
      <BarCodeScanner
        style={CameraScreen}
        onBarCodeScanned={scanned ? undefined : handleQRCodeScan}
      >
        <CameraContainer>
          <Pressable onPress={() => dispatch(closeCamera())} hitSlop={10}>
            <Ionicons name="md-close" size={40} color="white" />
          </Pressable>
        </CameraContainer>
      </BarCodeScanner>
    </Screen>
  );
};

export default BarcodeScanner;
