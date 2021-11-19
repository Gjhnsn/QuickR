import styled from "styled-components/native";

export const Blob = styled.View`
  height: 500px;
  width: 500px;
  top: 0;
  background-color: ${(props) => props.blobColor};
  position: absolute;
  margin-top: -175px;
  border-radius: 250px;
`;
