import React from "react";
import { useSelector } from "react-redux";
import { __startCamera } from "../../utils/startCamera";
import { Container, QrWrapper, QrImage, QrInfo } from "./styles";

const QrContainer = () => {
  const currentQr = useSelector((state) => state.qr.url);

  return ( 
    <Container>
    
        <QrWrapper>
          <QrImage source={{ uri: currentQr }} />
          <QrInfo></QrInfo>
        </QrWrapper>

    </Container>
  );
};


export default QrContainer;
