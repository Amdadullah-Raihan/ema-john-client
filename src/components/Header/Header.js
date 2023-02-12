import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user,logOut} = useFirebase();

    // console.log('from header', user);


    let activeStyle = {
        // textDecoration: "underline",
        fontWeight : "bold",
        color:"goldenrod"
      };
    return(
        <div className="">
            <nav className="navbar navbar-expand-lg bg-regular navbar-dark px-5">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand" to='/home'>
                        <img src={logo} alt="" />
                    </NavLink>
                    
                    <div className="collapse navbar-collapse cont" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to='shop'
                                    style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                                    >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='orders'
                                    style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                                    >Order Review</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to='/inventory'
                                    style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                                    >Inventory</NavLink>
                                </li>
                               
                                
                            </ul>
                            
                    </div>
                    <div>
                        {
                            user.email ? <div className='logged-in-user'>
                                <button onClick={logOut} className='login-btn'> Log out</button>
                                {/* <img id='user-photo' src={user.photoURL} alt="" /> */}
                            </div>:<Link to='/login'>
                                        <button className='login-btn'>Log in</button>
                                    </Link>
                        }
                    </div>
                </div>
             </nav>
        </div>
     
    );
};

export default Header;