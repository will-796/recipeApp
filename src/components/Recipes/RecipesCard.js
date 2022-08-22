import PropTypes from 'prop-types';
import React from 'react';

function RecipesCard(props) {
  const { index, thumbnail, recipe } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img data-testid={ `${index}-recipe-card` } src={ thumbnail } alt={ recipe } />
      <h2 data-testid={ `${index}-card-name` }>{recipe}</h2>
    </div>
  );
}

RecipesCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;

export default RecipesCard;
