import styled from "styled-components/native";

export const LinkContainer = styled.Pressable`
    width: 100%;
    height: 55px;
    background-color: green;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 27px;
`;

export const LinkText = styled.Text`
    color: #fff;
    font-size: 16px; 
`;

export const LinkChosen = styled.View`
    width: 12px;
    height: 12px;
    background-color: ${(props) => (props.isSelected ? props.folderColor : `transparent`)};
    border-radius: 6px;
`;

