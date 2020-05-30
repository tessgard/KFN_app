import React, { useState, useContext, useEffect, setState } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Nav from '../layout/Navbar';

import Tile from '../Tile'
import './Dashboard.css'

const Dashboard = () => {

    const authContext = useContext(AuthContext);
    
    useEffect(() => {
      authContext.loadUser()
      
      // eslint-disable-next-line
    }, []);

    return (
      <>
        <Nav/>
        <div className="main-dashboard-container">
          <div className="dash-content">
            <div className="dash-content-mid">
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