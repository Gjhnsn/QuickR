import React from "react";
import { LinkContainer, LinkText, LinkChosen } from "./styles";
import { useDispatch } from "react-redux";
import { activeLink } from "../../../redux/folderSlice";
import { setQr } from "../../../redux/qrSlice";

function IndividualLinks({ link, folderColor, isSelected, folderName }) {
  const dispatch = useDispatch();
  const setSelectedLinkInfo = () => {
    dispatch(activeLink({ currentFolder: folderName, currentLink: link }));
    dispatch(setQr({urlName: link.name, url: link.url, description: link.description}));
  };

  return (
    <LinkContainer
      onPress={() => {
        setSelectedLinkInfo();
      }}
    >
      <LinkText>{link.name}</LinkText>
      <LinkChosen
        isSelected={isSelected}
        folderColor={folderColor}
      ></LinkChosen>
    </LinkContainer>
  );
}

export default IndividualLinks;
