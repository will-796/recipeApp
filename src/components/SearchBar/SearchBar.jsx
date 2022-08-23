import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import context from '../../context';

const SearchBar = () => {
  const { pageName, setApiData } = useContext(context);

  const [radioValue, setRadioValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const history = useHistory();

  const fetchApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.meals === null || data.drinks === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else {
      setApiData(data);
      if (pageName === 'Foods' && data.meals.length === 1) {
        history.push(`/foods/${data.meals[0].idMeal}`);
      }
      if (pageName === 'Drinks' && data.drinks.length === 1) {
        history.push(`/drinks/${data.drinks[0].idDrink}`);
      }
    }
  };
  console.log(pageName);

  const fetchFoods = () => {
    if (radioValue === 'ingredient') {
      fetchApi(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`,
      );
    }
    if (radioValue === 'name') {
      fetchApi(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
      );
    }
    if (radioValue === 'first-letter') {
      if (inputValue.length !== 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        fetchApi(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`,
        );
      }
    }
  };

  const fetchDrinks = () => {
    if (radioValue === 'ingredient') {
      fetchApi(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue}`,
      );
    }
    if (radioValue === 'name') {
      fetchApi(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`,
      );
    }
    if (radioValue === 'first-letter') {
      if (inputValue.length !== 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        fetchApi(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`,
        );
      }
    }
  };

  const handleChange = async () => {
    if (pageName === 'Foods') {
      fetchFoods();
    } else {
      fetchDrinks();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={ inputValue }
        data-testid="search-input"
        onChange={ (e) => setInputValue(e.target.value) }
      />
      <label htmlFor="ingredient">
        ingredient
        <input
          type="radio"
          name="search-radio"
          id="ingredient"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ (e) => setRadioValue(e.target.value) }
        />
      </label>
      <label htmlFor="name">
        name
        <input
          type="radio"
          name="search-radio"
          id="name"
          value="name"
          data-testid="name-search-radio"
          onChange={ (e) => setRadioValue(e.target.value) }
        />
      </label>
      <label htmlFor="first-letter">
        first letter
        <input
          type="radio"
          name="search-radio"
          value="first-letter"
          id="first-letter"
          data-testid="first-letter-search-radio"
          onChange={ (e) => setRadioValue(e.target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleChange }
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
