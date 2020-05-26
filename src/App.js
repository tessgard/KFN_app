import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/layout/Navbar';
import SubNav from './components/layout/SubNav';
import Home from './components/pages/home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import PrivateRoute from './components/routing/PrivateRoute';


import RecipeState from './context/recipe/RecipeState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import './App.css';

function App() {
  return (
    <AuthState>
      <RecipeState>
        <AlertState>
          <Router>
          <div className="main-app-container">
            <Nav/>
            <SubNav location={window.location}/>
            <switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
            </switch>
          </div>
          </Router>
        </AlertState>
      </RecipeState>
    </AuthState>
  );
}

export default App;
