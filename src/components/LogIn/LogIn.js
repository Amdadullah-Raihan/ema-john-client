import React from 'react';
import './login.css'
const LogIn = () => {
    return (
        <div className='login'>
            <h1>Give your login credentials</h1>
            <div className='login-credentials'> 
               
                <input type="text" name="" id="email" placeholder='Enter your email' /> <br />
                
                <input type="text" id='password' placeholder='Enter your password'></input>
                <button>LogIn</button>
            
            </div>
        </div>
    );
};

export default LogIn;