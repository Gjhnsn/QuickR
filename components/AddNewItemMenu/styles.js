import styled from "styled-components/native";
import { windowHeight, windowWidth } from "../../utils/windowDimensions";


export const ModalOverlay = styled.View`
    display: flex;
    z-index: 100;
    opacity: 0.5;
    height: ${windowHeight};
    width: ${windowWidth};
    position: absolute;
`;

export const ModalButtonContainer = styled.View`
    margin-top: 50px;
    z-index: 105;
    background-color: rgb(54,54,54);
    width: 280px;
    height: 160px;
    align-self: flex-end;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
`;

export const GradientBackground = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 100%;
    height: 100%;
    z-index: 100;
    overflow: hidden;
`


export const CloseContainer = styled.View`
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;
    margin-top: 15px;
`

export const CloserOverlay = styled.Pressable`
    width: 100%;
    height: 100%;
    position: absolute;
`

export const AddFolderContainer = styled.Pressable`
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 32px;
    margin-bottom: 10px;
`;

export const AddQrContainer = styled.Pressable`
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 32px;
`;

export const AddFolderText = styled.Text`
    color: #fff;
    font-size: 18px;
    margin-left: 16px;
    font-family: OpenSans_700Bold;
`;

export const AddQrText = styled.Text`
    color: #fff;
    font-size: 18px;
    margin-left: 16px;
    font-family: OpenSans_700Bold;
`;



