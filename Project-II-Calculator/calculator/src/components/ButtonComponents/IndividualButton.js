import React from 'react';




function IndividualButton(props) {

    let buttonClass = 'IndividualButton';

  if (props.buttonIsZero)
    buttonClass += ' full-width'

  
    return (

    <div className={buttonClass}>{props.IndButton}</div>
)
}

export default IndividualButton;