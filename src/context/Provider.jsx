import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './index';
import { fetchData } from '../services/api';

const Provider = ({ children }) => {
  const [showHeader, setShowHeader] = useState({
    showName: false,
    showSearch: false,
    showProfile: false,
  });
  const [pageName, setPageName] = useState('');
  const [showFooter, setShowFooter] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [apiDataCategory, setApiDataCategory] = useState();
  const [recipeData, setRecipeData] = useState({});

  const getApiData = async (page) => {
    const response = await fetchData(page);
    if (page === 'Foods') {
      setApiData(response.foods);
      setApiDataCategory(response.foodsCategory);
      return;
    }
    if (page === 'Drinks') {
      setApiData(response.drinks);
      setApiDataCategory(response.drinksCategory);
    }
  };

  useEffect(() => {
    getApiData(pageName);
  }, [pageName]);

  const contextValue = {
    showHeader,
    setShowHeader,
    pageName,
    setPageName,
    showFooter,
    setShowFooter,
    apiData,
    setApiData,
    apiDataCategory,
    setApiDataCategory,
    recipeData,
    setRecipeData,
  };

  return <Context.Provider value={ contextValue }>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
