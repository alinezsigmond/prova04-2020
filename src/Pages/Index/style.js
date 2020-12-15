import styled from 'styled-components'
import bg from '../../assets/images/bg.png'
import Brotherline from '../../assets/fonts/Brotherline.ttf'

export const Container = styled.div `
    background-color: #000;
    background-image: url(${bg});
    background-attachment: fixed;
    background-position: left top;
    background-repeat: no-repeat;
    @font-face {
        font-family: 'Brotherline';
        src: url(${Brotherline})
    }
    .content {
        padding-top: 5%;
        background-color: rgba(0, 0, 0, 0.3);
        background-position: static;
        width: 100%;
        height: 100%;
        padding-bottom: 5%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        color: #FFF;
    }
    h1 {
        font-family: 'Brotherline';
        font-size: 5rem;
    }
    Button {
        margin: auto;
        background-color: #1ed760;
        display: flex;
        align-self: center;
        :hover {
            background-color: #1db954;
        }
    }
`