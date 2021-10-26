import { View, Modal } from "react-native";
import React from "react";
import {
  ModalContainer,
  ModalOverlay,
  ModalButtonContainer,
  GradientBackground,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";

function AddNewItemMenu(props) {
  return (
      <ModalOverlay>
        <Modal transparent={true} visible={true}>
          <ModalButtonContainer>
            <GradientBackground>
              <LinearGradient
                style={{ height: `130%` }}
                colors={["rgba(54,54,54, 0.1)", "rgba(0,0,0, 1)"]}
              >
                {props.children}
              </LinearGradient>
            </GradientBackground>
          </ModalButtonContainer>
        </Modal>
      </ModalOverlay>
  );
}

export default AddNewItemMenu;
