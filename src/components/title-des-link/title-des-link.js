import React from 'react';

const TitleLink = props => {
    return (
        <div className={`titlelink ${props.className}`}>
            <h2>{props.name}</h2>
            <p>{props.descrip}</p>
            <a>{props.link}</a>
        </div>
    )
}

export default TitleLink;