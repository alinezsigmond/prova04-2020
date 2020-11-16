import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import {BioBG} from './style'
import {Content} from './style'

export default function Bio() {
    return (
        <>
            <Header />
            <BioBG>
                <Content>
                    <p>In the course of Chris Isaak's career, he has released nine extraordinary albums, twelve singles, been nominated for two Grammy awards, acted in several motion pictures and starred in his own critically acclaimed TV series. His legendary shows with his longtime band Silvertone have entertained tens of thousands of people for over two decades. Even his hair has its own fan club. And yet, this highly praised herald platinum-selling artist has never released a greatest hits album.</p>
                    <p>Hard to believe, no? Well, unlike some artists who roll out a greatest hits package after, say, their second album, Isaak waited until he actually had enough hits to legitimately describe the collection as such.</p>
                    <p>"Shouldn't a greatest hits collection after two records be called 'Greatest Hit'?" Isaak asks. "I guess I've just always been too busy making records. Plus, it takes a while before you really want to compile everything. But after going through all the songs to make the Best Of, I feel like we have good stuff."</p>
                    <p>Good stuff. That's typical Isaak self-deprecation- it's much more than good stuff. Best Of Chris Isaak-the CD and accompanying DVD, which features 18 video clips by such esteemed directors as Gus Van Sant, Bruce Weber, Herb Ritts, Mary Lambert and Jean-Baptiste Mondino-take listeners on a gratifying musical journey through the Stockton, Calif., native's two-decade career, showcasing his stellar songwriting; smooth, dusky baritone (and tender falsetto that will alert your dog); and effortless brand of stylish retro-cool.</p>
                </Content>
            </BioBG>
            <Footer />
        </>
    )
}