import React from 'react';
import TitleLink from '../../components/title-des-link/title-des-link.js'
import './fresh-beans.scss';


const title1 = {
    name: "FRESH BEANS",
    descrip: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    link: "LEARN MORE"
}

const title2 = {
    name: "GREAT COFFEE",
    descrip: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    link: "LEARN MORE"
}

const Fresh = () => {
    return (
        <div className="container-sec-4">
            <div className="fresh-sec">
                <div className="title">
                    <TitleLink name={title1.name} descrip={title1.descrip} link={title1.link}></TitleLink>
                </div>
                <div className="image-1"></div>
            </div>
            <div className="great-sec">
                <TitleLink name={title2.name} descrip={title2.descrip} link={title2.link}></TitleLink>
            </div>
        </div>
    );
};



export default Fresh;