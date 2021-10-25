import { Text } from 'react-native';
import React, {useState} from 'react';
import { LinkContainer, LinkText, LinkChosen } from './styles';
import { useDispatch } from 'react-redux'
import { activeLink } from '../../../redux/folderSlice'


function IndividualLinks({ link, folderColor, isSelected, folderName }) {
    const dispatch = useDispatch()

    return (
        <LinkContainer onPress={() => dispatch(activeLink({currentFolder: folderName, currentLink: link }))}>
            <LinkText>{link.name}</LinkText>
            <LinkChosen isSelected={isSelected} folderColor={folderColor}></LinkChosen>
        </LinkContainer>
    )
}

export default IndividualLinks;
