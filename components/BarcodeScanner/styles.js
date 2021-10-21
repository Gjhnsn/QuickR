import styled from "styled-components/native"
import { windowHeight, windowWidth } from "../../utils/windowDimensions";

// STYLED COMPONENT 
export const Screen = styled.View` 
    flex: 1;
    width: ${windowWidth};
`;

// OBJECT
export const CameraScreen = {
    flex: '1',
};

// STYLED COMPONENT 
export const CameraContainer = styled.View`
    background-color: transparent;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 15px;
    padding: 15px;
    width: ${windowWidth};
    height: ${windowHeight};  
    height: 75px;
`;