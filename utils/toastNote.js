import Toast from "react-native-root-toast";

export const deleteFolderToast = (deletedFolder) => {
  let toast = Toast.show(`${deletedFolder} Has Been Deleted`, {
    duration: 2000,
    position: 100,
    shadow: false,
    backgroundColor: "#363636",
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
    position: -100,
    shadow: false,
    backgroundColor: "#363636",
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
    backgroundColor: "#363636",
    textColor: "white",
    animation: true,
    hideOnPress: true,
    delay: 500,
    opacity: 1,
  });

  return toast;
};
