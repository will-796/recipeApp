import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Foods from '../pages/Foods/Foods';
import Drinks from '../pages/Drinks/Drinks';
import Profile from '../pages/Profile/Profile';
import DoneRecipes from '../pages/DoneRecipes/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes/FavoriteRecipes';
import Header from '../components/Header';
import FoodsId from '../pages/FoodsId/FoodsId';
import DrinksId from '../pages/DrinksId/DrinksId';
import FoodsInProgress from '../pages/FoodsInProgress/FoodsInProgress';
import DrinksInProgress from '../pages/DrinksInProgress/DrinksInProgress';
import Footer from '../components/Footer/Footer';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="foods/:id" component={ FoodsId } />
      <Route exact path="drinks/:id" component={ DrinksId } />
      <Route exact path="/foods/:id/in-progress" component={ FoodsInProgress } />
      <Route exact path="/drinks/:id/in-progress" component={ DrinksInProgress } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
