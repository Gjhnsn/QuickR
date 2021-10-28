import link from "../../assets/link.png";
import React from "react";
import {
  ModalOverlay,
  ModalButtonContainer,
  GradientBackground,
} from "./styles";
import { Modal, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import qrCodeIcon from "../../assets/qrCodeIcon.png";
import CloseIcon from "../../assets/closeIcon.png";
import { toggleAddOrScanModal, toggleAddUrlModal } from "../../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  AddFolderContainer,
  AddFolderText,
  AddQrContainer,
  AddQrText,
  CloseContainer,
  FolderImage,
  QrImage,
  CloserOverlay,
} from "../AddOrScanModal/styles";

const AddOrScanModal = () => {
  const isAddOrScanModalOpen = useSelector(
    (state) => state.modal.isAddOrScanModalOpen
  );

  const dispatch = useDispatch();

  const openAddUrlModal = () => {
    dispatch(toggleAddOrScanModal());
    setTimeout(() => {dispatch(toggleAddUrlModal())}, 500)
  }

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
                    <Pressable onPress={() => dispatch(toggleAddOrScanModal())}>
                      <Image source={CloseIcon} />
                    </Pressable>
                  </CloseContainer>
                  <Pressable onPress={() => {openAddUrlModal()}}>
                    <AddFolderContainer>
                      <FolderImage source={link} />
                      <AddFolderText style={{ color: "white", fontSize: 18 }}>
                        Add URL
                      </AddFolderText>
                    </AddFolderContainer>
                  </Pressable>
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
