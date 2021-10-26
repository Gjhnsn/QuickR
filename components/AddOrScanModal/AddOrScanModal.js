import link from "../../assets/link.png";
import React from "react";
import {
  ModalOverlay,
  ModalButtonContainer,
  GradientBackground,
} from "./styles";
import { View, Modal, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import folderIcon from "../../assets/folderIcon.png";
import qrCodeIcon from "../../assets/qrCodeIcon.png";
import CloseIcon from "../../assets/closeIcon.png";
import { toggleAddOrScanModal } from "../../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  AddFolderContainer,
  AddFolderText,
  AddQrContainer,
  AddQrText,
  CloseContainer,
  FolderImage,
  QrImage,
  CloserOverlay
} from "../AddOrScanModal/styles";

const AddOrScanModal = () => {
  const isAddOrScanModalOpen = useSelector(
    (state) => state.modal.isAddOrScanModalOpen
  );

  const dispatch = useDispatch();

  const renderModal = () => {
    if (isAddOrScanModalOpen) {
      return (
        <ModalOverlay>
            <Modal
              transparent={true}
              visible={isAddOrScanModalOpen}
              animationType="slide"
            >
                <CloserOverlay onPress={() => dispatch(toggleAddOrScanModal())} />
              <ModalButtonContainer>
                <GradientBackground>
                  <LinearGradient
                    style={{ height: `130%` }}
                    colors={["rgba(54,54,54, 0.1)", "rgba(0,0,0, 1)"]}
                  >
                    <CloseContainer>
                      <Pressable
                        onPress={() => dispatch(toggleAddOrScanModal())}
                      >
                        <Image source={CloseIcon} />
                      </Pressable>
                    </CloseContainer>
                    <AddFolderContainer>
                      <FolderImage source={link} />
                      <AddFolderText
                        Text
                        style={{ color: "white", fontSize: 18 }}
                      >
                        Add URL
                      </AddFolderText>
                    </AddFolderContainer>
                    <AddQrContainer>
                      <QrImage source={qrCodeIcon} />
                      <AddQrText style={{ color: "white" }}>
                        Scan QR Code
                      </AddQrText>
                    </AddQrContainer>
                  </LinearGradient>
                </GradientBackground>
              </ModalButtonContainer>
            </Modal>
        </ModalOverlay>
      );
    } else {
      return <></>;
    }
  };

  return <>{renderModal()}</>;
};

export default AddOrScanModal;
