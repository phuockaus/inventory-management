import React, { useState } from 'react';
import './loginform.css';

export default function LoginForm({Login}) {
    const [details, setDetails] = useState({username: '', password: ''});

    const handleSubmit = event => {
        event.preventDefault();
        document.getElementById("login-error").innerHTML = Login(details);
    }
    const handleNameChange = event => {
        setDetails({...details, username: event.target.value});
    }
    const handlePasswordChange = event => {
        setDetails({...details, password: event.target.value});
    }
    const handleFocus = () => {
        document.getElementById("login-error").innerHTML = "";
    }
    return (
        <div id="login_container">
            <h1 id="login_title">Login</h1>
            <div className="blank_space"></div>
            <form onSubmit={handleSubmit}>
                    {/* <label className="item_label" htmlFor="username"><b>Username</b></label> */}
                    <input
                        className="item_container"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={details.name}
                        onChange={handleNameChange}
                        onFocus={handleFocus}
                        />                
                
                    {/* <label className="item_label" htmlFor="password"><b>Password</b></label> */}
                    <input
                        className="item_container"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={details.password}
                        onChange={handlePasswordChange}
                        onFocus={handleFocus}
                        />
                
                <input className="button" type="submit" value="Login" />
                <div id="login-error"></div>
            </form>
        </div>
    );       
}
