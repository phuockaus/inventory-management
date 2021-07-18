import React, {useState, useEffect} from 'react';
import Header from './components/header/header-bar';
import Login from './components/login/login';
import Main from './components/main/main';
import Error from './components/error/error'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  const [users, setUsers] = useState(false);
  useEffect(() => {
    getUSER();
  }, []);
  function getUSER() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setUsers(data);
      });
  }
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Header />
          <Login />
          {users ? users : 'There is no merchant data available'}
        </Route>
        <Route path = "/main">
          <Main />
        </Route>
        <Route path = "*">
          <Error />
        </Route>
      </Switch>
    </Router>    
  );
}
export default App;
