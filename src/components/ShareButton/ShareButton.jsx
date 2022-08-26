import PropTypes from 'prop-types';
import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

const ShareButton = ({ isFood, id }) => {
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
      data-testid="share-btn"
      className="ShareButton"
      onClick={ handleClick }
    >
      {isCopied ? 'Link copied!' : <img src={ shareIcon } alt="ShareButton" />}
    </button>
  );
};

ShareButton.propTypes = {
  id: PropTypes.string.isRequired,
  isFood: PropTypes.bool.isRequired,
};

export default ShareButton;
