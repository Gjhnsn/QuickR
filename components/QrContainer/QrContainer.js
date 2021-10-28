import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { __startCamera } from "../../utils/startCamera";
import {
  Container,
  QrWrapper,
  QrImage,
  QrInfo,
  QrName,
  QrNameContainer,
} from "./styles";
import MoreIcon from "../../assets/moreIcon.svg";
import { Ionicons } from "@expo/vector-icons";
import { WhiteBalance } from "expo-camera/build/Camera.types";

const QrContainer = () => {
  const currentQr = useSelector((state) => state.qr.url);
  const currentQrName = useSelector((state) => state.qr.urlName);
  const folderData = useSelector((state) => state.folder.allFolder);
  const qrDescription = useSelector((state) => state.qr.description);
  const current = useSelector((state) => state.folder.allFolder);

  const qrInfo = () => {
    const folderKeys = Object.keys(folderData); // ["Personal", "Menu", "Social"] names of each folder
    console.log("description: ", qrDescription);

    return <Text style={styles.text}>{qrDescription}</Text>;
  };

  return (
    <Container>
      <QrWrapper>
        <QrImage source={{ uri: currentQr }} />
        <QrInfo>
          <QrNameContainer>
            <QrName>{currentQrName}</QrName>
            <Pressable>
              <Ionicons
                name="ellipsis-horizontal"
                size={30}
                color="white"
                onPress={() => qrInfo()}
              />
            </Pressable>
            <View style={styles.container}>{qrInfo()}</View>
          </QrNameContainer>
        </QrInfo>
      </QrWrapper>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

export default QrContainer;
