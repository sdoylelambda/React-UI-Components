import React from 'react';
import './Button.css';

const actions = [ "clear", "*", "/","-","+","=" ];

const ActionButton = () => {
    return (
       <div className="actionButton">
            {actions.map(x => x) }
           

       </div>
    )
}

export default ActionButton;

