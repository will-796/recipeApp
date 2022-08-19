import React from 'react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Testes da Tela de Login', () => {
  test('Testando os inputs', () => {
    render(<App />)
    const inputEmail = screen.getByTestId("email-input");
    const inputPassword = screen.getByTestId("password-input");
    const submitButton = screen.getByRole('button', { name: /login/i })
    userEvent.type(inputEmail, 'teste@testando.com');
    userEvent.type(inputPassword, '1234567')
    const buttonLogin = screen.getByTestId("login-submit-btn")
    userEvent.click(buttonLogin)
    // console.log(screen.logTestingPlaygroundURL());
    expect(submitButton).toBeEnabled();
  })

  test('Testar se o usuário é direcionado para a página de receitas', () => {
    render(<App />)
    const inputEmail = screen.getByTestId("email-input");
    const inputPassword = screen.getByTestId("password-input");
    const submitButton = screen.getByRole('button', { name: /login/i })
    userEvent.type(inputEmail, 'teste@testando.com');
    userEvent.type(inputPassword, '1234567')
    const buttonLogin = screen.getByTestId("login-submit-btn")
    userEvent.click(buttonLogin)
  })
})