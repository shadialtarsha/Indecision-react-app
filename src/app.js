import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import configureStore from './store/configureStore';
import AppRouter, { history } from './routes/AppRouter';
import { login, logout } from './actions/auth';
import { startSetOptions } from './actions/options';
import firebase from './firebase/firebase';
import './styles/styles.scss';

const store = configureStore();
let hasRendered = false;

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetOptions()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/home');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    if (history.location.pathname === '/home') {
      history.push('/');
    }
  }
});
