import React, { useContext, useEffect } from 'react'
import Tile from '../Tile'
import SubNav from '../layout/SubNav';
import Nav from '../layout/Navbar'
import AuthContext from '../../context/auth/authContext'
import './Home.css'

const Home = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])

    return (
      <>
      <Nav/>
      <SubNav location={window.location}/>
        <div className="main-index-container">
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
      </div>
    </>
    )
}

export default Home