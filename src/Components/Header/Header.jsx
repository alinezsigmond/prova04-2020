import React from 'react' 
import {Link} from 'react-router-dom'
import {HeaderStyle} from './style'
import Logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <HeaderStyle>
            <div className='content'>
                <Link to='/'><img src={Logo} alt='Chris Isaak logo' /></Link>
                <nav className='menu'>
                    <Link to='/bio'><ul className='item'>Bio</ul></Link>
                    <Link to='/shows'><ul className='item'>Shows</ul></Link>
                    <ul className='item'>Shop</ul>
                    <ul className='item'>Contact</ul>
                </nav>
            </div>
        </HeaderStyle>
    )
}