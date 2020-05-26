import React from 'react'
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Nav = () => { 
    return(
        <div className="nav-container">
            <div className="nav-content">
                <a href="/">
                    <img className="logo" src={require('../../assets/kfn-orange-logo.png')}></img>
                </a>
            </div>
        </div>
    )
}

export default Nav