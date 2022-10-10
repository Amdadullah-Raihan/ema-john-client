import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars} from '@fortawesome/free-solid-svg-icons'
import { handleSearch } from '../Shop/Shop';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
            <div  className='header'>
                <div className="logo">
                    <img src={logo} alt="" srcSet="" />
                    
                </div>
                
                <nav className='nav-bar'>
                    <ul>
                        <li ><Link to="/shop">Shop</Link></li>
                        <li ><Link to="/orders">Track Order</Link></li>
                        <li ><Link to="/inventory">Manage Inventory</Link></li>
                        <li ><Link to="/login">Login</Link></li>
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