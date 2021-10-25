import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { __startCamera } from "../../utils/startCamera";
import { Container, QrWrapper, QrImage, QrInfo, QrName, QrNameContainer } from "./styles";
import MoreIcon from '../../assets/moreIcon.svg';
import { Ionicons } from "@expo/vector-icons";

const QrContainer = () => {
  const currentQr = useSelector((state) => state.qr.url);
  const currentQrName = useSelector((state) => state.qr.urlName);
  const folderData = useSelector((state) => state.folder)

  const qrInfo = () => {
    const folderKeys = Object.keys(folderData);
    return (
      folderKeys.map((folder) => {
        return (
            <Text>{folderData[folder].items.description}</Text>
        )
      })
    )
  }

  return ( 
    <Container>
    
        <QrWrapper>
          <QrImage source={{ uri: currentQr }} />
          <QrInfo>
            <QrNameContainer>
              <QrName>{currentQrName}</QrName>
              <Ionicons name="ellipsis-horizontal" size={30} color="white" />
            </QrNameContainer>
            <View>
                {qrInfo()}
              </View>
          </QrInfo>
        </QrWrapper>

    </Container>
  );
};


export default QrContainer;
