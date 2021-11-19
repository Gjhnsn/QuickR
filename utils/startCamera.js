import { openCamera } from "../redux/startCameraSlice";
import { BarCodeScanner } from "expo-barcode-scanner";

export const __startCamera = async (dispatch) => {
  const { status } = await BarCodeScanner.requestPermissionsAsync();
  if (status === "granted") {
    dispatch;
  } else {
    Alert.alert("Camera access is required.");
  }
};
