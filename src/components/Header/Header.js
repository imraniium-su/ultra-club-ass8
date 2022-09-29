import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2 >My Activity</h2>
            <div>
                <a href="/shop">Food </a>
                <a href="/order">Exercise</a>
                <a href="/inventory">Study</a>

            </div>
        </div>
    );
};

export default Header;