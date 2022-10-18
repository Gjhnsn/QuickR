import { Pressable } from 'react-native';
import React from 'react';
import { NavigationContainer } from './styles';
import { useDispatch } from 'react-redux';
import { toggleNewItemModal } from '../../redux/modalSlice';
import { setFolderToEdit } from '../../redux/modalSlice';
import { AntDesign } from '@expo/vector-icons';
import LogoSvgComponent from '../Svg/logoSvgComponent';

function TopBar() {
  const dispatch = useDispatch();

  const addButtonAction = () => {
    dispatch(toggleNewItemModal());
    dispatch(setFolderToEdit(null));
  };

  return (
    <NavigationContainer>
      <LogoSvgComponent />
      <Pressable onPress={() => addButtonAction()} hitslop={10}>
        <AntDesign name="plussquareo" size={45} color="white" />
      </Pressable>
    </NavigationContainer>
  );
}

export default TopBar;
