import React from 'react'
import "./Navbar.css";

const Nav = () => { 
    return(
        <div className="nav-container">
            <button className="logout-btn">Logout</button>
            <div className="nav-content">
                <a href="/">
                    <img className="logo" src={require('../../assets/kfn-orange-logo.png')}></img>
                </a>
            </div>
        </div>
    )
}

export default Nav