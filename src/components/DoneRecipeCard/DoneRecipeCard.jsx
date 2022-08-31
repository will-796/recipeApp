import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ShareBtnDoneRecipes from '../ShareBtnDoneRecipes/ShareBtnDoneRecipes';
import './style.css';

const DoneRecipeCard = ({ recipe, index }) => {
  const history = useHistory();
  const {
    id,
    type,
    nationality,
    category,
    alcoholicOrNot,
    name,
    image,
    doneDate,
    tags,
  } = recipe;
  const isFood = type === 'food';
  const redirectRecipe = () => {
    const pathRedirect = isFood ? `/foods/${id}` : `/drinks/${id}`;
    history.push(pathRedirect);
  };
  return (
    <div className="DoneRecipeCard">
      <button type="button" onClick={ redirectRecipe } className="imgDoneCard">
        <img
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
          width="100"
        />
      </button>
      <div className="containerInfoDoneCard">
        <div className="doneCardTop">
          <div className="doneCardNameDescribe">
            <button
              type="button"
              data-testid={ `${index}-horizontal-name` }
              onClick={ redirectRecipe }
              className="font-Great-Vibes"
            >
              {name}
            </button>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {isFood ? `${nationality} - ${category}` : alcoholicOrNot}
            </p>
          </div>
          <ShareBtnDoneRecipes index={ index } id={ id } isFood={ isFood } />
        </div>
        <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
        <div className="tagContainer">
          {tags.map((tag, key) => (
            <div key={ key } data-testid={ `${index}-${tag}-horizontal-tag` }>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

DoneRecipeCard.propTypes = {
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

export default DoneRecipeCard;
