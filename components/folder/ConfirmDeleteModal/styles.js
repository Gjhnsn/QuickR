import styled from "styled-components";
import { windowHeight } from "../../../utils/windowDimensions";

export const DeleteModalWrapper = styled.View`
  background-color: black;
  width: 60%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    border-radius: 10px;
`;

export const TitleWrapper = styled.View`
    padding: 15px;
`;

export const DeleteModalTitle = styled.Text`
  color: white;
  text-align: center;
`;

export const SubTextWrapper = styled.View`
    text-align:center;
`;

export const SubText = styled.Text`
    color: white;
`;

export const ButtonAreaWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    padding: 15px;
    border: 1px solid rgba(255,255,255,.7)
    border-radius: 10px;
`;

export const ButtonContainer = styled.Pressable`
    width: 50%;
`;

export const ButtonText = styled.Text`
    color: white;
    text-align: center;
`;