import React from 'react';
import './title.scss';

const Title = props => {
    return (
        <div className={`title ${props.className}`}>
            <h2>{props.name}</h2>
            <p>{props.descrip}</p>
        </div>
    )
}

export default Title;