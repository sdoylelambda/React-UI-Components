import React from 'react';
import './Card.css';

import CardContent from './CardContent';
import CardBanner from './CardBanner';
import CardImageThumbnail from './CardImageThumbnail';

const CardContainer = () => {
    return (
        <div className="cardContainer">
            <CardImageThumbnail />
            <CardContent />
            <CardBanner />
         
        
        </div>
    )
}

export default CardContainer;