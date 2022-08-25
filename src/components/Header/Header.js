import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div  className='header'>
                <div className="logo">
                    <img src={logo} alt="" srcset="" />
                </div>
                <nav className='nav-bar'>
                    <ul>
                        <li><a href="/Shop">Shop</a></li>
                        <li><a href="/Order">Order Track</a></li>
                        <li><a href="/Inventory">Manage Inventory</a></li>
                        <li><a href="/Login">Login</a></li>
                    </ul>

                </nav>
            </div>
            <div className="intro">
                <div className="sell-off">

                </div>
                <div className="header-img">
                    
                </div>
            </div>
                
        </div>
    );
};

export default Header;