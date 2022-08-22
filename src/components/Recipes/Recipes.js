import React, { useContext, useEffect, useState } from 'react';
import Context from 'react-bootstrap/esm/AccordionContext';
// import RecipesCard from './RecipesCard';

function Recipes() {
  const numberOfCards = 12;
  const numberOfFilters = 5;
  const {
    apiDataFoods,
    apiDataDrinks,
    apiDataCategoryFoods,
    apiDataCategoryDrinks,
  } = useContext(Context);

  const [recipesResult, setRecipesResult] = useState();
  const [categoriesResult, setCategoriesResult] = useState();
  const [categoriesFilters, setCategoriesFilters] = useState();

  useEffect(() => {
    setCategoriesResult(apiDataCategoryFoods.slice(0, numberOfFilters));
    // eslint-disable-next-line
  }, [apiDataCategoryFoods]);

  useEffect(() => {
    setCategoriesResult(apiDataCategoryDrinks.slice(0, numberOfFilters));
    // eslint-disable-next-line
  }, [apiDataCategoryDrinks]);

  useEffect(() => {
    setRecipesResult(apiDataFoods.slice(0, numberOfCards));
    // eslint-disable-next-line
  }, [apiDataFoods]);

  useEffect(() => {
    setRecipesResult(apiDataDrinks.slice(0, numberOfCards));
    // eslint-disable-next-line
  }, [apiDataDrinks]);

  useEffect(() => {
    if (categoriesFilters.length) {
      categoriesFilters.forEach((filter) => {
        const recipes = recipesResult.filter((recipe) => filter === recipe.categoryName);
        setRecipesResult(recipes);
      });
    }
    // eslint-disable-next-line
  }, [categoriesFilters]);

  const handleCategoryFilter = (category) => {
    setCategoriesFilters((prev) => {
      if (prev.some((filter) => filter !== category)) {
        return [...prev, category];
      }
      return prev.filter((filter) => filter !== category);
    });
  };

  return (
    <div>
      <h2>Filters</h2>
      <div>
        {
          categoriesResult.length && categoriesResult.map((category) => (
            <button
              key={ category.categoryName }
              type="button"
              data-testid={ `${category.categoryName}-category-filter` }
              onClick={ () => handleCategoryFilter(category.categoryName) }
            >
              {category.categoryName}
            </button>
          ))
        }
      </div>
      <h1>Recipes</h1>
      {
        recipesResult.length && recipesResult.forEach((elem, index) => {
          <div data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-recipe-card` }
              src={ elem.strMealThumb || elem.strDrinkThumb }
              alt={ elem.strMeal || elem.strDrink }
            />
            <h2
              data-testid={ `${index}-card-name` }
            >
              {elem.strMeal || elem.strDrink}
            </h2>
          </div>;
        })
      }

    </div>
  );
}

export default Recipes;
