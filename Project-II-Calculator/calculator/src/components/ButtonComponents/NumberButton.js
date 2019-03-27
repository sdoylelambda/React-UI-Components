import React from 'react';
import './Button.css';

import IndividualButton from './IndividualButton';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

function NumberButton(props) {
    return (

    <div className="numberButton">
        {numbers.map((x, index) => <IndividualButton IndButton={x}></IndividualButton> )}
    </div>
    )
}

export default NumberButton;

