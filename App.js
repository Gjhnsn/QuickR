import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Dashboard />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1D21",
    alignItems: "center",
    justifyContent: "center",
  },
});
