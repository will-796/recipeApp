import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import userEvent from '@testing-library/user-event';
import DoneRecipes from '../pages/DoneRecipes/DoneRecipes';
import Provider from '../context/Provider';
import localStorageMock from './utils/localStorageMock';
import FavoriteRecipes from '../pages/FavoriteRecipes/FavoriteRecipes';

const favoriteRecipes = [
  {
    id: '52771',
    type: 'food',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot:  'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  },
];

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock(),
  });
  Object.defineProperty(navigator, "clipboard", {
    value: {
      writeText: () => {},
    },
  });
});

describe('Testes da pagina doneRecipes', () => {
  test('Testa se renderiza as receitas a partir do localStorage', async() => {
    window.localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes))
    renderWithRouter(<Provider><FavoriteRecipes /></Provider> )
    const foodImage = screen.getByTestId('0-horizontal-image')
    const drinkImage = screen.getByTestId('1-horizontal-image')
    expect(foodImage).toBeInTheDocument()
    expect(drinkImage).toBeInTheDocument()
  })
  test('Testa se renderiza as receitas a partir do localStorage', async() => {
    window.localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes))
    renderWithRouter(<Provider><FavoriteRecipes /></Provider> )
    const foodImage = screen.getByRole('img', {
      name: /spicy arrabiata penne/i
    })
    const drinkImage = screen.getByRole('img', {
      name: /aquamarine/i
    })
    expect(foodImage).toBeInTheDocument()
    expect(drinkImage).toBeInTheDocument()
    userEvent.click(screen.getByTestId('0-horizontal-share-btn'))
    userEvent.click(screen.getByTestId('0-horizontal-favorite-btn'))
    const btnFood =  screen.getByTestId('filter-by-food-btn')
    const btnDrink = screen.getByTestId('filter-by-drink-btn')
    const btnAll = screen.getByTestId('filter-by-all-btn')
    userEvent.click(btnFood)
    expect(foodImage).toBeInTheDocument()
    expect(drinkImage).not.toBeInTheDocument()
    userEvent.click(btnDrink)
    userEvent.click(btnAll)
  })
})