import React from 'react'
import {FooterStyle} from './style'
import {Content} from './style'
import {Socials} from './style'
import {Contact} from './style'

import Facebook from '../../assets/images/Facebook.svg'
import Instagram from '../../assets/images/Instagram.svg'
import Twitter from '../../assets/images/Twitter.svg'

export default function Footer() {
    return (
        <FooterStyle>
            <Content>
                <Socials>
                    <a href='https://www.facebook.com/chrisisaak' target='_blank' rel="noreferrer"><img src={Facebook} alt='Facebook' />Facebook</a>
                    <a href='https://www.instagram.com/chrisisaak/' target='_blank' rel="noreferrer"><img src={Instagram} alt='Facebook' />Instragram</a>
                    <a href='https://twitter.com/ChrisIsaak' target='_blank' rel="noreferrer"><img src={Twitter} alt='Facebook' />Twitter</a>                
                </Socials>
                <Contact>
                    <p>Aline Zsigmond</p>
                    <p>+55 45 999 155 581</p>
                    <p>alinezsigmond@hotmail.com</p>
                </Contact>
            </Content>
        </FooterStyle>
    )
}