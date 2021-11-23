import React from "react";
import { Pressable, Platform } from "react-native";
import LinksContainer from "../LinksContainer/LinksContainer";
import {
  FolderContainer,
  FolderTitle,
  FolderColorBubble,
  TitleContainer,
  FolderInitialElements,
  FolderOpenedElements,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { openAccordion } from "../../../redux/folderSlice";
import { setFolderToEdit } from "../../../redux/modalSlice";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function IndividualFolder({ folder, folderName, navigation }) {
  const dispatch = useDispatch();
  const accordion = useSelector((state) => state.folder.allFolder);

  const showLinks = () => {
    if (accordion[folderName].isAccordionOpen) {
      return (
        <LinearGradient colors={Platform.OS === "ios" ? ['#313234', "#252528"] : ['#313234', "#252528" ]}>
          <FolderOpenedElements>
            <LinksContainer
              folderColor={folder.folderColor}
              folderItems={folder.items}
              folderName={folderName}
            />
          </FolderOpenedElements>
        </LinearGradient>
      );
    }
  };

  const editButtonAction = () => {
    navigation.navigate("EditFolderPage", {
      editMode: true,
      folder,
    });

    dispatch(setFolderToEdit(folderName));
  };

  return (
    <LinearGradient
      colors={Platform.OS === 'ios' ? ["#1C1D21", "#2A2A2A", "#2B2B2B"] : ["#1C1D21", "#2A2A2A", "#2B2B2B"]}
      start={[1, 0]}
      end={[0, 0]}
    >
      <FolderContainer onPress={() => dispatch(openAccordion(folderName))}>
        <FolderInitialElements>
          <TitleContainer>
            <FolderColorBubble folderColor={folder.folderColor} />
            <FolderTitle>{folderName}</FolderTitle>
            {/* only render edit icon if accordion is open */}
            {accordion[folderName].isAccordionOpen ? (
              <Pressable onPress={() => editButtonAction()} hitslop={10}>
                <MaterialCommunityIcons
                  name="pencil-outline"
                  size={20}
                  color="white"
                />
              </Pressable>
            ) : null}
          </TitleContainer>
          {/* down arrow when folder is closed | up arrow when folder is open */}
          {accordion[folderName].isAccordionOpen ? (
            <MaterialIcons name="keyboard-arrow-up" size={30} color="#6F6F6F" />
          ) : (
            <MaterialIcons
              name="keyboard-arrow-down"
              size={30}
              color="#6F6F6F"
            />
          )}
        </FolderInitialElements>
        {showLinks()}
      </FolderContainer>
    </LinearGradient>
  );
}

export default IndividualFolder;
