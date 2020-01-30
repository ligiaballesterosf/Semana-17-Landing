import React from 'react';
import './coffee-types.scss';
import Card from '../../components/card/card.js'
import Title from '../../components/tittle-descrip/title.js'
import coffee_item_1 from '../../img/coffee_item_1.png';
import coffee_item_2 from '../../img/coffee_item_2.png';
import coffee_item_3 from '../../img/coffee_item_3.png';


const content = [{
    title: 'MOCHA LATE',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    image: coffee_item_2
},
{
    title: 'POUR OVER',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    image: coffee_item_1
},
{
    title: 'ESPRESO',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    image: coffee_item_3
}]

const title = {
    name: "WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE",
    descrip: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
}

const CoffeeTypes = (props) => {
    return (
        <div>
            <div className="section-2-bg">
                <div className="tittle-2">
                    <Title name={title.name} descrip={title.descrip}></Title>
                </div>
                <div className="card-sec-2">
                    {content.map(card =>
                        <Card className='clase' {...card}></Card>
                    )}
                </div>
                <div><a>FULL MENU</a></div>
            </div>
        </div>
    )
}

export default CoffeeTypes;