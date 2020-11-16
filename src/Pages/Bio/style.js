import styled from 'styled-components'
import bg from '../../assets/images/biobg.png'

export const BioBG = styled.div `
    background-color: #c6c6c6;
    background-image: url(${bg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    width: 100%;
    height: 900px;
    display: flex;

`
export const Content = styled.div `
    background-color: rgba(255, 255, 255, 0.6);
    max-width: 40%;
    height: fit-content;
    margin: 3% 15%;
    padding: 1% 2% 2% 2%;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.1rem;
    p {
        margin-block-start: 0.1em;
        margin-block-end: 0.5em;
    }
`