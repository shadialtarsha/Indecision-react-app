import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LogingPage from '../components/LoginPage';
import IndecisionApp from '../components/IndecisionApp';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LogingPage} exact />
      <PrivateRoute path="/home" component={IndecisionApp} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
