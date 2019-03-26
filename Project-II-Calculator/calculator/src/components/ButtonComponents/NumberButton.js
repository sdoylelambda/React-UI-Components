import React from 'react';
import './Button.css';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberButton = () => {
    return (
    <div className="numberButton">
        {numbers.map(x => x) }
    </div>
    )
}

export default NumberButton;

// displays 0 1 2 3 4 5 6 7 8 9 