import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';
import Foods from '../pages/Foods/Foods';
import userEvent from '@testing-library/user-event';

describe('Testes do componente Header', () => {
  // test('Testa se é exibido algum nome no Header', () => {
  //   renderWithRouter(<App />)
  //   const nameHeader = screen.getByTestId("page-title");
  //   expect(nameHeader).toBeInTheDocument();
  // })
  // test('Testa se tem as imagens', () => {
  //   renderWithRouter(<App />)
  //   const searchImage = screen.getByRole("img", { name: /searchicon/i });
  //   expect(searchImage).toBeInTheDocument()
  // })
  test('Testa se vai para a rota profile', async() => {
    // const { history } = renderWithRouter(<App />, '/foods')
    // const profileRoute = screen.getByTestId("profile-top-btn");
    // expect(profileRoute).toBeInTheDocument()
    // userEvent.click(profileRoute)
    // const { pathName } = history.location;
    // expect(pathName).toBe('/profile')
    const { history } = renderWithRouter(<App />)
    const email = screen.getByTestId("email-input")
    const senha = screen.getByTestId("password-input")
    const EMAIL_USER = 'testes@testando.com'
    const SENHA_USER = '1234567'
    userEvent.type(email, EMAIL_USER)
    userEvent.type(senha, SENHA_USER)
    const loginButton = screen.getByTestId("login-submit-btn");
    expect(loginButton).toBeInTheDocument()
    userEvent.click(loginButton);
    // const { pathname } = history.location;
    // expect(pathname).toBe('/foods');
    // const * = await screen.findByText(**);
  })
})