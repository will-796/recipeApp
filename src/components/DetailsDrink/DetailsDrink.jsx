import PropTypes from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useHistory } from 'react-router-dom';

const DetailsDrink = ({ recipeData, recommendations }) => {
  const history = useHistory();
  const renderButton = !JSON.parse(
    localStorage.getItem('doneRecipes') || '[]',
  ).some((recipe) => recipe.id === recipeData.idDrink);

  const recipeInProgress = !Object.keys(
    JSON.parse(localStorage.getItem('inProgressRecipes') || '{}'),
  ).some((id) => id === recipeData.idDrink);

  const ingredientsKeys = Object.keys(recipeData || {}).filter(
    (key) => key.includes('strIngredient') && recipeData[key],
  );
  return (
    <div>
      <img
        width="100%"
        src={ recipeData.strDrinkThumb }
        alt={ recipeData.strDrink }
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-title">{recipeData.strDrink}</p>
      <p data-testid="recipe-category">{recipeData.strAlcoholic}</p>

      {ingredientsKeys.map((key, index) => (
        <p key={ key } data-testid={ `${index}-ingredient-name-and-measure` }>
          {`${recipeData[`strIngredient${index + 1}`]} - ${
            recipeData[`strMeasure${index + 1}`] || ''
          }`}
        </p>
      ))}
      <Swiper slidesPerView={ 1 }>
        {recommendations
          .filter((_, index) => index < +'6')
          .map((recommendation, index) => (
            <SwiperSlide
              key={ index }
              data-testid={ `${index}-recomendation-card` }
              onClick={ () => history.push(`/foods/${recommendation.idMeal}`) }
            >
              <img
                width="100%"
                src={ recommendation.strMealThumb }
                alt={ recommendation.strMeal }
                data-testid="recipe-photo"
              />
              <p data-testid={ `${index}-recomendation-title` }>
                {recommendation.strMeal}
              </p>
            </SwiperSlide>
          ))}
      </Swiper>
      <p data-testid="instructions">{recipeData.strInstructions}</p>
      {renderButton && (
        <button
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`/drinks/${recipeData.idDrink}/in-progress`) }
        >
          {recipeInProgress ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      )}
    </div>
  );
};

DetailsDrink.propTypes = {
  recipeData: PropTypes.shape({
    idDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strDrink: PropTypes.string,
    strInstructions: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strYoutube: PropTypes.string,
  }).isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DetailsDrink;
