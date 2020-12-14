import styled from 'styled-components'
import bg from '../../assets/images/shows-bg.jpg'
import Brotherline from '../../assets/fonts/Brotherline.ttf'

export const ContentStyle = styled.div `
    background-image: url(${bg});
    background-position: left bottom;
    background-repeat: no-repeat;
    background-color: #020106;
    height: 920px;
    color: white;
    @font-face {
        font-family: 'Brotherline';
        src: url(${Brotherline})
    }
    h1 {
        font-family: 'Brotherline';
        font-size: 4.3rem;
    }
`
export const Forms = styled.div `
    width: 35%;
    margin-left: 52%;
    padding-top: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-self: flex-end;
    /* background-color: lime; */
    h1 {
        margin-left: -3.3%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
    h2 {
        font-size: 1rem;
        margin-top: -9%;
    }
    label {
        font-size: 1.1rem;
    }
    .text {
        height: 25px;
        width: 250px;
    }
`