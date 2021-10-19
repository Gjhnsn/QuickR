import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import QrContainer from "./QrContainer";

const Dashboard = () => {
  return (
    <View>
      <QrContainer />
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
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
