import React from 'react';

const Footer = props => (
    <div className='cta'>
        <h2 className='cta__book-now'>
            Good news! We have 4 free rooms for yours selected dates!
        </h2>
        <button className='btn'>
            <span className='btn__visible'>Book now</span>
            <span className='btn__invisible'>Only four rooms left.</span>
            
        </button>

    </div>
)

export default Footer;