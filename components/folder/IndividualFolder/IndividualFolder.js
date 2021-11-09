import React from "react";
import { Pressable } from "react-native";
import LinksContainer from "../LinksContainer/LinksContainer";
import {
  FolderContainer,
  FolderTitle,
  FolderColorBubble,
  TitleContainer,
  EditButton,
  FolderToggleButton,
  FolderInitialElements,
  FolderOpenedElements,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { openAccordion } from "../../../redux/folderSlice";
import editIcon from "../../../assets/editIcon.png";
import upIcon from "../../../assets/upIcon.png";
import { setFolderToEdit } from "../../../redux/modalSlice";

function IndividualFolder({ folder, folderName, navigation }) {
  const dispatch = useDispatch();
  const accordion = useSelector((state) => state.folder.allFolder);

  const showLinks = () => {
    if (accordion[folderName].isAccordionOpen) {
      return (
        <FolderOpenedElements>
          <LinksContainer
            folderColor={folder.folderColor}
            folderItems={folder.items}
            folderName={folderName}
          />
        </FolderOpenedElements>
      );
    }
  };

  const editButtonAction = () => {
    navigation.navigate("EditFolderPage", {
      editMode: true,
      folder,
    })

    dispatch(setFolderToEdit(folderName));
  };

  return (
    <FolderContainer onPress={() => dispatch(openAccordion(folderName))}>
      <FolderInitialElements>
        <TitleContainer>
          <FolderColorBubble folderColor={folder.folderColor} />
          <FolderTitle>{folderName}</FolderTitle>
          <Pressable
            onPress={() => editButtonAction()}
          >
            <EditButton source={editIcon} />
          </Pressable>
        </TitleContainer>
        <FolderToggleButton source={upIcon} />
      </FolderInitialElements>

      {showLinks()}
    </FolderContainer>
  );
}

export default IndividualFolder;
