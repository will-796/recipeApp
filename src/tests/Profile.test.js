import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "./utils/renderWithRouter";
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa se tela de Perfil ...', () =>{
    test('Funciona corretamente', async () => {
        const { history } = renderWithRouter(<App />)
        /* const { pathname } = history.location; */
        /* expect(history.location.pathname).toBe('/'); */

        const email = screen.getByTestId("email-input")
        const senha = screen.getByTestId("password-input")

        const EMAIL_USER = 'testes@testando.com'
        const SENHA_USER = '1234567'

        userEvent.type(email, EMAIL_USER)
        userEvent.type(senha, SENHA_USER)

        const loginButton = screen.getByTestId("login-submit-btn");
        userEvent.click(loginButton);
        
       /*  expect(history.location.pathname).toBe('/foods'); */

        const iconProfile = await screen.findByAltText("Profile");
        expect(iconProfile).toBeInTheDocument();

        userEvent.click(iconProfile);
        /* expect(history.location.pathname).toBe('/profile'); */

        const emailInProfile = screen.getByTestId('profile-email');
        const buttonLogout = screen.getByTestId("profile-logout-btn");
        const buttonDone = screen.getByTestId('profile-done-btn');
        const buttonFavorite = screen.getByTestId('profile-favorite-btn')

        expect(emailInProfile).toBeInTheDocument()
        expect(buttonLogout).toBeInTheDocument()
        expect(buttonDone).toBeInTheDocument()
        expect(buttonFavorite).toBeInTheDocument()

        userEvent.click(buttonLogout);
        expect(localStorage.getItem('user')).toBeNull();
    })

    test('Botão Favorite Recipes', async () => {
        const { history } = renderWithRouter(<App />)

        const email = screen.getByTestId("email-input")
        const senha = screen.getByTestId("password-input")

        const EMAIL_USER = 'testes@testando.com'
        const SENHA_USER = '1234567'

        userEvent.type(email, EMAIL_USER)
        userEvent.type(senha, SENHA_USER)

        const loginButton = screen.getByTestId("login-submit-btn");
        userEvent.click(loginButton);

        const iconProfile = await screen.findByAltText("Profile");
        expect(iconProfile).toBeInTheDocument();
        userEvent.click(iconProfile);

        const buttonFavorite = await screen.findByTestId('profile-favorite-btn')
        userEvent.click(buttonFavorite);

        const favoriteRecipesTitle = screen.getByTestId('page-title');
        expect(favoriteRecipesTitle).toBeInTheDocument();

        expect(iconProfile).toBeInTheDocument();

    });

    test('Botão Done Recipes', async () => {
        const { history } = renderWithRouter(<App />)
        const iconProfile = await screen.findByAltText("Profile");
        userEvent.click(iconProfile);

        const buttonDone = screen.getByTestId('profile-done-btn');
        userEvent.click(buttonDone);

        const doneRecipesTitle = screen.getByTestId('page-title');
        expect(doneRecipesTitle).toBeInTheDocument();

        expect(iconProfile).toBeInTheDocument();

    });

    test('Renderiza corretamente o Footer', async () => {
        renderWithRouter(<App />)

        const iconProfile = await screen.findByAltText("Profile");
        userEvent.click(iconProfile);

        expect(screen.getByTestId("footer")).toBeInTheDocument();
    })
})