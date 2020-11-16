import styled from 'styled-components'

export const FooterStyle = styled.footer `
    background-color: #151515;
    width: 100%;
    height: 100px;
    padding-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: white;
    p {
        margin-block-start: 0.2em;
        margin-block-end: 0.1em;
    }
    a {
        margin-block-start: 0.2em;
        margin-block-end: 0.1em;
    }
`
export const Content = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const Contact = styled.div `
    font-size: 0.8rem;
    width: 10%;
    display: flex;
    flex-direction: column;
    text-align: right;
`
export const Socials = styled.div `
    width: 10%;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    img {
        margin-right: 5%;
    }
`