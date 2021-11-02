import Toast from "react-native-root-toast";

 export const runToaster = (deletedFolder) => {
    let toast = Toast.show(`${deletedFolder} Has Been Deleted`, {
      duration: 2000,
      position: 100,
      shadow: false,
      backgroundColor: `rgb(0, 0, 0)`,
      textColor: "white",
      animation: true,
      hideOnPress: true,
      delay: 500,
    });

    return toast;
  };

