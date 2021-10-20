import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {  closeCamera } from "../redux/startCameraSlice";

const BarcodeScanner = () => {
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  const handleQRCodeScan = ({ type, data }) => {
    setScanned(true);
    alert(`Code with type ${type} and data ${data} has been scanned`);
  };

  return (
    <View style={styles.screen}>
      <BarCodeScanner
        style={styles.cameraScreen}
        onBarCodeScanned={scanned ? undefined : handleQRCodeScan}
      >
        <View style={styles.cameraContainer}>
          <Pressable onPress={() => dispatch(closeCamera())} hitSlop={10}>
            <Ionicons name="md-close" size={40} color="white" />
          </Pressable>
        </View>
      </BarCodeScanner>
    </View>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  cameraScreen: {
    flex: 1,
  },
  cameraContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15,
    padding: 25,
    width: Dimensions.get(`window`).width,
    height: Dimensions.get(`window`).height,
  },
});

