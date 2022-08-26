import React from 'react';
import { screen } from '@testing-library/react'
import renderWithRouter from './utils/renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa o componente FavoriteButton', () => {
  const favoriteLocalStorage = {
    favoriteRecipes: [{
      alcoholicOrNot: "",
      category: "Miscellaneous",
      id: "53014",
      image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
      name: "Pizza Express Margherita",
      nationality: "Italian",
      type: "food",
    }]
  }

  test('Testa se renderiza o botão de favoritos em Foods', async() => {
    renderWithRouter(<App />, favoriteLocalStorage)
    const email = screen.getByTestId("email-input")
    const senha = screen.getByTestId("password-input")

    const EMAIL_USER = 'testes@testando.com'
    const SENHA_USER = '1234567'

    userEvent.type(email, EMAIL_USER)
    userEvent.type(senha, SENHA_USER)

    const loginButton = screen.getByTestId("login-submit-btn");
    userEvent.click(loginButton);

    const iconSearch = await screen.findByAltText("SearchIcon");
    expect(iconSearch).toBeInTheDocument();

    userEvent.click(iconSearch);

    const searchInput = await screen.findByTestId("search-input")
    userEvent.type(searchInput, 'pizza')
    
    const nameInputRadio = await screen.findByTestId("name-search-radio")
    userEvent.type(nameInputRadio)

    const buttonSearch = await screen.findByTestId("exec-search-btn")
    userEvent.click(buttonSearch)

    const favoriteButton = await screen.findByTestId("favorite-btn")
    expect(favoriteButton).toBeInTheDocument()
    userEvent.click(favoriteButton)

    const blackHeartIcon = await screen.findByAltText("blackHeartIcon")
    expect(blackHeartIcon).toBeInTheDocument() 

  })
  test('Testa o LocalStorage das Receitas Favoritadas em Foods', async() => {
    renderWithRouter(<App />, favoriteLocalStorage)
    localStorage.clear()
    expect(localStorage.getItem('favoriteRecipes')).toBeNull();

    const favoriteButton = await screen.findByTestId("favorite-btn")
    expect(favoriteButton).toBeInTheDocument()
    userEvent.click(favoriteButton)
    userEvent.click(favoriteButton)

    const localSet = localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteLocalStorage.favoriteRecipes))

    const localSto = JSON.parse(localStorage.getItem('favoriteRecipes'))
    console.log(localSto);

  })
})

describe('Testa o componente FavoriteButton', () => {
  const favoriteLocalStorage2 = {
    favoriteRecipes: [{
      alcoholicOrNot: "Optional alcohol",
      category: "Ordinary Drink",
      id: "15997",
      image: "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
      name: "GG",
      nationality: "",
      type: "drink",
  }]
}

  test('Testa se renderiza o botão de favoritos em Drinks', async() => {
    renderWithRouter(<App />, favoriteLocalStorage2)
    
    const iconDrinkId = await screen.findByAltText("GG")
    expect(iconDrinkId).toBeInTheDocument()
    userEvent.click(iconDrinkId)
    
    const favoriteButton = await screen.findByTestId("favorite-btn")
    expect(favoriteButton).toBeInTheDocument()
    userEvent.click(favoriteButton)

    localStorage.clear()
    expect(localStorage.getItem('favoriteRecipes')).toBeNull();

    userEvent.click(favoriteButton)
    userEvent.click(favoriteButton)

    const localSet = localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteLocalStorage2.favoriteRecipes))

    const localSto = JSON.parse(localStorage.getItem('favoriteRecipes'))
    console.log(localSto);

  })
})