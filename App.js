import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Dashboard></Dashboard>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
