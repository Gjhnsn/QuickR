import { View, Image, Pressable } from "react-native";
import React from "react";
import { NavigationContainer, LogoPlaceholder } from "./styles";
import addIcon from "../../assets/addIcon.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleNewItemModal } from "../../redux/modalSlice";
import { setFolderToEdit } from "../../redux/modalSlice";
import SvgComponent from "../Svg/svgComponent";

function TopBar() {
  const dispatch = useDispatch();

  const addButtonAction = () => {
    dispatch(toggleNewItemModal());
    dispatch(setFolderToEdit(null));
  };

  return (
    <NavigationContainer>
      <SvgComponent />
      <Pressable onPress={() => addButtonAction()}>
        <Image source={addIcon} />
      </Pressable>
    </NavigationContainer>
  );
}

export default TopBar;
