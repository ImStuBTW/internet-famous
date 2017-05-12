import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import TestPage from './components/test/TestPage';
import Card from './components/card/Card';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="test" component={TestPage} />
        <Route path="card" component={Card} />
    </Route>
);