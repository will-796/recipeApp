import mealCategories from "../mocks/mealCategories";
import drinkCategories from "../mocks/drinkCategories";
import mealIngredients from "../mocks/mealIngredients";
import mealsByIngredient from "../mocks/mealsByIngredient";
import drinkIngredients from "../mocks/drinkIngredients";
import drinksByIngredient from "../mocks/drinksByIngredient";
import areas from "../mocks/areas";
import japaneseMeals from "../mocks/japaneseMeals";
import italianMeals from "../mocks/italianMeals";
import oneMeal from "../mocks/oneMeal";
import oneDrink from "../mocks/oneDrink";
import oneDrinkId15997 from "../mocks/oneDrinkId15997";
import soupMeals from "../mocks/soupMeals";
import beefMeals from "../mocks/beefMeals";
import breakfastMeals from "../mocks/breakfastMeals";
import chickenMeals from "../mocks/chickenMeals";
import dessertMeals from "../mocks/dessertMeals";
import goatMeals from "../mocks/goatMeals";
import emptyMeals from "../mocks/emptyMeals";
import ginDrinks from "../mocks/ginDrinks";
import ordinaryDrinks from "../mocks/ordinaryDrinks";
import cocktailDrinks from "../mocks/cocktailDrinks";
import milkDrinks from "../mocks/milkDrinks";
import otherDrinks from "../mocks/otherDrinks";
import cocoaDrinks from "../mocks/cocoaDrinks";
import emptyDrinks from "../mocks/emptyDrinks";
import drinks from "../mocks/drinks";
import meals from "../mocks/meals";

const fetchMock = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      return Promise.resolve(mealCategories);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      return Promise.resolve(drinkCategories);

    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      return Promise.resolve(mealIngredients);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?i=Chicken')
      return Promise.resolve(mealsByIngredient);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      return Promise.resolve(drinkIngredients);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Light rum')
      return Promise.resolve(drinksByIngredient);

    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      return Promise.resolve(areas);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese')
      return Promise.resolve(japaneseMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian')
      return Promise.resolve(italianMeals);

    if (
      url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata' ||
      url === 'https://www.themealdb.com/api/json/v1/1/random.php' ||
      url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771' ||
      url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977'
    )
      return Promise.resolve(oneMeal);

    if (
      url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Aquamarine' ||
      url === 'https://www.thecocktaildb.com/api/json/v1/1/random.php' ||
      url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319'
    )
      return Promise.resolve(oneDrink);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997')
      return Promise.resolve(oneDrinkId15997);

    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=soup')
      return Promise.resolve(soupMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
      return Promise.resolve(beefMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
      return Promise.resolve(breakfastMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
      return Promise.resolve(chickenMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
      return Promise.resolve(dessertMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat')
      return Promise.resolve(goatMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=xablau')
      return Promise.resolve(emptyMeals);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin')
      return Promise.resolve(ginDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink')
      return Promise.resolve(ordinaryDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      return Promise.resolve(cocktailDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shake')
      return Promise.resolve(milkDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other/Unknown')
      return Promise.resolve(otherDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocoa')
      return Promise.resolve(cocoaDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=xablau')
      return Promise.resolve(emptyDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      return Promise.resolve(drinks);

    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=')
      return Promise.resolve(meals);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=ll')
      return Promise.resolve(drinks);

    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?f=aa')
      return Promise.resolve(meals);

    return Promise.reject(new Error('Invalid url'));
  },
});

export default fetchMock