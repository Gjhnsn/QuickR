import { View, Text } from "react-native";
import React from "react";
import LinksContainer from "../LinksContainer/LinksContainer";
import {FolderContainer, FolderTitle} from './styles'

function IndividualFolder({folder, folderName}) {

  return (
    <FolderContainer>
        <FolderTitle>{folderName}</FolderTitle>
        {/* <LinksContainer folderItems={folder.items} ></LinksContainer> */}
    </FolderContainer>
  );
}

export default IndividualFolder;
