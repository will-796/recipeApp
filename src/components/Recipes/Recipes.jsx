import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context';
import { fetchFilter } from '../../services/api';
import './Recipes.css';

function Recipes() {
  const numberOfCards = 12;
  const numberOfFilters = 5;
  const {
    apiData,
    apiDataCategory,
    pageName,
  } = useContext(Context);

  const [recipesResult, setRecipesResult] = useState([]);
  const [categoriesResult, setCategoriesResult] = useState([]);
  const [categoriesFilter, setCategoriesFilter] = useState('');

  useEffect(() => {
    if (apiDataCategory && apiDataCategory.meals) {
      setCategoriesResult(apiDataCategory.meals.slice(0, numberOfFilters));
    }
    if (apiDataCategory && apiDataCategory.drinks) {
      setCategoriesResult(apiDataCategory.drinks.slice(0, numberOfFilters));
    }
    // eslint-disable-next-line
  }, [apiDataCategory]);

  const firstRecipes = () => {
    // console.log(apiData, 'apiData Slice');
    if (apiData.meals) {
      setRecipesResult(apiData.meals.slice(0, numberOfCards));
    }
    if (apiData.drinks) {
      setRecipesResult(apiData.drinks.slice(0, numberOfCards));
    }
  };

  useEffect(() => {
    firstRecipes();
    // eslint-disable-next-line
  }, [apiData]);

  const handleCategoryFilter = async (category) => {
    let categoriesFilterResult = '';

    if (categoriesFilter !== category) {
      categoriesFilterResult = category;
    }

    setCategoriesFilter(categoriesFilterResult);
    if (!categoriesFilterResult.length || !category) {
      firstRecipes();
    } else {
      const response = await fetchFilter(pageName, categoriesFilterResult);
      if (response.meals) {
        setRecipesResult(response.meals.slice(0, numberOfCards));
        // firstRecipesResult();
        console.log(recipesResult);
        return;
      }
      setRecipesResult(response.drinks.slice(0, numberOfCards));
      // firstRecipesResult();
    }
  };

  return (
    <div>
      <h2>Filters</h2>
      <div>
        {
          categoriesResult.length > 0 && categoriesResult.map((category) => (
            <button
              key={ category.strCategory }
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ () => handleCategoryFilter(category.strCategory) }
            >
              {category.strCategory}
            </button>
          ))
        }
        <button
          data-testid="All-category-filter"
          type="button"
          onClick={ handleCategoryFilter }
        >
          All
        </button>
      </div>
      <h1>Recipes</h1>
      <div className="cards">
        {
          recipesResult.length > 0 && recipesResult.map((elem, index) => (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <img
                width="230px"
                data-testid={ `${index}-card-img` }
                src={ elem.strMealThumb || elem.strDrinkThumb }
                alt={ elem.strMeal || elem.strDrink }
              />
              <h3
                data-testid={ `${index}-card-name` }
              >
                {elem.strMeal || elem.strDrink}
              </h3>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Recipes;
