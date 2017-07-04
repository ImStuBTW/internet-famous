import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Welcome from './components/menu/Welcome';
import About from './components/menu/About';
import HomePage from './components/home/HomePage';
import TestPage from './components/test/TestPage';
import Game from './components/game/Game';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="test" component={TestPage} />
        <Route path="game" component={Game} />
        <Route path="about" component={About} />
    </Route>
);
