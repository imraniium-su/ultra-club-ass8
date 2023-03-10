import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='header'>
            <h2 className='fw-bold'><FontAwesomeIcon icon={faPersonWalking}></FontAwesomeIcon> Daily Activity</h2>
            <div>
                <a href="/shop">Food </a>
                <a href="/order">Exercise</a>
                <a href="/inventory">Study</a>

            </div>
        </div>
    );
};

export default Header;