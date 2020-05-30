import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import RecipeContext from '../../context/recipe/recipeContext';
import AuthContext from '../../context/auth/authContext';

import Nav from '../layout/Navbar';

import './NewRecipe.css'

const NewRecipe = () => {
    const recipeContext = useContext(RecipeContext)
    const authContext = useContext(AuthContext)

    const { addRecipe, updateRecipe, clearCurrent, current } = recipeContext;
  
    useEffect(() => {
      authContext.loadUser()
      if (current !== null) {
        setRecipe(current);
      } else {
        setRecipe({
          name: '',
          description: '',
          image: '',
          ingredients: [],
          method: [],
          tags: [],
          dateCreated: Date.now()
        });
      }
    }, [recipeContext, current]);
  
    const [recipe, setRecipe] = useState({
      name: '',
      description: '',
      image: '',
      ingredients: [],
      method: [],
      tags: [],
      dateCreated: Date.now()
    });
  
    const { name, description, image, ingredients, method, tags, dateCreated } = recipe;
  
    const onChange = e =>
      setRecipe({ ...recipe, [e.target.name]: e.target.value });
  
    const onSubmit = e => {
      e.preventDefault();
      if (current === null) {
        addRecipe(recipe);
      } else {
        updateRecipe(recipe);
      }
      clearAll();
    };
  
    const clearAll = () => {
      clearCurrent();
    };
  
    return (
      <>
      <Nav/>
      <div className="add-recipe-main-container">
      <form className="form" onSubmit={onSubmit}>
        <h2 className='form-header'>
          {current ? 'edit your recipe' : 'add a new recipe'}
        </h2>
        <input
          className="input"
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
        />
        <input
          className="input"
          type='text'
          placeholder='description'
          name='description'
          value={description}
          onChange={onChange}
        />
        <input
          className="input"
          type='text'
          placeholder='image'
          name='image'
          value={image}
          onChange={onChange}
        />
        <input
          className="input"
          type='text'
          placeholder='ingredients'
          name='ingredients'
          value={ingredients}
          onChange={onChange}
        />
        <input
          className="input"
          type='text'
          placeholder='method'
          name='method'
          value={method}
          onChange={onChange}
        />
        <input
          className="input"
          type='text'
          placeholder='tags'
          name='tags'
          value={tags}
          onChange={onChange}
        />
      
        <div>
          <button className='btn-add'>
            <FontAwesomeIcon icon={faCheck}
              type='submit'
              value={current ? 'Update Recipe' : 'Add Recipe'}
              />
          </button>
        </div>
        {current && (
          <div>
            <button className='btn btn-light btn-block' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
      </div>
      </>
    );
  };

export default NewRecipe