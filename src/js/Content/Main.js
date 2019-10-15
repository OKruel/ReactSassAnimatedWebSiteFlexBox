import React from 'react';

import Portugal1 from '../../assets/img/hotel-1.jpg';
import Portugal2 from '../../assets/img/hotel-2.jpg';
import Portugal3 from '../../assets/img/hotel-3.jpg';
import IconStart from '../../assets/svg-icons/SVG/star.svg';
import IconLocation from '../../assets/svg-icons/SVG/location-pin.svg';

const Main = props => (
    <main className='hotel-view'>
        <div className='gallery'>
            <figure className='gallery__item'>
                <img src={Portugal1} alt='portugal' className='gallery__photo'></img>
            </figure>
            <figure className='gallery__item'>
                <img src={Portugal2} alt='portugal1' className='gallery__photo'></img>
            </figure>
            <figure className='gallery__item'>
                <img src={Portugal3} alt='portugal2' className='gallery__photo'></img>
            </figure>
        </div>

        <div className='overview'>
            <h1 className='overview__heading'>Hotel Las Palmas</h1>
            <div className='overview__stars'>
                <IconStart className='overview__icon-star' />
                <IconStart className='overview__icon-star' />
                <IconStart className='overview__icon-star' />
                <IconStart className='overview__icon-star' />
                <IconStart className='overview__icon-star' />
            </div>
            <div className='overview__location'>
                <IconLocation className='overview__icon-location' />
                <button className='btn-inline'>Albufeira, Portugal</button>
            </div>
            <div className='overview__rating'>
                <div className='overview__rating--average'>9.3</div>
                <div className='overview__rating--count'>369 votes</div>
            </div>
        </div>
    </main>
)

export default Main;