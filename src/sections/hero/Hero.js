import React from 'react';
import './Hero.scss';

 const Hero = props => {
    return (
        <div>
            <nav>
                <ul className="menu">
                    <li className="nav-item"><a href="#">Active</a></li>
                    <li className="nav-item"><a href="#">Link</a></li>
                    <li className="nav-item"><a href="#">Link</a></li>
                    <li className="nav-item disabled-a "><a href="#" className="disabled">Disabled</a></li>
                </ul>
            </nav>
            <div className="banner">
                <header className="banner-overlay">
                    <div className="banner-container">
                        <h1>Portwell, Inc.</h1>
                        <p>Serving only the best since 2019</p>
                        <p className="line-explore"><a href="#" className="link-explore">EXPLORE</a></p>
                    </div>
                </header>
            </div>
        
        </div>
    );
};


export default Hero;