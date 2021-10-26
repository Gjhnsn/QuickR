import { View, Image, Pressable} from 'react-native';
import React from 'react';
import { NavigationContainer, LogoPlaceholder } from './styles';
import addIcon from '../../assets/addIcon.png';
import { useSelector, useDispatch } from 'react-redux';
import {toggleNewItemModal} from '../../redux/modalSlice';

function TopBar() {
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);
    const dispatch = useDispatch()

    return (
        <NavigationContainer>
            <LogoPlaceholder/>
            <Pressable onPress={() => {dispatch(toggleNewItemModal())}}>
            <Image source={addIcon}/>
            </Pressable>
        </NavigationContainer>
    )
}

export default TopBar;
