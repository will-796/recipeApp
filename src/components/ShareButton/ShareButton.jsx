import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

const ShareButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    const strCopy = history.location.pathname;
    copy(`http://localhost:3000${strCopy}`);
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

export default ShareButton;
