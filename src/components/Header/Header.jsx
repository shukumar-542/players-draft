import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header-container'>
            <ul>
                <li>Home</li>
                <li>Players</li>
                <li>News</li>
                <li>Login</li>
            </ul>
        </nav>
    );
};

export default Header;