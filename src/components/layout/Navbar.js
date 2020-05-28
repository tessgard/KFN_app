import React from 'react'
import "./Navbar.css";
import { LOGOUT } from '../../context/types';


class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
        showMenu: false
        };
    }
    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }
    render() {

        const { location } = this.props;
        return(
            <div className="nav-container">
                <a href='#' onClick={this.toggleMenu.bind(this)} className="ham-menu">
                    <div className="ham-bar"></div>
                    <div className="ham-bar"></div>
                    <div className="ham-bar"></div>
                </a>    
                {this.state.showMenu ? 
                    <div className="ham-popup-menu">
                    <span className="menu-item"><a href="/">Home</a></span>
                    <span className="menu-item"><a href="/">Update profile</a></span>
                    <span className="menu-item"><a href="/">Add new recipe</a></span>
                    <span className="menu-item"><a href="/dashboard">Dashboard</a></span>
                    <span className="menu-item"><a href="#">Logout</a></span>
                </div>
                    : null}                
                <div className="nav-content">
                    <a href="/">
                        <img className="logo" src={require('../../assets/kfn-orange-logo.png')}></img>
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav;