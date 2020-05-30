import React, { useContext } from 'react'
import "./Navbar.css";
import AuthContext from '../../context/auth/authContext'


const Nav = () => {

    const authContext = useContext(AuthContext)

    const onLogout = () => {
        authContext.logout()
    }

    const popMenu = (
        <div className="ham-popup-menu">
            <span className="menu-item"><a href="/">Home</a></span>
            <span className="menu-item"><a href="/dashboard">Update profile</a></span>
            <span className="menu-item"><a href="/newrecipe">Add new recipe</a></span>
            <span className="menu-item"><a href="/dashboard">Dashboard</a></span>
            <span className="menu-item"><a onClick={onLogout} href="#">Logout</a></span>
        </div>
    )

    return(
        <div className="nav-container">
            <a href='#' onClick={popMenu} className="ham-menu">
                <div className="ham-bar"></div>
                <div className="ham-bar"></div>
                <div className="ham-bar"></div>
            </a>    
           
            <div className="ham-popup-menu">
                <span className="menu-item"><a href="/">Home</a></span>
                <span className="menu-item"><a href="/dashboard">Update profile</a></span>
                <span className="menu-item"><a href="/newrecipe">Add new recipe</a></span>
                <span className="menu-item"><a href="/dashboard">Dashboard</a></span>
                <span className="menu-item"><a onClick={onLogout} href="#">Logout</a></span>
            </div>

            
                
                                
            <div className="nav-content">
                <a href="/">
                    <img className="logo" src={require('../../assets/kfn-orange-logo.png')}></img>
                </a>
            </div>
        </div>
    )
}

export default Nav;