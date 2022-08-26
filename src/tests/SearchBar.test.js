import React from "react";
import { screen, waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import renderWithRouter from "./utils/renderWithRouter";

import Provider from "../context/Provider";
import SearchBar from "../components/SearchBar/SearchBar";



beforeEach(()=> {
  // global.fetch = jest.fn(fetchMock)
  global.alert = jest.fn(()=>{})
})

describe("Testes do componente SearchBar", () => {
  test("Testa se a barra de busca funciona na tela foods para ingredientes", async () => {
    renderWithRouter(<Provider pageName='Foods'><SearchBar /></Provider>);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "Chicken");
    const ingredientRadio = screen.getByRole("radio", { name: /ingredient/i });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods para nomes", async () => {
    renderWithRouter(<Provider pageNameProp='Foods'><SearchBar /></Provider>);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "soup");
    const ingredientRadio = screen.getByRole("radio", { name: /name/i });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods pela primeira letra", async () => {
    renderWithRouter(<Provider pageNameProp='Foods'><SearchBar /></Provider>);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "a");
    const ingredientRadio = screen.getByRole("radio", {
      name: /first letter/i,
    });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });
  test("Testa se a barra de buscwdawdawdawdawd com mais de uma letra", async () => {
    renderWithRouter(<Provider pageNameProp='Foods'><SearchBar /></Provider>);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "aa");
    const ingredientRadio = screen.getByText(/first letter/i);
    userEvent.click(ingredientRadio);
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(searchButton);
    await waitFor(() => expect(global.alert).toHaveBeenCalled());
  });

  test("Testa se a barra de awdawdawdawd pela primeira letra com", async () => {
    renderWithRouter(<Provider pageNameProp='Foods'><SearchBar /></Provider>);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "xablau");
    const ingredientRadio = screen.getByRole("radio", {
      name: /name/i,
    });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
    await waitFor(() => expect(global.alert).toHaveBeenCalled());
  });

  test("Testa se a barra de busca funciona na tela foods para ingredientes", async () => {
    renderWithRouter(<Provider pageNameProp='Drinks'><SearchBar /></Provider>);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "vodka");
    const ingredientRadio = screen.getByRole("radio", { name: /ingredient/i });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods para nomes", async () => {
    renderWithRouter(<Provider pageNameProp='Drinks'><SearchBar /></Provider>);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "lemon");
    const ingredientRadio = screen.getByRole("radio", { name: /name/i });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods pela primeira letra", async () => {
    renderWithRouter(<Provider pageNameProp='Drinks'><SearchBar /></Provider>);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "l");
    const ingredientRadio = screen.getByRole("radio", {
      name: /first letter/i,
    });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na telawdawdawdaw", async () => {
    renderWithRouter(<Provider pageNameProp='Drinks'><SearchBar /></Provider>);;
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "ll");
    const ingredientRadio = screen.getByTestId("first-letter-search-radio");
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
    await waitFor(() => expect(global.alert).toHaveBeenCalled());
  });

  test("Testa se a barra de busca funciona na tela foods pela primeira letra com mais de uma letra", async () => {
    renderWithRouter(<Provider pageNameProp='Drinks'><SearchBar /></Provider>);;
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "xablau");
    const ingredientRadio = screen.getByRole("radio", {
      name: /name/i,
    });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

  test("Testa se a barra de busca funciona na tela foods pela primeira letra com mais de uma letra", async () => {
    renderWithRouter(<Provider pageNameProp='Drinks'><SearchBar /></Provider>);;
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "lemon drop");
    const ingredientRadio = screen.getByRole("radio", {
      name: /name/i,
    });
    const searchButton = screen.getByTestId("exec-search-btn");
    userEvent.click(ingredientRadio);
    userEvent.click(searchButton);
  });

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
