import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Foods from '../pages/Foods/Foods';
import Drinks from '../pages/Drinks/Drinks';
import Profile from '../pages/Profile/Profile';
import DoneRecipes from '../pages/DoneRecipes/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes/FavoriteRecipes';
import Header from '../components/Header';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="foods/:id" component={ Foods } />
      <Route exact path="drinks/:id" component={ Drinks } />
      <Route exact path="/foods/:id/in-progress" component={ Foods } />
      <Route exact path="/drinks/:id/in-progress" component={ Drinks } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
