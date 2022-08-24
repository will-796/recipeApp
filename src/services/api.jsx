const fetchApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchData = async (type) => {
  if (type === 'Foods') {
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const foods = await fetchApi(url);
    url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const foodsCategory = await fetchApi(url);
    return { foods, foodsCategory };
  }
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const drinks = await fetchApi(url);
  url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const drinksCategory = await fetchApi(url);
  return { drinks, drinksCategory };
};

export const fetchFilter = async (type, filter) => {
  let url;
  if (filter) {
    if (type === 'Foods') {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`;
    } else {
      url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`;
    }
    const result = await fetchApi(url);
    return result;
  }
};
