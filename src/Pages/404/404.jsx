import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import {Style404} from './style'
import { Content } from './style'

export default function NotFound() {
    return (
        <>
            <Header />
                <Style404>
                    <Content>
                        <h1>Page not found</h1>
                        <p>Something went wrong. I'm sorry, but I think it's your fault.<br />Please go back to the main page.</p>
                    </Content>
                </ Style404>
            <Footer />
        </>
    )
}