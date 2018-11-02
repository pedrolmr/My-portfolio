import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav>
                <Link exact to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;