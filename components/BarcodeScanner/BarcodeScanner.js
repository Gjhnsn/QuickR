import React, { useState } from "react";
import { Text, View, Dimensions, Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {  closeCamera } from "../../redux/startCameraSlice";
import { Screen, CameraScreen, CameraContainer, CloseIcon } from "./styles";

const BarcodeScanner = () => {
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  const handleQRCodeScan = ({ type, data }) => {
    setScanned(true);
    alert(`Code with type ${type} and data ${data} has been scanned`);
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


