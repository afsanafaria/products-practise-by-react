import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h2>Welcome to our Food World </h2>
            <input type="text" placeholder="Type your food" />
            <button> Search</button>
        </div>
    );
};

export default Header;