import React from 'react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Testes da Tela de Login', () => {
  test('Testando os inputs', () => {
    render(<App />)
    const inputEmail = screen.getByRole("textbox");
    userEvent.type(inputEmail, 'teste@testando.com');
    const inputPassword = screen.getByRole("textbox");
    userEvent.type(inputPassword, '123456')
  })
})