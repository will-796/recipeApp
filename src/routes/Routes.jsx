import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Foods from '../pages/Foods/Foods';
import Drinks from '../pages/Drinks/Drinks';
import Profile from '../pages/Profile/Profile';
import DoneRecipes from '../pages/DoneRecipes/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes/FavoriteRecipes';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails';
import RecipeInProgress from '../pages/RecipeInProgress/RecipeInProgress';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:id" render={ () => <RecipeDetails isFood /> } />
      <Route
        exact
        path="/drinks/:id"
        render={ () => <RecipeDetails isFood={ false } /> }
      />
      <Route
        exact
        path="/foods/:id/in-progress"
        render={ () => <RecipeInProgress isFood /> }
      />
      <Route
        exact
        path="/drinks/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
