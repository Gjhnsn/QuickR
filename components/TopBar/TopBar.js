import { View, Image, Pressable } from "react-native";
import React from "react";
import { NavigationContainer, LogoPlaceholder } from "./styles";
import addIcon from "../../assets/addIcon.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleNewItemModal } from "../../redux/modalSlice";
import { setFolderToEdit } from "../../redux/modalSlice";
import LogoSvgComponent from "../Svg/logoSvgComponent";

function TopBar() {
  const dispatch = useDispatch();

  const addButtonAction = () => {
    dispatch(toggleNewItemModal());
    dispatch(setFolderToEdit(null));
  };

  return (
    <NavigationContainer>
      <LogoSvgComponent />
      <Pressable onPress={() => addButtonAction()} hitslop={10}>
        <Image source={addIcon} />
      </Pressable>
    </NavigationContainer>
  );
}

export default TopBar;
