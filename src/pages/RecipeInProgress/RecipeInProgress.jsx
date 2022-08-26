import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import ShareButton from '../../components/ShareButton/ShareButton';
import Context from '../../context';

function RecipeInProgress({ isFood }) {
  const history = useHistory();
  const { id: recipeId } = useParams();

  const { recipeData, setRecipeData } = useContext(Context);
  const [ingredientsData, setIngredientsData] = useState({});
  const [finishIsDisabled, setFinishIsDisabled] = useState(true);

  const handleRoute = () => {
    history.push('/done-recipes');
  };

  const ingredientsKeys = Object.keys(recipeData || {}).filter(
    (key) => key.includes('strIngredient') && recipeData[key],
  );

  const handleChange = ({ target: { name } }) => {
    let ingredients = JSON.parse(localStorage.getItem('ingredients')) || {};

    if (ingredients[recipeId]) {
      if (ingredients[recipeId].some((ingredient) => ingredient === name)) {
        const ingredientsFilter = ingredients[recipeId]
          .filter((ingredient) => ingredient !== name);
        ingredients = { ...ingredients, [recipeId]: ingredientsFilter };
      } else {
        ingredients = { ...ingredients, [recipeId]: [...ingredients[recipeId], name] };
      }
    } else {
      ingredients = { ...ingredients, [recipeId]: [name] };
    }
    setIngredientsData(ingredients);
    localStorage.setItem('ingredients', JSON.stringify(ingredients));
  };

  useEffect(() => {
    if (ingredientsData[recipeId]?.length > 0) {
      setFinishIsDisabled(ingredientsData[recipeId]?.length !== ingredientsKeys.length);
    }
  }, [ingredientsData, ingredientsKeys]);

  useEffect(() => {
    const ingredients = JSON.parse(localStorage.getItem('ingredients')) || [];
    setIngredientsData(ingredients);
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const url = isFood
        ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipeData(isFood ? data.meals[0] : data.drinks[0]);
    };
    fetchApi();
  }, [recipeId]);

  const ingredientName = (index) => recipeData[`strIngredient${index + 1}`];

  return (
    <section>
      <h1>
        Receitas em progresso
      </h1>
      <img
        data-testid="recipe-photo"
        width="100%"
        src={ recipeData.strDrinkThumb || recipeData.strMealThumb }
        alt=""
      />
      <h2 data-testid="recipe-title">{recipeData.strDrink || recipeData.strMeal}</h2>
      <h3 data-testid="recipe-category">{recipeData.strCategory}</h3>
      <FavoriteButton recipeData={ recipeData } isFood={ isFood } />
      <ShareButton isFood={ isFood } id={ recipeId } />
      <fieldset>
        <legend>Passos da Receita</legend>
        { ingredientsKeys.map((key, index) => (
          <div key={ key }>
            <label
              data-testid={ `${index}-ingredient-step` }
              htmlFor={ ingredientName(index) }
            >
              {!ingredientsData[recipeId] ? (
                <input
                  checked={ false }
                  type="checkbox"
                  id={ ingredientName(index) }
                  name={ ingredientName(index) }
                  onChange={ handleChange }
                />
              ) : (
                <input
                  checked={ ingredientsData[recipeId]
                    ?.some((ingredient) => ingredient === ingredientName(index)) }
                  type="checkbox"
                  id={ ingredientName(index) }
                  name={ ingredientName(index) }
                  onChange={ handleChange }
                />

              )}
              {`${recipeData[`strIngredient${index + 1}`]} - 
            ${recipeData[`strMeasure${index + 1}`]}`}
            </label>
          </div>
        ))}
      </fieldset>
      <p data-testid="instructions">{recipeData.strInstructions}</p>
      <button
        disabled={ finishIsDisabled }
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ handleRoute }
      >
        Finish Recipes
      </button>
    </section>
  );
}

RecipeInProgress.propTypes = {
  isFood: PropTypes.bool.isRequired,
};

export default RecipeInProgress;
