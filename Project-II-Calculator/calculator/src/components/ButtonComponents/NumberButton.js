import React from 'react';
import './Button.css';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const NumberButton = () => {
    return (
    <div className="numberButton">
        {numbers.map(x => <div className="individualNumbers">{x}</div>) }
    </div>
    )
}

export default NumberButton;

