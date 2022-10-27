import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './login.css'
const LogIn = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <div className='login'>
            <h1>Provide your login credentials</h1>
            <div className='login-credentials'> 
               
                <input type="text" name="" id="email" placeholder='Enter your email' /> <br />
                
                <input type="text" id='password' placeholder='Enter your password'></input>
                <button>Log in</button>
                <a id='forgot-pass' href="f">forgot password?</a>
                <hr />  
                <button id='new-ac'>Create New Acount</button>
            
            </div>
            <div>
                ----------or----------
            </div>
            <div className='sign-in-btn-container'>
               
                <button onClick={signInUsingGoogle}>  <img id='google-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" /> Log in with Google</button>
            </div>
        </div>
    );
};

export default LogIn;