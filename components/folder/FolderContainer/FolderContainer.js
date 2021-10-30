import React from 'react';
import IndividualFolder from '../IndividualFolder/IndividualFolder';
import { useSelector } from 'react-redux';
import {Container} from './styles'

function FolderContainer() {
    const folderData = useSelector((state) => state.folder.allFolder);
    console.log('folderData ', folderData);

    const renderFolder = () => {
        const folderKeys = Object.keys(folderData);
        return (
            folderKeys.map((folderName) => {
                return <IndividualFolder folder={folderData[folderName]} key={folderName} folderName={folderName}/>
            })
        )
    }

    return (
        <Container>
            {folderData && renderFolder()}
        </Container>
    )
}

export default FolderContainer
