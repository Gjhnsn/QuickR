import React, { useState } from "react";
import { Pressable, StyleSheet, Share, View } from "react-native";
import { useSelector } from "react-redux";
import { __startCamera } from "../../utils/startCamera";
import {
  Container,
  QrWrapper,
  QrImage,
  QrName,
  QrNameContainer,
  DescriptionContainer,
  DescriptionText,
  LinkButton,
  ShareButton,
  ButtonContainer,
} from "./styles";
import { Ionicons, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
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
        <View
          style={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            overflow: "hidden",
          }}
        >
          <LinearGradient
            colors={["#252528", "#363636"]}
            start={[1, 0]}
            end={[0, 0]}
            style={{ overflow: "hidden" }}
          >
            <DescriptionContainer>
              <DescriptionText>{qrDescription}</DescriptionText>
              <ButtonContainer>
                <ShareButton onPress={() => onShare()} hitslop={10}>
                  <Ionicons name="share-outline" size={30} color={"white"} />
                </ShareButton>
                <LinkButton onPress={() => openWebView()} hitslop={10}>
                  <Feather name="link" size={25} color="white" />
                </LinkButton>
              </ButtonContainer>
            </DescriptionContainer>
          </LinearGradient>
        </View>
      );
    }
  };

  return (
    <Container>
      {qrLink.urlAddress ? (
        <>
          <QrImage source={{ uri: currentQr }} />
      <View
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          overflow: "hidden",
        }}
      >
        <LinearGradient
          colors={["#252528", "#363636"]}
          start={[1, 0]}
          end={[0, 0]}
          style={{ overflow: "hidden" }}
        >
          <QrWrapper>
            <QrNameContainer>
              <QrName>{currentQrName}</QrName>
              <Pressable onPress={() => toggleDescription()} hitslop={10}>
                <Ionicons name="ellipsis-horizontal" size={30} color="white" />
              </Pressable>
            </QrNameContainer>
            {renderQrDescription()}
          </QrWrapper>
        </LinearGradient>
      </View>
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
