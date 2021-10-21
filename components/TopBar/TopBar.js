import { View, Image} from 'react-native';
import React from 'react';
import { NavigationContainer } from './styles';
import QuickRLogo from '../../assets/logo.svg';

function TopBar() {
    return (
        <NavigationContainer>
            {/* <Image source={require(QuickRLogo)}/> */}
        </NavigationContainer>
    )
}

export default TopBar;
