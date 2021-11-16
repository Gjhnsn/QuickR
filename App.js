import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { RootSiblingParent } from "react-native-root-siblings";
import Navigation from "./nav/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootSiblingParent>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
}
