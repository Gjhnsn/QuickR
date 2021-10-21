import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

export const Container = styled.View`
flex: 1;
margin-top: ${StatusBar.currentHeight || 0};
justify-content: center;
align-items: center;
background-color: #fff;
margin-top: 30px;
padding: 10px;
width: 100%;
`