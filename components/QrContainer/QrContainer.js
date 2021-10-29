import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { __startCamera } from "../../utils/startCamera";
import {
  Container,
  QrWrapper,
  QrImage,
  QrInfo,
  QrName,
  QrNameContainer,
  DescriptionContainer,
  DescriptionText,
  Link,
  LinkButton,
} from "./styles";
import MoreIcon from "../../assets/moreIcon.svg";
import { Ionicons } from "@expo/vector-icons";
import LinkIcon from "../../assets/link.png";

const QrContainer = () => {
  const currentQr = useSelector((state) => state.qr.url);
  const currentQrName = useSelector((state) => state.qr.urlName);
  const folderData = useSelector((state) => state.folder.allFolder);
  const qrDescription = useSelector((state) => state.qr.description);
  const current = useSelector((state) => state.folder.allFolder);

  const [openQrDescription, setOpenQrDescription] = useState(false);

  const toggleDescription = () => {
    setOpenQrDescription(!openQrDescription);
  };

  const renderQrDescription = () => {
    if (openQrDescription) {
      return (
        <DescriptionContainer>
          <DescriptionText>{qrDescription}</DescriptionText>
          <LinkButton onPress={() => {}}>
            <Link resizeMode="contain" source={LinkIcon} />
          </LinkButton>
        </DescriptionContainer>
      );
    } else {
      <></>;
    }
  };

  return (
    <Container>
      <QrImage source={{ uri: currentQr }} />
      <QrWrapper>
        <QrInfo>
          <QrNameContainer>
            <QrName>{currentQrName}</QrName>
            <Pressable>
              <Ionicons
                name="ellipsis-horizontal"
                size={30}
                color="white"
                onPress={() => toggleDescription()}
              />
            </Pressable>
          </QrNameContainer>
          {renderQrDescription()}
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
