/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';

import routes from './routes';

import './styles/style.scss';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
