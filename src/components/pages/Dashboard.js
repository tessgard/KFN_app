import React, { useState, useContext, useEffect, setState } from 'react'
import AuthContext from '../../context/auth/authContext'
import AlertContext from '../../context/alert/alertContext'
import RecipeContext from '../../context/recipe/recipeContext'
import Nav from '../layout/Navbar'

import Tile from '../Tile'
import Spinner from '../layout/Spinner'
import './Dashboard.css'

const Dashboard = () => {
  
    const authContext = useContext(AuthContext)
    const recipeContext = useContext(RecipeContext)
    const { recipes, filtered, getRecipes, loading } = recipeContext
    
    useEffect(() => {
      authContext.loadUser()
      getRecipes()
      // eslint-disable-next-line
    }, []);

    if (recipes !== null && recipes.length === 0 && !loading) {
      return <p>loading</p>
    }

    return (
      <>
        <Nav/>
        <div className="main-dashboard-container">
          <div className="dash-content">
            <div className="dash-content-mid">
                <h3>New for you</h3>
              <div className="dash-index-container">

                {recipes != null && !loading ? (

                  recipes.map(recipe => (
                  <Tile recipe={recipe}/>))                 
                ) : <Spinner />}

              </div>
              <div className="seperator"></div>
                <h3>Saved Recipes  </h3>            
              <div className="dash-index-container">
             
              </div>
              
            </div>
          </div>

        </div>



      </>

        
    
    )
}

export default Dashboard