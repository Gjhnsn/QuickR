import styled from "styled-components/native";
import { SafeAreaView} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { windowWidth } from "../../utils/windowDimensions";

export const Container = styled.SafeAreaView`
flex: 1;
margin-top: ${StatusBar.currentHeight || 0};
padding: 10px;
align-items: center;
width: ${windowWidth};
z-index: 20;
`;