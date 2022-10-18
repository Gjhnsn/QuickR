import React from 'react';
import { Container } from './styles';
import IndividualLinks from '../IndividualLinks/IndividualLinks';

function LinksContainer({ folderItems, folderColor, folderName }) {
  const renderLinks = () => {
    return folderItems.map((link) => {
      return (
        <IndividualLinks
          key={link.id}
          link={link}
          folderColor={folderColor}
          isSelected={link.isSelected}
          folderName={folderName}
        />
      );
    });
  };

  return <Container>{renderLinks()}</Container>;
}

export default LinksContainer;
