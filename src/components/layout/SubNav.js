import React, { useContext } from 'react'
import "./Navbar.css";
import AuthContext from '../../context/auth/authContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SubNav = () =>  {
  const authContext = useContext(AuthContext)

  const { isAuthenticated, logout, user } = authContext

  const authLinks = (
    <div className='sub-nav'>
        <input className="search-input"></input>
        <button className="btn submit-search-btn"><FontAwesomeIcon icon={faSearch} /></button>        
    </div>
  )

  const guestNav = (
    <div className='sub-nav'>
      <input className="search-input"></input>
      <button className="btn submit-search-btn"><FontAwesomeIcon icon={faSearch} /></button>
      <a href="/login"><button className="btn log-in-sign-up-btn">Log in</button></a>
      <a href="/register"><button className="btn log-in-sign-up-btn">Sign up</button></a>
  </div>
  )
        return (
          <>
            {isAuthenticated ? authLinks : guestNav}
          </>  
        );
  }
  
  export default SubNav