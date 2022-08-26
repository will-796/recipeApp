import PropTypes from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useHistory } from 'react-router-dom';

const DetailsFood = ({ recipeData, recommendations }) => {
  const history = useHistory();
  const renderButton = !JSON.parse(
    localStorage.getItem('doneRecipes') || '[]',
  ).some((recipe) => recipe.id === recipeData.idMeal);
  const recipeInProgress = !Object.keys(
    JSON.parse(localStorage.getItem('inProgressRecipes') || '{}'),
  ).some((id) => id === recipeData.idMeal);

  const ingredientsKeys = Object.keys(recipeData || {}).filter(
    (key) => key.includes('strIngredient') && recipeData[key],
  );
  return (
    <div>
      <img
        width="100%"
        src={ recipeData.strMealThumb }
        alt={ recipeData.strMeal }
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-title">{recipeData.strMeal}</p>
      <p data-testid="recipe-category">{recipeData.strCategory}</p>

      {ingredientsKeys.map((key, index) => (
        <p key={ key } data-testid={ `${index}-ingredient-name-and-measure` }>
          {`${recipeData[`strIngredient${index + 1}`]} - ${
            recipeData[`strMeasure${index + 1}`]
          }`}
        </p>
      ))}
      <p data-testid="instructions">{recipeData.strInstructions}</p>
      <iframe
        width="420"
        height="315"
        src={ `https://www.youtube.com/embed/${
          recipeData.strYoutube?.split('=')[1]
        }` }
        title={ recipeData.strMeal }
        data-testid="video"
      />
      <Swiper slidesPerView={ 1 }>
        {recommendations
          .filter((_, index) => index < +'6')
          .map((recommendation, index) => (
            <SwiperSlide
              key={ index }
              data-testid={ `${index}-recomendation-card` }
              onClick={ () => history.push(`/drinks/${recommendation.idDrink}`) }
            >
              <img
                width="100%"
                src={ recommendation.strDrinkThumb }
                alt={ recommendation.strDrink }
                data-testid="recipe-photo"
              />
              <p data-testid={ `${index}-recomendation-title` }>
                {recommendation.strDrink}
              </p>
            </SwiperSlide>
          ))}
      </Swiper>
      {renderButton && (
        <button
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => { history.push(`/foods/${recipeData.idMeal}/in-progress`); } }
        >
          {recipeInProgress ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      )}
    </div>
  );
};

DetailsFood.propTypes = {
  recipeData: PropTypes.shape({
    idMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strYoutube: PropTypes.string,
  }).isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DetailsFood;
