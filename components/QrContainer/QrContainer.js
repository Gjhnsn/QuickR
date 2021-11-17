import React, { useState } from "react";
import { Pressable, StyleSheet, Share } from "react-native";
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
  ShareButton,
  ButtonContainer,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import LinkIcon from "../../assets/link.png";
import QrSvgPlaceholderComponent from "../Svg/qrSvgPlaceholderComponent";

import * as WebBrowser from "expo-web-browser";

const QrContainer = () => {
  const currentQr = useSelector((state) => state.qr.url);
  const currentQrName = useSelector((state) => state.qr.urlName);
  const qrDescription = useSelector((state) => state.qr.description);
  const qrLink = useSelector((state) => state.qr);
  const [openQrDescription, setOpenQrDescription] = useState(false);
  const [result, setResult] = useState(null);

  const toggleDescription = () => {
    setOpenQrDescription(!openQrDescription);
  };

  const openWebView = async () => {
    // check if urlLink begins with http or https, if it doesnt then add to beginning of string.
    const checkUrlRegex = new RegExp("^(http|https)://").test(
      qrLink.urlAddress
    );

    if (checkUrlRegex) {
      let result = await WebBrowser.openBrowserAsync(qrLink.urlAddress);
      setResult(result);
    } else {
      let result = await WebBrowser.openBrowserAsync(
        `https://${qrLink.urlAddress}`
      );
      setResult(result);
    }
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Checkout this link from QuickR ${qrLink.urlAddress}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const renderQrDescription = () => {
    if (openQrDescription) {
      return (
        <DescriptionContainer>
          <DescriptionText>{qrDescription}</DescriptionText>
          <ButtonContainer>
            <ShareButton onPress={() => onShare()}>
              <Ionicons name="share-outline" size={24} color={"white"} />
            </ShareButton>
            <LinkButton onPress={() => openWebView()}>
              <Link resizeMode="contain" source={LinkIcon} />
            </LinkButton>
          </ButtonContainer>
        </DescriptionContainer>
      );
    }
  };

  return (
    <Container>
      {qrLink.urlAddress ? (
        <>
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
        </>
      ) : (
        <QrSvgPlaceholderComponent />
      )}
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
