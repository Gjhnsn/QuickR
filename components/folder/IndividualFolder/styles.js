import styled from 'styled-components'
import {windowWidth} from '../../../utils/windowDimensions'

export const FolderContainer = styled.View`
    height: 70px;    
    width: ${windowWidth};
    background-color: grey;
    justify-content: center;
    border: 1px solid white;
`

export const FolderTitle = styled.Text`
    font-size: 18px;
    margin-left: 65px;
`   