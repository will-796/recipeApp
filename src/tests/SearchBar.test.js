import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import fetchMock from "./utils/fetchmock";
import renderWithRouter from "./utils/renderWithRouter";
import onlyOnePizza from "./mocks/onlyOnePizza";

describe("Testes do componente SearchBar", () => {
  test("Testa se a barra de busca funciona na tela foods para ingredientes", async () => {
    const { history } = renderWithRouter(<App />);
    const email = screen.getByTestId("email-input");
    const senha = screen.getByTestId("password-input");
    const EMAIL_USER = "testes@testando.com";
    const SENHA_USER = "1234567";
    userEvent.type(email, EMAIL_USER);
    userEvent.type(senha, SENHA_USER);
    const loginButton = screen.getByTestId("login-submit-btn");
    expect(loginButton).toBeInTheDocument();
    userEvent.click(loginButton);
    const searchIcon = screen.getByRole("button", {
      name: /searchicon/i,
    });
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "Chicken");
    const ingredientRadio = screen.getByRole("radio", { name: /ingredient/i });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods para nomes", async () => {
    const { history } = renderWithRouter(<App />);
    const searchIcon = screen.getByRole("button", {
      name: /searchicon/i,
    });
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "soup");
    const ingredientRadio = screen.getByRole("radio", { name: /name/i });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods pela primeira letra", async () => {
    const { history } = renderWithRouter(<App />);
    const searchIcon = screen.getByRole("button", {
      name: /searchicon/i,
    });
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "a");
    const ingredientRadio = screen.getByRole("radio", {
      name: /first letter/i,
    });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });
  test("Testa se a barra de busca funciona na tela foods pela primeira letra com mais de uma letra", async () => {
    const { history } = renderWithRouter(<App />);

    const searchIcon = screen.getByRole("button", {
      name: /searchicon/i,
    });
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "aa");
    const ingredientRadio = screen.getByTestId("first-letter-search-radio");
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods pela primeira letra com mais de uma letra", async () => {
    const { history } = renderWithRouter(<App />);

    const searchIcon = screen.getByRole("button", {
      name: /searchicon/i,
    });
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "xablau");
    const ingredientRadio = screen.getByRole("radio", {
      name: /name/i,
    });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods para ingredientes", async () => {
    const { history } = renderWithRouter(<App />);
    userEvent.click(screen.getByTestId("drinks-bottom-btn"));
    await waitFor(() =>
      expect(
        screen.getByRole("heading", {
          name: /drinks/i,
        })
      ).toBeInTheDocument()
    );
    const searchIcon = screen.getByRole("button", {
      name: /searchicon/i,
    });
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "vodka");
    const ingredientRadio = screen.getByRole("radio", { name: /ingredient/i });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods para nomes", async () => {
    const { history } = renderWithRouter(<App />);
    console.log(history.location.pathname);
    const searchIcon = screen.getByRole("button", {
      name: /searchicon/i,
    });
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "lemon");
    const ingredientRadio = screen.getByRole("radio", { name: /name/i });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods pela primeira letra", async () => {
    const { history } = renderWithRouter(<App />);
    const searchIcon = screen.getByRole("button", {
      name: /searchicon/i,
    });
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "l");
    const ingredientRadio = screen.getByRole("radio", {
      name: /first letter/i,
    });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });
  test("Testa se a barra de busca funciona na tela foods pela primeira letra com mais de uma letra", async () => {
    const { history } = renderWithRouter(<App />);

    const searchIcon = screen.getByRole("button", {
      name: /searchicon/i,
    });
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "ll");
    const ingredientRadio = screen.getByTestId("first-letter-search-radio");
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods pela primeira letra com mais de uma letra", async () => {
    const { history } = renderWithRouter(<App />);
    const searchIcon = screen.getByRole("button", {
      name: /searchicon/i,
    });
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "xablau");
    const ingredientRadio = screen.getByRole("radio", {
      name: /name/i,
    });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
    jest.spyOn(window, "alert").mockImplementation(() => {});
    await waitFor(() => expect(window.alert).toHaveBeenCalled());
  });

  // test("Testa se a barra de busca funciona na tela foods pela primeira letra com mais de uma letra", async () => {
  //   const { history } = renderWithRouter(<App />);

  //   const searchIcon = screen.getByRole("button", {
  //     name: /searchicon/i,
  //   });
  //   userEvent.click(searchIcon);
  //   const searchInput = screen.getByTestId("search-input");
  //   userEvent.type(searchInput, "pizza");
  //   const ingredientRadio = screen.getByRole("radio", {
  //     name: /name/i,
  //   });
  //   const searchButton = screen.getByTestId("exec-search-btn");
  //   userEvent.click(ingredientRadio);
  //   const a = screen.getByText(/to com fome/i)
  //   userEvent.click(searchButton);
  //   await waitFor(() =>
  //     expect(a).not.toBeInTheDocument()
  //   );
  // });

  // test("Testa se a barra de busca funciona na tela foods pela primeira letra com mais de uma letra", async () => {
  //   const { history } = renderWithRouter(<App />);
  //   const searchIcon = screen.getByRole("button", {
  //     name: /searchicon/i,
  //   });
  //   userEvent.click(searchIcon);
  //   const searchInput = screen.getByTestId("search-input");
  //   userEvent.type(searchInput, "aa");
  //   const ingredientRadio = screen.getByRole("radio", {
  //     name: /first letter/i,
  //   });
  //   const searchButton = screen.getByTestId("exec-search-btn");
  //   userEvent.click(ingredientRadio);
  //   userEvent.click(searchButton);
  // });
});
