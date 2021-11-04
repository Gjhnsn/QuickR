import styled from "styled-components/native";

export const ColorCell = styled.Pressable`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  flex: 1;
`;
