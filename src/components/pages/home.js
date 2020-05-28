import React from 'react'
import Tile from '../Tile'
import SubNav from '../layout/SubNav';
import Nav from '../layout/Navbar'
import './Home.css'

const Home = () => {
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