import React, { Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MAIN from '../main/main';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event){
        this.props.history.push('/main');
    }

    render(){
        const { username, password } = this.state;
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div class="container">
                    <label for="username"><b>Username</b></label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        />

                    
                </div>
                <div>
                    <label for="password"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
        );
    }
}