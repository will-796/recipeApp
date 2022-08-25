import PropTypes from 'prop-types';
import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

const ShareBtnDoneRecipes = ({ isFood, id, index }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    const endPoint = isFood ? `foods/${id}` : `drinks/${id}`;
    copy(`http://localhost:3000/${endPoint}`);
    setIsCopied(true);
    global.alert('Link copied!');
  };
  return (
    <button
      type="button"
      data-testid={ `${index}-horizontal-share-btn` }
      className="ShareButton"
      onClick={ handleClick }
      src={ shareIcon }
    >
      {isCopied ? 'Link copied!' : <img src={ shareIcon } alt="ShareButton" />}
    </button>
  );
};

ShareBtnDoneRecipes.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isFood: PropTypes.bool,
};

ShareBtnDoneRecipes.defaultProps = {
  isFood: false,
};

export default ShareBtnDoneRecipes;
