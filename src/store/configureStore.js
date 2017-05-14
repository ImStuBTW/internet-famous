import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';

export default function configureStore(initialState, browserHistory) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, routerMiddleware(browserHistory), reduxImmutableStateInvariant())
    );
}
