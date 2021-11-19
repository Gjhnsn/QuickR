import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { RootSiblingParent } from "react-native-root-siblings";
import Navigation from "./nav/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";


export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  })

  if(!fontsLoaded) {
    return <AppLoading/>
  } else {
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

}
