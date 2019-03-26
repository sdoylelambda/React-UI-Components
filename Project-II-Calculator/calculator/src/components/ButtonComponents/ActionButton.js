import React from 'react';
import './Button.css';

const actions = [ "clear", "*", "/","-","+","=" ];

const ActionButton = () => {
    return (
       <div className="actionButton">
            {actions.map(x => <div className="individualButtons">{x}</div>) }
       </div>
    )
}

export default ActionButton;

