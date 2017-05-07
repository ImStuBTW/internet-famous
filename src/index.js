/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import './styles/style.scss';

render(
    <h1>Howdy!</h1>,
    document.getElementById('app')
);
