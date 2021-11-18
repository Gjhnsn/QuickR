import { Pressable } from "react-native";
import React from "react";
import { NavigationContainer, LogoPlaceholder } from "./styles";
import { useDispatch } from "react-redux";
import { toggleNewItemModal } from "../../redux/modalSlice";
import { setFolderToEdit } from "../../redux/modalSlice";
import SvgComponent from "../Svg/svgComponent";
import { AntDesign } from "@expo/vector-icons";

function TopBar() {
  const dispatch = useDispatch();

  const addButtonAction = () => {
    dispatch(toggleNewItemModal());
    dispatch(setFolderToEdit(null));
  };

  return (
    <NavigationContainer>
      <SvgComponent />
      <Pressable onPress={() => addButtonAction()} hitslop={10}>
        <AntDesign name="plussquareo" size={45} color="white" />
      </Pressable>
    </NavigationContainer>
  );
}

export default TopBar;
