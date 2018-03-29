import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import configureStore from './store/configureStore';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <IndecisionApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
