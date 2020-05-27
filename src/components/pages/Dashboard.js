import React, { useState, useContext, useEffect, setState } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
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

        
        <h1></h1>
    
    )
}

export default Dashboard