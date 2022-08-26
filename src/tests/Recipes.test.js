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

    const card1 = await screen.findByAltText("Apam balik")
    const card2 = await screen.findByAltText("Apple & Blackberry Crumble")
    const card3 = await screen.findByAltText("Apple Frangipan Tart")
    const card4 = await screen.findByAltText("Bakewell tart")
    const card5 = await screen.findByAltText("Banana Pancakes")
    const card6 = await screen.findByAltText("Battenberg Cake")
    const card7 = await screen.findByAltText("BeaverTails")
    const card8 = await screen.findByAltText("Blackberry Fool")
    const card9 = await screen.findByAltText("Bread and Butter Pudding")
    const card10 = await screen.findByAltText("Budino Di Ricotta")
    const card11 = await screen.findByAltText("Canadian Butter Tarts")
    const card12 = await screen.findByAltText("Carrot Cake")
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

    const card1 = await screen.findByAltText("151 Florida Bushwacker")
    const card2 = await screen.findByAltText("Avalanche")
    const card3 = await screen.findByAltText("Baby Eskimo")
    const card4 = await screen.findByAltText("Banana Milk Shake")
    const card5 = await screen.findByAltText("Banana Strawberry Shake")
    const card6 = await screen.findByAltText("Banana Strawberry Shake Daiquiri")
    const card7 = await screen.findByAltText("Black Forest Shake")
    const card8 = await screen.findByAltText("Blind Russian")
    const card9 = await screen.findByAltText("Boozy Snickers Milkshake")
    const card10 = await screen.findByAltText("Butter Baby")
    const card11 = await screen.findByAltText("Chocolate Monkey")
    const card12 = await screen.findByAltText("Jamaica Kiss")
  })
})