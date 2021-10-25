import React from "react";
import LinksContainer from "../LinksContainer/LinksContainer";
import {
  FolderContainer,
  FolderTitle,
  FolderColorBubble,
  TitleContainer,
  EditButton,
  FolderToggleButton,
  FolderInitialElements,
  FolderOpenedElements
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { openAccordion } from "../../../redux/folderSlice";
import editIcon from "../../../assets/editIcon.png";
import upIcon from "../../../assets/upIcon.png";

function IndividualFolder({ folder, folderName }) {
  const dispatch = useDispatch();
  const accordion = useSelector((state) => state.folder);

  const showLinks = () => {
    if(accordion[folderName].isAccordionOpen) {
      return (
        <FolderOpenedElements>
          <LinksContainer folderColor={folder.folderColor} folderItems={folder.items} folderName={folderName}/>
      </FolderOpenedElements>
      )
    }
  }

  console.log(folder)

  return (
    <FolderContainer onPress={() => dispatch(openAccordion(folderName))}>

      <FolderInitialElements>
        <TitleContainer>
          <FolderColorBubble folderColor={folder.folderColor} />
          <FolderTitle>{folderName}</FolderTitle>
          <EditButton source={editIcon} />
          
        </TitleContainer>
        <FolderToggleButton source={upIcon}/>
       
      </FolderInitialElements>

      {showLinks()}
    </FolderContainer>
  );
}

export default IndividualFolder;
