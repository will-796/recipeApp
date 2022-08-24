import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FavoriteButton = ({ isFood, recipeData }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const callbackHof = (fav) => (isFood ? fav.id !== recipeData.idMeal : fav.id !== recipeData.idDrink);
  useEffect(() => {
    const favoriteArr = JSON.parse(
      localStorage.getItem('favoriteRecipes') || '[]',
    );
    const favorite = favoriteArr.some(callbackHof);
    setIsFavorite(favorite);
  }, []);

  const handleClick = () => {
    const favoriteArr = JSON.parse(
      localStorage.getItem('favoriteRecipes') || '[]',
    );
    const objSaveLocal = {
      id: isFood ? recipeData.idMeal : recipeData.idDrink,
      type: isFood ? 'food' : 'drink',
      nationality: isFood ? recipeData.strArea : '',
      category: recipeData.strCategory,
      alcoholicOrNot: isFood ? '' : recipeData.strAlcoholic,
      name: isFood ? recipeData.strMeal : recipeData.strDrink,
      image: isFood ? recipeData.strMealThumb : recipeData.strDrinkThumb,
    };

    if (isFavorite) {
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify(favoriteArr.filter(callbackHof)),
      );
      setIsFavorite(!isFavorite);
    } else {
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify([...favoriteArr, objSaveLocal]),
      );
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <button
      src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
      alt="favoriteButton"
      type="button"
      data-testid="favorite-btn"
      onClick={ handleClick }
      className="FavoriteButton"
    >
      {isFavorite ? (
        <img src={ blackHeartIcon } alt="blackHeartIcon" />
      ) : (
        <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
      )}
    </button>
  );
};

FavoriteButton.propTypes = {
  isFood: PropTypes.bool.isRequired,
  recipeData: PropTypes.shape({
    idDrink: PropTypes.string,
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strArea: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strCategory: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};

export default FavoriteButton;
