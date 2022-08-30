import React from "react";
import { screen, waitFor } from "@testing-library/react";
import renderWithRouter from "./utils/renderWithRouter";
import userEvent from "@testing-library/user-event";
import App from "../App";
import RecipeInProgress from "../pages/RecipeInProgress/RecipeInProgress";
import Provider from "../context/Provider";
import localStorageMock from "./utils/localStorageMock";
import fetchMock from "./utils/fetchmock";
import oneDrink from "./mocks/oneDrink";
import Routes from "../routes/Routes";

const ingredients = {
  53014: ["Water", "Sugar"],
};

beforeAll(() => {
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock(),
  });
});

describe("Testa a tela de Receitas", () => {
  window.localStorage.clear();
  test("Testa se renderiza o botão de favoritos em Foods", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(oneDrink),
    });
    const { history } = renderWithRouter(
      <Provider>
        <RecipeInProgress isFood={false} />
      </Provider>
    );
    history.push("/drinks/178319/in-progress");

    await waitFor(() => expect(fetch).toBeCalled());
    expect(
      screen.getByRole("heading", {
        name: /aquamarine/i,
      })
    ).toBeInTheDocument();

    const firstCheckboxIngredient = screen.getByRole("checkbox", {
      name: /hpnotiq \- 2 oz/i,
    });
    const secondCheckboxIngredient = screen.getByRole("checkbox", {
      name: /pineapple juice \- 1 oz/i,
    });
    const thirdCheckboxIngredient = screen.getByRole("checkbox", {
      name: /banana liqueur \- 1 oz/i,
    });
    userEvent.click(firstCheckboxIngredient);
    userEvent.click(secondCheckboxIngredient);
    userEvent.click(thirdCheckboxIngredient);
    userEvent.click(thirdCheckboxIngredient);
    userEvent.click(thirdCheckboxIngredient);

    const finishRecipe = await screen.findByTestId("finish-recipe-btn");
    userEvent.click(finishRecipe);
  });
});
