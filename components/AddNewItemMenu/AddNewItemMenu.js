import { View, Modal, Pressable, Image } from "react-native";
import React from "react";
import {
  ModalOverlay,
  ModalButtonContainer,
  GradientBackground,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import folderIcon from "../../assets/folderIcon.png";
import qrCodeIcon from "../../assets/qrCodeIcon.png";
import CloseIcon from "../../assets/closeIcon.png";
import { toggleNewItemModal, toggleAddUrlModal } from "../../redux/modalSlice";
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
} from "../AddNewItemMenu/styles";
import { setFolderToEdit } from "../../redux/modalSlice";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { setScannedLink } from "../../redux/modalSlice";

function AddNewItemMenu({ navigation }) {
  const isNewItemModalOpen = useSelector(
    (state) => state.modal.isNewItemModalOpen
  );
  const dispatch = useDispatch();

  const renderModal = () => {
    
    const openAddOrScan = () => {
      dispatch(toggleNewItemModal());
      dispatch(setScannedLink(null));
      setTimeout(() => {
        dispatch(toggleAddUrlModal());
      }, 200);
    };

    const createNewFolder = () => {
      dispatch(toggleNewItemModal());
      dispatch(setFolderToEdit(null));
      navigation.navigate("AddFolderPage");
    };

    if (isNewItemModalOpen) {
      return (
        <ModalOverlay onPress={() => dispatch(toggleNewItemModal())}>
          <Modal
            transparent={true}
            visible={isNewItemModalOpen}
            animationType="fade"
          >
            <CloserOverlay onPress={() => dispatch(toggleNewItemModal())} />
            <ModalButtonContainer>
              <GradientBackground>
                <LinearGradient
                  style={{ height: `130%` }}
                  colors={["rgba(54,54,54, 0.1)", "rgba(0,0,0, 1)"]}
                >
                  <CloseContainer>
                    <Pressable
                      hitslop={10}
                      onPress={() => {
                        dispatch(toggleNewItemModal());
                      }}
                    >
                      <AntDesign name="closesquareo" size={35} color="white" />
                    </Pressable>
                  </CloseContainer>
                  <AddFolderContainer onPress={() => createNewFolder()} hitslop={10}>
                  <MaterialIcons name="folder" size={30} color="white" />
                    <AddFolderText style={{ color: "white", fontSize: 18 }}>
                      Add Folder
                    </AddFolderText>
                  </AddFolderContainer>
                  <AddQrContainer onPress={() => openAddOrScan()} hitslop={10}>
                  <MaterialIcons name="qr-code-scanner" size={30} color="white" />
                    <AddQrText style={{ color: "white" }}>
                      Add QR Code
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

  // JSX
  return <>{renderModal()}</>;
}

export default AddNewItemMenu;
