import styled from 'styled-components'
import Brotherline from '../../assets/fonts/Brotherline.ttf'
import bg from '../../assets/images/404bg.png'

export const Style404 = styled.div `
    background-image: url(${bg});
    background-position: bottom right;
    background-repeat: no-repeat;
    width: 100%;
    height: 800px;
    display: flex;
`
export const Content = styled.div `
    height: 460px;
    margin: 1% 15%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @font-face {
        font-family: 'Brotherline';
        src: url(${Brotherline})
    }
    h1 {
        font-family: 'Brotherline';
        font-size: 6.5rem;
        margin-block-start: 0.2em;
        margin-block-end: 0.1em;
    }
    p {
        font-size: 1.4rem;
    }
`