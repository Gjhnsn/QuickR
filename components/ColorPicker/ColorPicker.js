import React from "react";
import { ColorPickerStyle } from "./styles";

const ColorPicker = ({ setFolderColor, color }) => {
  return (
    <ColorPickerStyle
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.75 : 1.0,
        },
      ]}
      onPress={() => {
        setFolderColor(color);
      }}
      color={color}
    ></ColorPickerStyle>
  );
};

export default ColorPicker;
