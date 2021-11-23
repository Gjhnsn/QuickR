import Toast from "react-native-root-toast";
import {  Platform } from "react-native";

export const deleteFolderToast = (deletedFolder) => {
  let toast = Toast.show(`${deletedFolder} Has Been Deleted`, {
    duration: 2000,
    position: 100,
    shadow: false,
    backgroundColor: `${Platform.OS === "ios" ? '#363636' : '#131313'}`,
    textColor: "white",
    animation: true,
    hideOnPress: true,
    delay: 500,
    opacity: 1,
  });

  return toast;
};

export const selectValidFolderToast = () => {
  let toast = Toast.show(`Please select a valid folder.`, {
    duration: 2000,
    position: 100,
    shadow: false,
    backgroundColor: `${Platform.OS === "ios" ? '#363636' : '#131313'}`,
    textColor: "white",
    animation: true,
    hideOnPress: true,
    delay: 500,
    opacity: 1,
  });

  return toast;
};

export const deleteLinkToast = (link) => {
  let toast = Toast.show(`${link} has been deleted.`, {
    duration: 2000,
    position: 100,
    shadow: false,
    backgroundColor: `${Platform.OS === "ios" ? '#363636' : '#131313'}`,
    textColor: "white",
    animation: true,
    hideOnPress: true,
    delay: 500,
    opacity: 1,
  });

  return toast;
};

export const qrCodeScanned = () => {
  let toast = Toast.show(`Url detected.`, {
    duration: 1000,
    position: 100,
    shadow: false,
    backgroundColor: `${Platform.OS === "ios" ? '#363636' : '#131313'}`,
    textColor: "white",
    animation: true,
    hideOnPress: true,
    delay: 500,
    opacity: 1,
  });

  return toast;
};