import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Welcome from './components/menu/Welcome';
import About from './components/menu/About';
import HomePage from './components/home/HomePage';
import TestPage from './components/test/TestPage';
import Card from './components/card/Card';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="test" component={TestPage} />
        <Route path="card" component={Card} />
        <Route path="about" component={About} />
    </Route>
);
