import React, { Component, useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import './loginform.css';

export default function LoginForm({Login}) {
    const [details, setDetails] = useState({username: '', password: ''});

    const handleSubmit = event => {
        event.preventDefault();
        Login(details);
    }
    const handleNameChange = event => {
        setDetails({...details, username: event.target.value});
    }
    const handlePasswordChange = event => {
        setDetails({...details, password: event.target.value});
    }
    return (
        <div className="container">
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="item_container">
                    <label className="item_label" htmlFor="username"><b>Username</b></label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        value={details.name}
                        onChange={handleNameChange}
                        />                
                </div>
                <div className="item_container">
                    <label className="item_label" htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={details.password}
                        onChange={handlePasswordChange}
                        />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );       
}
