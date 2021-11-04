import React from "react";
import { ColorCell } from "./styles";

const ColorPicker = ({ setFolderColor, color }) => {
  return (
    <ColorCell
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.75 : 1.0,
        },
      ]}
      onPress={() => {
        setFolderColor(color);
      }}
      color={color}
    ></ColorCell>
  );
};

export default ColorPicker;
