import React from 'react';
import logo from '../assets/img/logo.png';
import MagGlassIcon from '../assets/svg-icons/SVG/magnifying-glass.svg'


const Header = props => (
    <header className='header'>
        Header Part
        <img src={logo} alt='Main logo' className='logo'></img>
        <form action='#' className='search'>
            <input type='text' placeholder='Search hotels' className='search__input'/>
            <button className='search__button'>
                <svg className='search__icon'>
                    <MagGlassIcon></MagGlassIcon>
                    <use xlinkHref='../assets/svg-icons/sprite.svg#magnifying-glass.svg'/>
                </svg>
            </button>
        </form>
    </header>
)

export default Header;