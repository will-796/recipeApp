import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Recipes from '../pages/Recipes/Recipes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/recipes" component={ Recipes } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
