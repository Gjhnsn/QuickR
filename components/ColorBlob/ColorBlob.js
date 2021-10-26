import React from 'react';
import { Blob } from './styles';
import {useSelector} from 'react-redux'

function ColorBlob() {
    const folderData = useSelector((state) => state.folder.allFolder) 

    return (
        <Blob>

        </Blob>
    )
}

export default ColorBlob
