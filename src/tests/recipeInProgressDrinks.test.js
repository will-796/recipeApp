import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "./utils/renderWithRouter";
import userEvent from "@testing-library/user-event";
import App from "../App";
import RecipeInProgress from "../pages/RecipeInProgress/RecipeInProgress";
import Provider from "../context/Provider";
import localStorageMock from "./utils/localStorageMock";
import fetchMock from "./utils/fetchmock";
import oneDrink from "./mocks/oneDrink";

const ingredients = {
  53014: ["Water", "Sugar"],
};

beforeAll(() => {
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock(),
  });
});

describe("Testa a tela de Receitas", () => {
  window.localStorage.clear()
  test("Testa se renderiza o botão de favoritos em Foods", async () => {
    jest.fn(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(oneDrink)
    }))
    renderWithRouter(<App />);
    const email = screen.getByTestId("email-input");
    const senha = screen.getByTestId("password-input");
    
    const EMAIL_USER = "testes@testando.com";
    const SENHA_USER = "1234567";

    userEvent.type(email, EMAIL_USER);
    userEvent.type(senha, SENHA_USER);

    const loginButton = screen.getByTestId("login-submit-btn");
    userEvent.click(loginButton);

    userEvent.click(screen.getByTestId("drinks-bottom-btn"));

    const iconSearch = await screen.findByAltText("SearchIcon");
    expect(iconSearch).toBeInTheDocument();

    userEvent.click(iconSearch);

    const searchInput = await screen.findByTestId("search-input");
    userEvent.type(searchInput, "Aquamarine");

    const nameInputRadio = await screen.findByTestId("name-search-radio");
    userEvent.type(nameInputRadio);

    const buttonSearch = await screen.findByTestId("exec-search-btn");
    userEvent.click(buttonSearch);

    expect(await screen.findByText(/corba/i)).toBeInTheDocument();

    const favoriteButton = await screen.findByTestId("favorite-btn");
    expect(favoriteButton).toBeInTheDocument();
    userEvent.click(favoriteButton);

    const blackHeartIcon = await screen.findByAltText("blackHeartIcon");
    expect(blackHeartIcon).toBeInTheDocument();

    const startButton = await screen.findByTestId("start-recipe-btn");
    expect(startButton).toBeInTheDocument();
    userEvent.click(startButton);

    expect(
      await screen.findByRole("heading", { name: /Aquamarine/i })
    ).toBeInTheDocument();

    const firstCheckboxIngredient = await screen.findByTestId(
      "0-ingredient-step"
    );
    const secondCheckboxIngredient = await screen.findByTestId(
      "1-ingredient-step"
    );
    const thirdCheckboxIngredient = await screen.findByTestId(
      "2-ingredient-step"
    );
    userEvent.click(firstCheckboxIngredient);
    userEvent.click(secondCheckboxIngredient);
    userEvent.click(thirdCheckboxIngredient);
    userEvent.click(thirdCheckboxIngredient);
    userEvent.click(thirdCheckboxIngredient);

    const finishRecipe = await screen.findByTestId("finish-recipe-btn");
    userEvent.click(finishRecipe);
  });
});
