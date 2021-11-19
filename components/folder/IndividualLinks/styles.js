import styled from "styled-components/native";

export const LinkContainer = styled.Pressable`
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 27px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255, 255, 255, 0.1);
`;

export const LinkText = styled.Text`
    color: #fff;
    font-size: 16px; 
    font-family: OpenSans_400Regular;
`;

export const LinkChosen = styled.View`
    width: 12px;
    height: 12px;
    background-color: ${(props) => (props.isSelected ? props.folderColor : `transparent`)};
    border-radius: 6px;
`;

