import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import context from '../../context';
import 'swiper/swiper-bundle.css';
import DetailsFood from '../../components/DetailsFood/DetailsFood';
import DetailsDrink from '../../components/DetailsDrink/DetailsDrink';
import './style.css';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import ShareButton from '../../components/ShareButton/ShareButton';

const RecipeDetails = ({ isFood }) => {
  const { setShowHeader, setRecipeData, recipeData } = useContext(context);
  const [recommendations, setRecommendations] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setShowHeader({
      showName: false,
      showSearch: false,
      showProfile: false,
    });

    const fetchApi = async () => {
      const url = isFood
        ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipeData(isFood ? data.meals[0] : data.drinks[0]);
    };

    fetchApi();

    const fetchApiRecommendations = async () => {
      const url = isFood
        ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
        : 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(url);
      const data = await response.json();
      setRecommendations(isFood ? data.drinks : data.meals);
    };
    fetchApiRecommendations();
  }, [id]);

  return (
    <div className="RecipeDetails">
      <FavoriteButton isFood={ isFood } recipeData={ recipeData } />
      <ShareButton isFood={ isFood } id={ id } />
      {isFood ? (
        <DetailsFood
          recipeData={ recipeData }
          recommendations={ recommendations }
        />
      ) : (
        <DetailsDrink
          recipeData={ recipeData }
          recommendations={ recommendations }
        />
      )}
    </div>
  );
};

RecipeDetails.propTypes = {
  isFood: PropTypes.bool.isRequired,
};

export default RecipeDetails;
