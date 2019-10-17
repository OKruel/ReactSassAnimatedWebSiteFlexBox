import React from 'react';

import IconHome from '../../assets/svg-icons/SVG/home.svg';
import IconFlight from '../../assets/svg-icons/SVG/aircraft-take-off.svg';
import IconCar from '../../assets/svg-icons/SVG/key.svg';
import IconTours from '../../assets/svg-icons/SVG/map.svg';

const Navigation = props => (
    <nav className='sidebar'>
        <ul className='side-nav'>
            <li className='side-nav__item side-nav__item--active'>
                <a href='#header' className='side-nav__link'>
                    <IconHome className='side-nav__icon'></IconHome>
                    <span>Hotel</span>
                </a>
            </li>
            <li className='side-nav__item'>
                <a href='#header' className='side-nav__link'>
                    <IconFlight className='side-nav__icon' ></IconFlight>
                    <span>Flight</span>
                </a>
            </li>
            <li className='side-nav__item'>
                <a href='#header' className='side-nav__link'>
                    <IconCar className='side-nav__icon'></IconCar>
                    <span>Car Rental</span>
                </a>
            </li>
            <li className='side-nav__item'>
                <a href='#header' className='side-nav__link'>
                    <IconTours className='side-nav__icon'></IconTours>
                    <span>Tours</span>
                </a>
            </li>
        </ul>
        <div className='legal'>
            &copy; 2019 by Trillo. All rights reserved.
        </div>
    </nav>
)

export default Navigation;