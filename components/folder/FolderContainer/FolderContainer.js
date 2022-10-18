import React, { useState } from 'react';
import IndividualFolder from '../IndividualFolder/IndividualFolder';
import { useSelector } from 'react-redux';
import {
  Container,
  PlaceHolderContainer,
  PlaceHolderTextWrapper,
  TextHeader,
  TextSubHeader,
  AddFolderButton,
  ButtonText,
} from './styles';
import NoFolderSvgPlaceholderComponent from '../../Svg/noFolderSvgPlaceholderComponent';

function FolderContainer({ navigation }) {
  const folderData = useSelector((state) => state.folder.allFolder);
  const [isEmpty, setIsEmpty] = useState(false);

  const renderPlaceHolder = () => {
    return (
      <PlaceHolderContainer>
        <NoFolderSvgPlaceholderComponent />
        <PlaceHolderTextWrapper>
          <TextHeader>No Folders Yet!</TextHeader>
          <TextSubHeader>Add a folder to get started</TextSubHeader>
        </PlaceHolderTextWrapper>
        <AddFolderButton onPress={() => navigation.navigate('AddFolderPage')}>
          <ButtonText>Add Folder</ButtonText>
        </AddFolderButton>
      </PlaceHolderContainer>
    );
  };

  const renderFolder = () => {
    const folderKeys = Object.keys(folderData).slice().reverse();

    if (folderKeys.length) {
      return folderKeys.map((folderName) => {
        return (
          <IndividualFolder
            folder={folderData[folderName]}
            key={folderName}
            folderName={folderName}
            navigation={navigation}
          />
        );
      });
    } else {
      return renderPlaceHolder();
    }
  };

  return (
    <Container isEmpty={isEmpty}>{folderData && renderFolder()}</Container>
  );
}

export default FolderContainer;
