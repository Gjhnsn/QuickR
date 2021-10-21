import styled from "styled-components/native";
import { windowWidth } from "../../utils/windowDimensions";

export const Input = styled.TextInput`
  width: 80%;
  height: 35;
  background-color: white;
  margin-top: 20px;
`;

export const InputModal = styled.View`
  width: ${windowWidth};
  height: 300px;
  background-color: #333;
  align-items: center;
`;
