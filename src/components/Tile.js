import React from 'react'
import './Tile.css'
import PropTypes from 'prop-types'
import RecipeCard from './pages/RecipeCard'
import ReactDOM from 'react-dom';
import { useHistory, Link } from "react-router-dom";



const Tile = ({ recipe }) => {

    const { _id, name, description, image, category } = recipe

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/recipe`; 
        history.push(path);
    }

    return (
        <div className="tile-container">

            <div className="tile-img">
                
                {/* <img src={image}/> */}

            </div>
            <div className="tile-details">
    <           h2>{name}</h2>
                <p>{category}</p>
                <div className="tile-buttons">
                    <button onClick={routeChange} className="btn view-details-btn">
                        View details
                    </button>
                    <Link 
                        to={{ 
                        pathname: '/recipe', 
                        state: { message: 'hello, im a passed message!' } 
                    }}/>
                </div>
            </div>

        </div>
    )
}

Tile.propTypes = {
    recipe: PropTypes.object.isRequired, 
 }

export default Tile