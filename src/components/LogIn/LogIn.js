import React from 'react';
import './login.css'
const LogIn = () => {
    return (
        <div className='login'>
            <h1>Provide your login credentials</h1>
            <div className='login-credentials'> 
               
                <input type="text" name="" id="email" placeholder='Enter your email' /> <br />
                
                <input type="text" id='password' placeholder='Enter your password'></input>
                <button>Log in</button>
                <a id='forgot-pass' href="">forgot password?</a>
                <hr />  
                <button id='new-ac'>Create New Acount</button>
            
            </div>
        </div>
    );
};

export default LogIn;