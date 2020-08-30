import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/pages/Dashboard'
import NewRecipe from './components/pages/NewRecipe'
import RecipeCard from './components/pages/RecipeCard'

import PrivateRoute from './components/routing/PrivateRoute';
import RecipeState from './context/recipe/RecipeState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken'

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <AuthState>
      <RecipeState>
        <AlertState>
          <Router>
          <div className="main-app-container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              <PrivateRoute exact path='/newrecipe' component={NewRecipe} />
              <PrivateRoute exact path='/recipe' component={RecipeCard} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
          </Router>
        </AlertState>
      </RecipeState>
    </AuthState>
  );
}

export default App;
