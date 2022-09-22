import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <div  className='header'>
                <div className="logo">
                    <img src={logo} alt="" srcSet="" />
                </div>
                
                <nav className='nav-bar'>
                    <ul>
                        <li><a href="/Shop">Shop</a></li>
                        <li><a href="/Order">Order Track</a></li>
                        <li><a href="/Inventory">Manage Inventory</a></li>
                        <li><a href="/Login">Login</a></li>
                    </ul>

                </nav>
                <FontAwesomeIcon icon={faBars} className="bars"></FontAwesomeIcon>
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