import React from 'react';

const Icon = props => {
    return (
        <div className={`icon ${props.className}`}>
            <img src={props.image}></img>
            <h4>{props.name}</h4>
        </div>
    )
}

export default Icon;