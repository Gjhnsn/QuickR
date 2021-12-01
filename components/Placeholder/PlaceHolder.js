import React from "react";
import { View, Text, Linking, StatusBar } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Screen,
  PlaceHolderWrapper,
  PlaceHolderText,
  BackButton,
  EnableCameraButton,
  ButtonText,
  PlaceHolderBlob,
  AllowAccessButton,
} from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { closeCamera, openCamera } from "../../redux/startCameraSlice";

const PlaceHolder = ({ requestCameraAppPermission }) => {
  const dispatch = useDispatch();

  const askForCameraPermissionButton = () => {
    return (
      <EnableCameraButton onPress={() => requestCameraAppPermission()}>
        <ButtonText style={{ color: '#1c1d21' }}>Enable Camera</ButtonText>
      </EnableCameraButton>
    );
  };

  const cameraSettingsLink = () => {
    return (
      <AllowAccessButton onPress={() => Linking.openURL("app-settings:")}>
        <ButtonText style={{ color: "#5E5CE6" }}>Allow Access</ButtonText>
      </AllowAccessButton>
    );
  };

  return (
    <Screen>
      <StatusBar barStyle="light-content" />
      <PlaceHolderBlob />
      <BackButton onPress={() => dispatch(closeCamera())} hitslop={10}>
        <Ionicons name="chevron-back" size={40} color="white" />
      </BackButton>
      <View>
      <PlaceHolderWrapper>
        <View>
          <MaterialCommunityIcons
            name="emoticon-sad-outline"
            size={60}
            color="white"
          />
        </View>
        <PlaceHolderText>
          Uh-Oh, QuickR needs access to your camera
        </PlaceHolderText>
        {/* render async permission settings */}
        {askForCameraPermissionButton()}
        {/* render camera settings button for ios */}
        {Platform.OS === "ios" ? cameraSettingsLink() : null}
      </PlaceHolderWrapper>
      </View>
    </Screen>
  );
};

export default PlaceHolder;
