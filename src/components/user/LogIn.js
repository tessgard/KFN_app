import React from 'react'
import "./LogIn.css";
import { Button } from '@material-ui/core';


const LogIn = () => { 
    return(
        <div className="main-container">
            <div className="login-content">
                <img className="logo" src="assets/kfn-orange-logo.png"></img>
                <Button>log in google</Button>
                <Button>log in facebook</Button>
                <Button>log in email</Button>
            </div>
        </div>
    )
}

export default LogIn