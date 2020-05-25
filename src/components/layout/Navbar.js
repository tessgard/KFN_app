import React from 'react'
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Nav = () => { 
    return(
        <div className="nav-container">
            <div className="nav-content">
            
                <img className="logo" src="assets/kfn-orange-logo.png"></img>
                <div className="sub-nav">
                    <input className="search-input"></input>
                    <button className="btn submit-search-btn"><FontAwesomeIcon icon={faSearch} /></button>
                    <button className="btn log-in-sign-up-btn">Log in or Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Nav