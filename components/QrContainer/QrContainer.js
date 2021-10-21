import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { __startCamera } from "../../utils/startCamera";
import { openCamera } from "../../redux/startCameraSlice";
import BarcodeScanner from "../BarcodeScanner/BarcodeScanner";
import { Container, QrWrapper, QrImage } from "./styles";

const QrContainer = () => {
  const isCameraOpen = useSelector((state) => state.camera.setStartCamera);
  const currentQr = useSelector((state) => state.qr.url);
  const dispatch = useDispatch();

  return (
    <Container>
      {isCameraOpen ? (
        <BarcodeScanner />
      ) : (
        // home screen view
        <QrWrapper>
          <QrImage source={{ uri: currentQr }} />
          {/* Open Camera Button */}
          <Pressable
            onPress={() => __startCamera(dispatch(openCamera()))}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Scan</Text>
          </Pressable>
        </QrWrapper>
      )}

      <StatusBar style="auto" />
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 130,
    borderRadius: 4,
    backgroundColor: "#14274e",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default QrContainer;
