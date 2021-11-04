import styled from "styled-components/native";

export const ColorPickerStyle = styled.Pressable`
  width: 14.2%;
  height: 50px;
  background-color: ${(props) => props.color};
`;
