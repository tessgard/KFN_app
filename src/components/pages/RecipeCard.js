import React from 'react'
import '../../components/Tile.css'
import PropTypes from 'prop-types'
import Nav from '../layout/Navbar'
import "./RecipeCard.css"

const RecipeCard = () => {

    // const { id, name, description, image, category } = recipe

    return (
        <>
        <Nav/>

        

            <div className="recipe-main">
                <h1>Recipe Title</h1>
                <p>Recipe content</p>
            </div>


        </>
    )
}

RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired, 
 }

export default RecipeCard