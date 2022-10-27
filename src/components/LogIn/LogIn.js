import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './login.css'
const LogIn = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <div className='login-container'>
            
            <div className='login-credentials'> 
                <h1>Login</h1>
                <p className="lebel">Email</p> 
                <input type="text" name="" id="email" placeholder='Enter your email' /> <br />
                <p className="lebel">Password</p>
                <input type="text" id='password' placeholder='Enter your password'></input>
                <button>Log in</button>
                <p>New to Ema-jhon? <Link to="/register">Create New account</Link> </p> 
              
                <div>
                   ----------------------------or----------------------------
                </div>
                <div className='sign-in-btn-container'>
               
                    <button onClick={signInUsingGoogle}>  <img id='google-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" /> Log in with Google</button>
                </div>
            
            </div>
           
        </div>
    );
};

export default LogIn;