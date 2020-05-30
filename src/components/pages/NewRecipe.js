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
          servings: 0,
          cookTimeHours: 0,
          cookTimeMinutes: 0,
          prepTimeHours: 0,
          prepTimeMinutes: 0,
          ingredient1: '',
          ingredient2: '',
          ingredient3: '',
          ingredient4: '',
          ingredient5: '',
          ingredient6: '',
          ingredient7: '',
          ingredient8: '',
          ingredient9: '',
          method1: '',
          method2: '',
          method3: '',
          method4: '',
          category: '',
          dateCreated: Date.now()
        });
      }
    }, [recipeContext, current]);
  
    const [recipe, setRecipe] = useState({
      name: '',
      description: '',
      image: '',
      servings: 0,
      cookTimeHours: 0,
      cookTimeMinutes: 0,
      prepTimeHours: 0,
      prepTimeMinutes: 0,
      ingredient1: '',
      ingredient2: '',
      ingredient3: '',
      ingredient4: '',
      ingredient5: '',
      ingredient6: '',
      ingredient7: '',
      ingredient8: '',
      ingredient9: '',
      method1: '',
      method2: '',
      method3: '',
      method4: '',
      category: '',
      dateCreated: Date.now()
    });
  
    const { name,
      description,
      image,
      servings,
      cookTimeHours,
      cookTimeMinutes,
      prepTimeHours,
      prepTimeMinutes,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
      ingredient7,
      ingredient8,
      ingredient9,
      method1,
      method2,
      method3,
      method4,
      category } = recipe;
  
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
        <h2 className='form-header'>
          {current ? 'edit your recipe' : 'add a new recipe'}
        </h2>
        <form className="recipe-form" onSubmit={onSubmit}>

          <div className="form-inner-container"> 
            <div className="form-left-container">

              <input className="input" type='text' placeholder='Name' name='name' value={name}onChange={onChange}/>
              <textarea className="input-text-area" type='textarea' placeholder='description' name='description' value={description} onChange={onChange}/>
              <input className="input" type='text' placeholder='image URL' name='image' value={image}onChange={onChange}/>
              <input className="input" type='number' placeholder='servings' name='servings' value={servings}onChange={onChange}/>
              <input className="input" type='text' placeholder='category' name='category' value={category}onChange={onChange}/>

              <p>Prep time</p>
              <div className="form-time">
                <input className="input-time" type='number' placeholder='hours' name='prepTimeHours' value={prepTimeHours}onChange={onChange}/>
                <input className="input-time" type='number' placeholder='minutes' name='prepTimeMinutes' value={prepTimeMinutes}onChange={onChange}/>
              </div>

              <p>Cooking time</p>
              <div className="form-time">
                <input className="input-time" type='number' placeholder='hours' name='cookTimeHours' value={cookTimeHours}onChange={onChange}/>
                <input className="input-time" type='number' placeholder='minutes' name='cookTimeMinutes' value={cookTimeMinutes}onChange={onChange}/>
              </div>

            </div>

            <div className="form-mid-container">
              <p>Ingredients</p>
              <div className="form-ingredients">
                <input className="input" type='text' placeholder='ingredient' name='ingredient1' value={ingredient1}onChange={onChange}/>
                <input className="input" type='text' placeholder='ingredient' name='ingredient2' value={ingredient2}onChange={onChange}/>
                <input className="input" type='text' placeholder='ingredient' name='ingredient3' value={ingredient3}onChange={onChange}/>
                <input className="input" type='text' placeholder='ingredient' name='ingredient4' value={ingredient4}onChange={onChange}/>
                <input className="input" type='text' placeholder='ingredient' name='ingredient5' value={ingredient5}onChange={onChange}/>
                <input className="input" type='text' placeholder='ingredient' name='ingredient6' value={ingredient6}onChange={onChange}/>
                <input className="input" type='text' placeholder='ingredient' name='ingredient7' value={ingredient7}onChange={onChange}/>
                <input className="input" type='text' placeholder='ingredient' name='ingredient8' value={ingredient8}onChange={onChange}/>
                <input className="input" type='text' placeholder='ingredient' name='ingredient9' value={ingredient9}onChange={onChange}/>
              </div>

            </div>
            <div className="form-right-container">
              <p>Method</p>
              <div className="form-method">
                <textarea className="input-text-area" type='text' placeholder='step 1' name='method1' value={method1}onChange={onChange}/>
                <textarea className="input-text-area" type='text' placeholder='step 2' name='method2' value={method2}onChange={onChange}/>
                <textarea className="input-text-area" type='text' placeholder='step 3' name='method3' value={method3}onChange={onChange}/>
                <textarea className="input-text-area" type='text' placeholder='step 4' name='method4' value={method4}onChange={onChange}/>
              </div>
            </div>
            </div>

        
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