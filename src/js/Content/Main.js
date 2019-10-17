import React from 'react';

import Footer from '../Footer';

import Portugal1 from '../../assets/img/hotel-1.jpg';
import Portugal2 from '../../assets/img/hotel-2.jpg';
import Portugal3 from '../../assets/img/hotel-3.jpg';
import Friend3 from '../../assets/img/user-3.jpg';
import Friend4 from '../../assets/img/user-4.jpg';
import Friend5 from '../../assets/img/user-5.jpg';
import Friend6 from '../../assets/img/user-6.jpg';
import JR from '../../assets/img/JuliaRoberts.jpg';
import MF from '../../assets/img/MeganFox.jpeg';

import IconArrow from '../../assets/svg-icons/SVG/chevron-thin-right.svg';
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

        <div className='detail'>
            <div className='detail__description'>
                <p className='paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi nisi dignissimos debitis ratione sapiente saepe.
                    Accusantium cumque, quas, ut corporis incidunt deserunt
                    quae architecto voluptate.Accusantium cumque, quas, ut
                    corporis incidunt deserunt quae architecto voluptate
                    delectus, inventore iure aliquid aliquam.
                </p>
                <p className='paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                </p>
                <ul className='list'>
                    <li className='list__item'><IconArrow className='list__icon' viewBox="0 0 40 1" /> Close to the beach</li>
                    <li className='list__item'><IconArrow className='list__icon' viewBox="0 0 40 1" />Breakfast included</li>
                    <li className='list__item'><IconArrow className='list__icon' viewBox="0 0 40 1" />Free airport shuttle</li>
                    <li className='list__item'><IconArrow className='list__icon' viewBox="0 0 40 1" />Free wi__fi in all rooms</li>
                    <li className='list__item'><IconArrow className='list__icon' viewBox="0 0 40 1" />Air conditioning and heating</li>
                    <li className='list__item'><IconArrow className='list__icon' viewBox="0 0 40 1" />Pets allowed</li>
                    <li className='list__item'><IconArrow className='list__icon' viewBox="0 0 40 1" />We speak all languages</li>
                    <li className='list__item'><IconArrow className='list__icon' viewBox="0 0 40 1" />Perfect for families</li>
                </ul>
                <div className='recommend'>
                    <p className='recommend__count'>Lucy and 3 other friends recommend this hotel</p>
                    <div className='recommend__friends'>
                        <img src={Friend3} alt='Friend 1' className='recommend__photo'></img>
                        <img src={Friend4} alt='Friend 2' className='recommend__photo'></img>
                        <img src={Friend5} alt='Friend 3' className='recommend__photo'></img>
                        <img src={Friend6} alt='Friend 4' className='recommend__photo'></img>
                    </div>
                </div>
            </div>
            <div className='detail__user-reviews'>
                <figure className='review'>
                    <blockquote className='review__text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </blockquote>
                    <figcaption className='review__user'>
                        <img src={JR} alt='User 1' className='review__photo'></img>
                        <div className='review__user-box'>
                            <p className='review__user-name'>Julia Roberts</p>
                            <p className='review__user-date'>Nov 16, 2019</p>
                        </div>
                        <div className='review__rating'>9.5</div>
                    </figcaption>
                </figure>

                <figure className='review'>
                    <blockquote className='review__text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </blockquote>
                    <figcaption className='review__user'>
                        <img src={MF} alt='User 1' className='review__photo'></img>
                        <div className='review__user-box'>
                            <p className='review__user-name'>Megan Fox</p>
                            <p className='review__user-date'>Set 29, 2019</p>
                        </div>
                        <div className='review__rating'>9.2</div>
                    </figcaption>
                </figure>
                <button className='btn-inline'> Show all
                <span>&rarr;</span></button>
            </div>
        </div>
        <Footer/>
    </main>
)

export default Main;