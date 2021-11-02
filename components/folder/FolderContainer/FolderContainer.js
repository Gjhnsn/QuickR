import React from "react";
import IndividualFolder from "../IndividualFolder/IndividualFolder";
import { useSelector } from "react-redux";
import { Container } from "./styles";

function FolderContainer({navigation}) {
  const folderData = useSelector((state) => state.folder.allFolder);

  const renderFolder = () => {
    const folderKeys = Object.keys(folderData);
    return folderKeys.map((folderName) => {
      return (
        <IndividualFolder
          folder={folderData[folderName]}
          key={folderName}
          folderName={folderName}
          navigation={navigation}
        />
      );
    });
  };

  return <Container>{folderData && renderFolder()}</Container>;
}

export default FolderContainer;
