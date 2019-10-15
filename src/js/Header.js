import React from 'react';
import logo from '../assets/img/logo.png';
import IconMagGlass from '../assets/svg-icons/SVG/magnifying-glass.svg';
import IconBookmark from '../assets/svg-icons/SVG/bookmark.svg';
import IconChat from '../assets/svg-icons/SVG/chat.svg';
import User from '../assets/img/ok.png';


const Header = props => (
    <header className='header' id='header'>
        <img src={logo} alt='Main logo' className='logo'></img>
        <form action='#' className='search'>
            <input type='text' placeholder='Search hotels' className='search__input' />
            <button className='search__button'>
                <IconMagGlass
                    // viewBox="0 0 48 1"
                    className='search__icon'></IconMagGlass>
            </button>
        </form>

        <nav className='user-nav'>
            <div className='user-nav__icon-box'>
                <IconBookmark className='user-nav__icon'></IconBookmark>
                <span className='user-nav__notification'>3</span>
            </div>
            <div className='user-nav__icon-box'>
                <IconChat className='user-nav__icon'></IconChat>
                <span className='user-nav__notification'>9</span>
            </div>
            <div className='user-nav__user'>
                <img src={User} alt='Primary User' className='user-nav__user-photo'></img>
                <span className='user-nav__user-name'>Olavo</span>
            </div>
        </nav>
    </header>
)

export default Header;