import { View, Image} from 'react-native';
import React from 'react';
import { NavigationContainer, LogoPlaceholder } from './styles';
import addIcon from '../../assets/addIcon.png';

function TopBar() {

    return (
        <NavigationContainer>
            <LogoPlaceholder/>
            <Image source={addIcon}/>
        </NavigationContainer>
    )
}

export default TopBar;
