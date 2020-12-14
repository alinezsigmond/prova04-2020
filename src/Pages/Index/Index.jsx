import React from 'react'
import { useState } from 'react'
import SpotifyPlayer from 'react-spotify-player'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Table from '../../Components/Table/Table'
import { Container } from './style'
import listAlbums from '../../data/albums.json'

export default function Index() {
    const [albums, setAlbums] = useState(listAlbums);
    const size = {
        width: '40%',
        height: 540,
      };
    console.log(listAlbums[4])
    return (
        <>
            <Header />
            <Container>
                <div className='content'>
                    <h1>Releases</h1>
                    <Table albums={albums} />
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