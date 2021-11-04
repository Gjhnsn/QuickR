import React from "react";
import { View, Text } from "react-native";
import { ColorCell } from "./styles";

const ColorPicker = ({ setFolderColor, color }) => {
  return (
    <ColorCell onPress={() => setFolderColor(color)} color={color}></ColorCell>
  );
};

export default ColorPicker;
