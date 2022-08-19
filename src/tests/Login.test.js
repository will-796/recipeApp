import React from 'react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Testes da Tela de Login', () => {
  test('Testando os inputs', () => {
    render(<App />)
    const inputEmail = screen.getByTestId("email-input");
    userEvent.type(inputEmail, 'teste@testando.com');
    const inputPassword = screen.getByTestId("password-input");
    userEvent.type(inputPassword, '1234567')
    const buttonLogin = screen.getByTestId("login-submit-btn")
    userEvent.click(buttonLogin)
  })
})