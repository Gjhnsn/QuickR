import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BarcodeScanner = () => {
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get("window").width,
      }}
    >
      <BarCodeScanner
        style={styles.cameraScreen}
        onBarCodeScanned={scanned ? undefined : handleQRCodeScan}
      >
        <View style={styles.cameraContainer}>
          <Pressable onPress={() => setStartCamera(false)} hitSlop={10}>
            <Ionicons name="md-close" size={40} color="white" />
          </Pressable>
        </View>
      </BarCodeScanner>
    </View>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
  cameraScreen: {
    flex: 1,
  },
  cameraContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15,
    padding: 25,
  },
});
