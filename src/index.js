/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history';
import { Router, useRouterHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import {syncHistoryWithStore} from 'react-router-redux';
import initialState from './reducers/initialState';

import routes from './routes';

import './styles/style.scss';

const browserHistory = useRouterHistory(createHistory)({
    basename: '/internet-famous/'
});

const store = configureStore(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
