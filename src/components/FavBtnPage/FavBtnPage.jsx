import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import context from '../../context';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FavBtnPage = ({ id, index }) => {
  const { setFavoriteRecipes, favoriteRecipes } = useContext(context);
  const handleClick = () => {
    const newFavRecipes = favoriteRecipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavRecipes));
    setFavoriteRecipes(newFavRecipes);
  };

  return (
    <button type="button" onClick={ handleClick }>
      <img
        src={ blackHeartIcon }
        alt="favoriteButton"
        data-testid={ `${index}-horizontal-favorite-btn` }
      />
    </button>
  );
};

FavBtnPage.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FavBtnPage;
