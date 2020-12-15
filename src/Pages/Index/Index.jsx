import React from 'react'
import { useState } from 'react'
import SpotifyPlayer from 'react-spotify-player'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Table from '../../Components/Table/Table'
import { Container } from '../Index/style'
import listAlbums from '../../data/albums.json'
import Button from '@material-ui/core/Button';

export default function Index() {
    const [albums] = useState(listAlbums);
    const [play, setPlay ] = useState(false);
    const size = {
        width: '40%',
        height: 540,
    };
    function handleClick(e) {
        setPlay(!play);
    }
    return (
        <>
            <Header />
            <Container>
                <div className='content'>
                    <h1>Listen now on Spotify?</h1>
                    <Button onClick={handleClick} variant="contained" >
                        {play ? 'Nah, thanks' : 'Yes, baby!'}
                    </Button>
                    {play ? <SpotifyPlayer className='spotify'
                        uri="spotify:playlist:37i9dQZF1DZ06evO49Xies"
                        size={size}
                        view='list'
                        theme='black'
                        /> : '' }
                    <br /><br /><br />
                    
                    <h1>Releases</h1>
                    <Table albums={albums} />
                </div>
            </Container>
            <Footer />
        </>
    )
}