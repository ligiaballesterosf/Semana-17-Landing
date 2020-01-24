import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <div>
            <nav>
                <ul className="menu">
                    <li className="nav-item"><a href="#">Active</a></li>
                    <li className="nav-item"><a href="#">Link</a></li>
                    <li className="nav-item"><a href="#">Link</a></li>
                    <li className="nav-item disabled"><a href="#">Disabled</a></li>
                </ul>
            </nav>
            <header className="banner">
                <h1>Portwell, Inc.</h1>
                <p>Serving only the best since 2019</p>
            </header>

        </div>
    );
};

export default Hero;