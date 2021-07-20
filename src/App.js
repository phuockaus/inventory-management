import React from 'react';
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
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Header />
          <Login />
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
