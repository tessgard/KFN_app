import React from 'react'
import "./Navbar.css";
import PopUpMenu from './PopUpMenu'
import { withRouter } from 'react-router-dom';    

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class SubNav extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {

        const { location } = this.props;

        if (location.pathname.match('/login') || location.pathname.match('/register')) 
            return null

        return (
            <div className='sub-nav'>
                <input className="search-input"></input>
                <button className="btn submit-search-btn"><FontAwesomeIcon icon={faSearch} /></button>
                <button onClick={this.togglePopup.bind(this)} className="btn log-in-sign-up-btn">Log in or Sign up</button>
                    {this.state.showPopup ? 
                        <PopUpMenu
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                        />
                        : null}
            </div>
        );
    }
  };
  
  export default SubNav