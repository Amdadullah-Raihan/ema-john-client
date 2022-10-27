import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Register.css'
const Register = () => {
    const {signInUsingGoogle} = useFirebase();

    return (
        <div className='login-container'>
            <div className="login-credentials">
                
                    <p className="lebel">Email</p>
                    <input type="text" name="Email" id="email" placeholder='Enter Your Email' /> <br />
                    <p className="lebel">Password</p>
                    <input type="password" name="Password" id="password" placeholder='Type Your Password' />
                    <p className="lebel">Confirm Password</p>
                    <input type="password" name="Password" id="password" placeholder='Re-enter Your Password'/>
                    <button>Register</button>
                    <p>Already have an account? <Link to="/login">Login</Link> </p>
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

export default Register;