import React, { useContext, useEffect } from 'react'
import Tile from '../Tile'
import SubNav from '../layout/SubNav';
import Nav from '../layout/Navbar'
import AuthContext from '../../context/auth/authContext'
import RecipeContext from '../../context/recipe/recipeContext'
import Spinner from '../layout/Spinner'

import './Home.css'

const Home = () => {
  const authContext = useContext(AuthContext)
  const recipeContext = useContext(RecipeContext)
  const { recipes, filtered, getRecipes, loading } = recipeContext
   

  useEffect(() => {
    authContext.loadUser()
    getRecipes()
    //eslint-disable-next-line
  }, [])

  if (recipes !== null && recipes.length === 0 && !loading) {
    return (
      <>
      <Nav/>
      <SubNav location={window.location}/>
        <div className="main-index-container">
        <p>You don't have any recipes yet</p>
      </div>
    </>
    )
  }

    return (
      <>
      <Nav/>
      <SubNav location={window.location}/>
        <div className="main-index-container">
        {recipes != null && !loading ? (
        recipes.map(recipe => (
        <Tile recipe={recipe}/>))                 
        ) : <Spinner />}
      </div>
    </>
    )
}

export default Home