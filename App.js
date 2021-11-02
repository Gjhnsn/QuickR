import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./components/Dashboard/Dashboard";
import { RootSiblingParent } from "react-native-root-siblings";
import Navigation from "./nav/Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </RootSiblingParent>
    </Provider>
  );
}
