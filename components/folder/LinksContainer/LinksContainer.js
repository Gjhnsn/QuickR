import React from "react";
import { useDispatch } from "react-redux";
import { setQr } from "../../../redux/qrSlice";
import { QrLink, QrTitle, Container } from "./styles";
import IndividualLinks from "../IndividualLinks/IndividualLinks";

function LinksContainer({ folderItems, folderColor, folderName }) {
  const dispatch = useDispatch();
  const renderLinks = () => {
    return folderItems.map((link) => {
      return (
        <IndividualLinks
          onPress={() => dispatch(setQr(link.url))}
          key={link.id}
          link={link}
          folderColor={folderColor}
          isSelected={link.isSelected}
          folderName={folderName}
        />
      );
    });
  };

  return <Container>{renderLinks()}</Container>;
}

export default LinksContainer;
