import React, { useState, useContext, useEffect, setState } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Nav from '../layout/Navbar';

import BlogTile from '../BlogTile'
import Tile from '../Tile'
import './Dashboard.css'

const Dashboard = props => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
  
    const { setAlert } = alertContext;
    const { error, clearErrors, isAuthenticated } = authContext;
  
    useEffect(() => {
      if (isAuthenticated) {
        props.history.push('/dashboard');
      }
  
      if (error === 'Invalid Credentials') {
        setAlert(error, 'danger');
        clearErrors();
      }
    }, [error, isAuthenticated, props.history]);

    return (
      <>
        <Nav/>
        <div className="main-dashboard-container">
          <div className="dash-content">
            <div className="dash-content-left">
              <h3>From the blog</h3>
              <BlogTile/>
              <BlogTile/>
              <BlogTile/>

            </div>
            <div className="dash-content-right">
                <h3>New for you</h3>
              <div className="dash-index-container">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
              </div>
              <div className="seperator"></div>
                <h3>Saved Recipes  </h3>            
              <div className="dash-index-container">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
              </div>
              
            </div>
          </div>

        </div>



      </>

        
    
    )
}

export default Dashboard