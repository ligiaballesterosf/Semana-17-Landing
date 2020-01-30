import React from 'react';
import Icon from '../../components/icons-title/icon.js';
import './coffee-shop.scss';
import icon1 from '../../img/icon_1.png';
import icon2 from '../../img/icon_2.png';
import icon3 from '../../img/icon_3.png';
import Img1 from '../../img/gallery_coffee_image_1.jpg'
import Img2 from '../../img/gallery_coffee_image_2_1.jpg'
import Img3 from '../../img/gallery_coffee_image_5.jpg'


const icons = [{
    image: icon1,
    name: "BEST BEANS"
},

{
    image: icon2,
    name: "BEST BEANS"
},
{
    image: icon3,
    name: "BEST BEANS"
}]


const Shop = (props) => {
    return (
        <div>
            <div className="sec5-bg">
                <div>
                    <h1>THE BEST COFFEE SHOP</h1>
                    {icons.map(card =>
                        <Icon className="propieties" {...card}></Icon>
                    )}
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, omnis iste natus
                    error sit voluptatem accusantium doloremque, totam rem aperiam, voluptatem accusantium doloremque.</p>
                    <a>ABOUT US</a>
                </div>
            </div>
            <div className="images-container">
                <img src={Img1}></img>
                <img src={Img2}></img>
                <img src={Img3}></img>
            </div>
        </div>
    )
}


export default Shop;