import styled from "styled-components/native";
import { windowHeight, windowWidth } from "../../utils/windowDimensions";
import { Dimensions } from 'react-native';



export const ModalOverlay = styled.Pressable`
    display: flex;
    z-index: 100;
    background-color: #111;
    opacity: .8;
    height: ${windowHeight};
    width: ${windowWidth};
    position: absolute;
    justify-content: center;
`;

export const CloserOverlay = styled.Pressable`
    width: 100%;
    height: 100%;
    position: absolute;
`

export const ModalButtonContainer = styled.View`
    margin-top: ${Dimensions.get("window").height / 2.75}px;
    z-index: 105;
    background-color: rgb(54,54,54);
    width: 280px;
    height: 160px;
    border-radius: 10px;
    align-self: center;
`;

export const GradientBackground = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
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

export const AddFolderContainer = styled.View`
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 32px;
    margin-bottom: 10px;
`;

export const AddQrContainer = styled.View`
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
`;

export const AddQrText = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const FolderImage = styled.Image`
    margin-right: 16px;
`

export const QrImage = styled.Image`
    margin-right: 16px;
`



