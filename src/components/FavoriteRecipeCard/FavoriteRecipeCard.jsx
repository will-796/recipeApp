import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import FavBtnPage from '../FavBtnPage/FavBtnPage';
import ShareBtnDoneRecipes from '../ShareBtnDoneRecipes/ShareBtnDoneRecipes';

const FavoriteRecipeCard = ({ recipe, index }) => {
  const history = useHistory();
  const {
    id,
    type,
    nationality,
    category,
    alcoholicOrNot,
    name,
    image,
  } = recipe;
  const isFood = type === 'food';
  const redirectRecipe = () => {
    const pathRedirect = isFood ? `/foods/${id}` : `/drinks/${id}`;
    history.push(pathRedirect);
  };

  return (
    <div>
      <button type="button" onClick={ redirectRecipe }>
        <img
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
          width="100"
        />
      </button>
      <p data-testid={ `${index}-horizontal-top-text` }>
        {isFood ? `${nationality} - ${category}` : alcoholicOrNot}
      </p>
      <button
        type="button"
        data-testid={ `${index}-horizontal-name` }
        onClick={ redirectRecipe }
      >
        {name}
      </button>
      <ShareBtnDoneRecipes index={ index } id={ id } isFood={ isFood } />
      <FavBtnPage id={ recipe.id } index={ index } />

    </div>
  );
};

FavoriteRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    alcoholicOrNot: PropTypes.string,
    category: PropTypes.string,
    doneDate: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    nationality: PropTypes.string,
    type: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default FavoriteRecipeCard;
