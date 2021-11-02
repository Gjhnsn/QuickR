import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./components/Dashboard/Dashboard";
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootSiblingParent>
          <Dashboard />
        </RootSiblingParent>
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
