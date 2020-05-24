import React from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard'
import { Button } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import Nav from './components/layout/Navbar';
import LogIn from './components/user/LogIn'


function App() {
  return (
    <div className="main-app-container">
      <LogIn/>
    </div>
  );
}

export default App;
