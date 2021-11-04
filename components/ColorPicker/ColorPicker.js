import React from "react";
import { View, Text } from "react-native";
import {
  Red,
  Orange,
  Yellow,
  Green,
  LightBlue,
  Blue,
  Indigo,
  Pink,
  Purple,
  Lime,
  Teal,
  Sea,
  ColorGrid,
  ColorGridRow,
  ColorCell,
} from "./styles";

const ColorPicker = ({ setFolderColor, color }) => {
  // const handleSelectedColor = (color) => {
  //   setFolderColor(color);
  //   console.log("pressed ");
  // };

  // const approvedColors = [
  //   `#FF453A`,
  //   `#FF9F0A`,
  //   `#FFD60A`,
  //   `#32d74b`,
  //   `#64D2FF`,
  //   `#0A84FF`,
  //   `#5E5CE6`,
  //   `#F490B0`,
  //   `#CEDC3A`,
  //   `#009688`,
  //   `#4AB6AB`,
  //   `#009688`,
  //   `#044688`,
  //   `#BF5AF2`,
  // ];

  return (
    <ColorCell color={color}></ColorCell>
    // <ColorGrid>
    //   <ColorGridRow>
    //     <Red
    //       onPress={() => handleSelectedColor(`#FF453A`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Orange
    //       onPress={() => handleSelectedColor(`#FF9F0A`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Yellow
    //       onPress={() => handleSelectedColor(`#FFD60A`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Green
    //       onPress={() => handleSelectedColor(`#32d74b`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <LightBlue
    //       onPress={() => handleSelectedColor(`#64D2FF`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Blue
    //       onPress={() => handleSelectedColor(`#0A84FF`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Indigo
    //       onPress={() => handleSelectedColor(`#5E5CE6`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //   </ColorGridRow>
    //   <ColorGridRow>
    //     <Pink
    //       onPress={() => handleSelectedColor(`#F490B0`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Lime
    //       onPress={() => handleSelectedColor(`#CEDC3A`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Teal
    //       onPress={() => handleSelectedColor(`#009688`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Sea
    //       onPress={() => handleSelectedColor(`#4AB6AB`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Teal
    //       onPress={() => handleSelectedColor(`#009688`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Teal
    //       onPress={() => handleSelectedColor(`#044688`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //     <Purple
    //       onPress={() => handleSelectedColor(`#BF5AF2`)}
    //       style={({ pressed }) => [
    //         {
    //           borderColor: pressed ? "white" : "rgba(255, 255, 255, 0)",
    //         },
    //       ]}
    //     />
    //   </ColorGridRow>
    // </ColorGrid>
  );
};

export default ColorPicker;
