import { View, Image, Pressable} from 'react-native';
import React from 'react';
import { NavigationContainer, LogoPlaceholder } from './styles';
import addIcon from '../../assets/addIcon.png';

function TopBar({setOpenModal}) {

    return (
        <NavigationContainer>
            <LogoPlaceholder/>
            <Pressable onPress={() => setOpenModal(true)}>
            <Image source={addIcon}/>
            </Pressable>
        </NavigationContainer>
    )
}

export default TopBar;
