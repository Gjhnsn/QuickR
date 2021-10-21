import { View, Text } from "react-native";
import React from "react";
import LinksContainer from "../LinksContainer/LinksContainer";

function IndividualFolder({folder, folderName}) {

  return (
    <View>
        <Text>{folderName}</Text>
        <LinksContainer folderItems={folder.items}></LinksContainer>
    </View>
  );
}

export default IndividualFolder;
