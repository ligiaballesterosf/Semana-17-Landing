import React from 'react';
import './card.scss';

const Card = props => {
    return (
        <div className={`card ${props.className}`}>
            <img src={props.image}></img>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;