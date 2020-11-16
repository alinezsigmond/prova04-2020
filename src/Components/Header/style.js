import styled from 'styled-components'
import Vintages from '../../assets/fonts/Vintages.ttf'

export const HeaderStyle = styled.header `
    background-color: #000;
    width: 100%;
    @font-face {
        font-family: 'Vintages';
        src: url(${Vintages});
    }

    .content {
        padding-top: 1%;
        padding-bottom: 1%;
        margin-left: auto;
        margin-right: auto;
        max-width: 1002px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .menu {
        font-family: 'Vintages';
        font-size: 2rem;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`