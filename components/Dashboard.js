import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import QrContainer from "./QrContainer";
import UrlModal from "./UrlModal";
import FolderContainer from "./folder/FolderContainer";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      
      <QrContainer />
      {/* URL Modal needs a toggle function */}
      {/* <UrlModal/> */}
      <FolderContainer />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 30,
    padding: 10,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
