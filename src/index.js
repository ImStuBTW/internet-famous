/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import {syncHistoryWithStore} from 'react-router-redux';

import routes from './routes';

import './styles/style.scss';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
