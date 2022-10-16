import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars} from '@fortawesome/free-solid-svg-icons'
import { handleSearch } from '../Shop/Shop';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        // textDecoration: "underline",
        fontWeight : "bold",
        color:"goldenrod"
      };
    return (
        <div>
            <div  className='header'>
                <div className="logo">
                    <img src={logo} alt="" srcSet="" />
                    
                </div>
                
                <nav className='nav-bar'>
                    <ul>
                        <li >
                            <NavLink style={({ isActive }) =>
                             isActive ? activeStyle : undefined
                             } to="/shop">Shop
                            </NavLink>
                    </li>
                    <li >
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            } to="/orders">Track Order
                        </NavLink></li>
                        <li >
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                                } to="/inventory">Manage Inventory
                            </NavLink>
                        </li>
                        <li >
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                                } to="/login">Login
                            </NavLink>
                        </li>
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