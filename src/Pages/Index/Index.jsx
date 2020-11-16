import React from 'react'
import SpotifyPlayer from 'react-spotify-player'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Container } from './style'

export default function Index() {
    const size = {
        width: '40%',
        height: 540,
      };
    return (
        <>
            <Header />
            <Container>
                <div className='content'>
                    <h1>Listen now on Spotify</h1>
                    <SpotifyPlayer
                        uri="spotify:playlist:37i9dQZF1DZ06evO49Xies"
                        size={size}
                        view='list'
                        theme='black'
                        />
                </div>
            </Container>
            <Footer />
        </>
    )
}