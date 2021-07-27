import React, { useState, useEffect } from 'react';
import LoginView from './components/login/login';
import Navbar from './components/main/navbar/navbar'
import Error from './components/error/error'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

function App() {
  const [users, setUsers] = useState(false);
  const [state, setState] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch('http://localhost:3001/login')
    .then(response => {
        return response.text();
    })
    .then(data => {
        setUsers(JSON.parse(data));
    });
  }

  const Login = details => {
    for (let i = 0; i < users.length; i++){
      if(users[i].username == details.username && users[i].password == details.password){
        setState(true);
      }
    }
  }
    return (
    <Router>
      <Switch>
        <Route exact path = "/">  
          <Redirect to ='/login' />          
        </Route>
        <Route path = "/login">
          {state ? <Redirect to="/home"/> : <LoginView Login={Login}/>}
        </Route>
        <Route path = "/home">
          <Navbar />
        </Route>
        <Route path = "*">
          <Error />
        </Route>
      </Switch>
    </Router>    
  );
}
export default App;
