import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import test from './testReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    testValue: test
});

export default rootReducer;
