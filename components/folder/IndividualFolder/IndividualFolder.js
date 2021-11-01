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
import { toggleEditFolderModal } from '../../../redux/modalSlice';

function IndividualFolder({ folder, folderName }) {
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

  return (
    <FolderContainer onPress={() => dispatch(openAccordion(folderName))}>
      <FolderInitialElements>
        <TitleContainer>
          <FolderColorBubble folderColor={folder.folderColor} />
          <FolderTitle>{folderName}</FolderTitle>
          <Pressable onPress={() => dispatch(toggleEditFolderModal(folder))}>
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
