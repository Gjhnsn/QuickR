import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { __startCamera } from "../utils/startCamera";
import { openCamera } from "../redux/startCameraSlice";
import BarcodeScanner from "./BarcodeScanner";

const QrContainer = () => {
  const isCameraOpen = useSelector((state) => state.camera.setStartCamera);
  const currentQr = useSelector((state) => state.qr.url);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      {isCameraOpen ? (
        <BarcodeScanner />
      ) : (
        // home screen view
        <View style={styles.qrContainer}>
          <Image
            style={{ width: 300, height: 300 }}
            source={{ uri: currentQr }}
          />
          {/* Open Camera Button */}
          <Pressable
            onPress={() => __startCamera(dispatch(openCamera()))}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Scan</Text>
          </Pressable>
        </View>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  qrContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
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
