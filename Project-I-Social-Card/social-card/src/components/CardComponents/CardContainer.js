import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
    return (
        <div className='cardContain'>
        <a href='https://www.reactjs.org'>
        <div className='Banner'>
        <CardBanner />
        </div>
        <div className='bottom'>
        <CardContent />
        </div>
        </a>
        </div>
    )
}

export default CardContainer;