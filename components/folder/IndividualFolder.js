import { View, Text } from "react-native";
import React from "react";
import LinksContainer from "./LinksContainer";

function IndividualFolder({folder}) {

  return (
    <View>
        <Text>{folder.folderName}</Text>
        <LinksContainer folderItems={folder.items}></LinksContainer>
    </View>
  );
}

export default IndividualFolder;
