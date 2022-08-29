import React from 'react';
import { screen } from '@testing-library/react'
import renderWithRouter from './utils/renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from '../App';
import fetchMock from './utils/fetchmock';

beforeEach(()=> {
  global.fetch = jest.fn(fetchMock)
})

describe('Testa a tela de Receitas', () => {
  test('Testa na página de Foods', async() => {
    renderWithRouter(<App />)
    const email = screen.getByTestId("email-input")
    const senha = screen.getByTestId("password-input")

    const EMAIL_USER = 'testes@testando.com'
    const SENHA_USER = '1234567'

    userEvent.type(email, EMAIL_USER)
    userEvent.type(senha, SENHA_USER)

    const loginButton = screen.getByTestId("login-submit-btn");
    userEvent.click(loginButton);

    const renderFoods = await screen.findByText("Foods")
    expect(renderFoods).toBeInTheDocument()

    const buttonBeef = await screen.findByTestId("Beef-category-filter")
    expect(buttonBeef).toBeInTheDocument()

    const buttonBreakfast = await screen.findByTestId("Breakfast-category-filter")
    expect(buttonBreakfast).toBeInTheDocument()

    const buttonChicken = await screen.findByTestId("Chicken-category-filter")
    expect(buttonChicken).toBeInTheDocument()

    const buttonDessert = await screen.findByTestId("Dessert-category-filter")
    expect(buttonDessert).toBeInTheDocument()

    const buttonGoat = await screen.findByTestId("Goat-category-filter")
    expect(buttonGoat).toBeInTheDocument()

    userEvent.click(buttonDessert)

  })

  test('Testa na página de Drinks', async() => {
    renderWithRouter(<App />)
    const iconDrink = await screen.findByAltText("drink icon")
    expect(iconDrink).toBeInTheDocument()
    userEvent.click(iconDrink)

    const renderDrinks = await screen.findByText("Drinks")
    expect(renderDrinks).toBeInTheDocument()

    const buttonOrdinaryDrink = await screen.findByTestId("Ordinary Drink-category-filter")
    expect(buttonOrdinaryDrink).toBeInTheDocument()

    const buttonCocktail = await screen.findByTestId("Cocktail-category-filter")
    expect(buttonCocktail).toBeInTheDocument()

    const buttonShake = await screen.findByTestId("Shake-category-filter")
    expect(buttonShake).toBeInTheDocument()

    const buttonOtherUnknown = await screen.findByTestId("Other/Unknown-category-filter")
    expect(buttonOtherUnknown).toBeInTheDocument()

    const buttonCocoa = await screen.findByTestId("Cocoa-category-filter")
    expect(buttonCocoa).toBeInTheDocument()

    userEvent.click(buttonShake)

  })
})