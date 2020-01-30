import React from 'react';
import Title from '../../components/tittle-descrip/title.js'
import './our-history.scss';


const title = {
    name: "OUR HISTORY",
    descrip: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
}

const History = props => {
    return (
        <div className="sec-3-bg">
            <div className="tittle-2">
                <Title name={title.name} descrip={title.descrip}></Title>
            </div>
        </div>
    );
};

export default History;